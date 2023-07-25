import json
from nltk_utils import tokenize, stem, bag_of_words
import numpy as np
import torch
import torch.nn as nn
from torch.utils.data import DataLoader, Dataset
import sys
sys.path.append('../Model')
from Model.model import NeuralNet

with open('Data/intents.json', 'r') as file:
    intents = json.load(file)

# print(intents)

all_words = []
tags = []
xy = []

ignore_pucts = ['?', '.', ',', '!', '>', '<', '|', '/']

for intent in intents['intents']:
    tag = intent['tag']
    tags.append(tag)

    for pattern in intent['patterns']:
        w = tokenize(pattern)
        all_words.extend(w)
        xy.append((w, tag))

# print(all_words)
all_words = [stem(w) for w in all_words if w not in ignore_pucts]

# remove duplicates and sort
all_words = sorted(list(set(all_words)))
tags = sorted(list(set(tags)))
# print(all_words)
# print(tags)

X_train = []
Y_train = []

for (pattern_sentence, tag) in xy:
    bag = bag_of_words(pattern_sentence, all_words)
    X_train.append(bag)
    label = tags.index(tag)
    Y_train.append(label)

X_train = np.array(X_train)
Y_train = np.array(Y_train)

class ChatDataset(Dataset):
    def __init__(self):
        self.n_samples = len(X_train)
        self.x_data = X_train
        self.y_data = Y_train
    
    def __getitem__(self, index):
        return self.x_data[index], self.y_data[index]
    
    def __len__(self):
        return self.n_samples


batch_size = 8
dataset = ChatDataset()
train_loader = DataLoader(dataset=dataset, batch_size=batch_size, shuffle=True, num_workers=0)

hidden_size = 8
output_size = len(tags)
input_size = len(all_words)
# print(input_size)
# print(output_size)
# print(len(X_train[0]))

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = NeuralNet(input_size, hidden_size, output_size).to(device)

# loss
learning_rate = 0.001
num_epochs = 2000
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

# training loop
for epoch in range(num_epochs):
    for(words, labels) in train_loader:
        words = words.to(device)
        labels = labels.to(device, dtype=torch.int64)

        outputs = model(words)
        loss = criterion(outputs, labels)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

    if((epoch+1)%100==0):
        print(f'epoch {epoch+1} / {num_epochs}, loss = {loss.item():.4f}')

print(f"final loss =  {loss.item():.4f}")

# saveing model state
data = {
    "model_state": model.state_dict(),
    "input_size": input_size,
    "output_size" :output_size,
    "hidden_size": hidden_size,
    "all_words": all_words,
    "tags": tags
}

file_name = "Model/data.pth"
torch.save(data, file_name)

print("training complete and file saved to ", file_name)