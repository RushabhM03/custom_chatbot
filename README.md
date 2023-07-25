<h1 align="center"> Custom AI powered chatbot </h1>
<br>

<div align="center">
  
  Your very own customizable AI chatbot. Create your very own custom chatbot by training it according to your very own application and use it in your app.
  
  </div>

<br><br><br>



## 👨‍💻 Techstack
- React
- Javascript
- Python
- Tailwind
- Flask
- Pytorch

[![My Skills](https://skillicons.dev/icons?i=flask,react,tailwind,javascript,python,pytorch&perline=7)](https://skillicons.dev)


<br><br><br>

## 💻 Code setup

### Clone the code repository
```
git clone https://github.com/RushabhM03/custom_chatbot.git
```


### Create a virtual environment
#### Run the commands from the bot folder
```
python -m venv env_name
env_name/scripts/activate (for Windows)
pip install -r requirements.txt
```

### Run the bot
```
python app.py
```

### Setup the client (in the client folder)
```
npm install
npm run dev
```


<br><br><br>

## 🚀 Features
1. Step by step guide on the client on how to setup the custom bot
2. virtual chatbot assistant for your application


<br><br><br>


## 💻 Creating your own chatbot
### Run these while still in the virtual environment
### Edit the intents.json file in the Data folder in the bot directory. Example:
```
{
"tag": "greeting",
      "patterns": [
        "Hi",
        "Hey",
        "How are you",
        "Is anyone there?",
        "Hello",
        "Good day"
      ],
      "responses": [
        "Hey :-)",
        "Hello, thanks for visiting",
        "Hi there, what can I do for you?",
        "Hi there, how can I help?"
      ]
}
```

### Then train the model after editing the intents.json
```
python train.py
```

<br><br>

## 🔡 NLP pipeline
1. Tokenization

```
First we tokenize the sentence inputted by the user. Tokenization simply means converting the sentence into an array
of words. For more information on tokenization, refer the links given in the footer with regards to tokenization.
```
<br>

2. Stemming

```
After converting to lower case we perform stemming. In stemming, we convert all the words to their root word.
```
<br>

3. Bag of words
```
Now we convert the array of words to a bag of words which consists of 0s and 1s. 
```


<br><br>

## 🛰️ Training architecture
<div align="center">

<img src="https://github.com/RushabhM03/custom_chatbot/assets/68846562/0a942b4d-d89d-4c5f-8a74-a6835e84d79f" width="500px">
  
</div>


## 👩‍💻 Contributors

Team members

- [**R**ushabh Maru](https://github.com/RushabhM03) - rushabh.maru123@gmail.com
