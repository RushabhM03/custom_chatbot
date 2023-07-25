import nltk
from nltk.stem.porter import PorterStemmer
import numpy as np

#nltk.download('punkt')

stemmer = PorterStemmer()

def tokenize(sentence):
    """
    split sentence into array of words/tokens
    a token can be a word or punctuation character, or number
    """
    return nltk.word_tokenize(sentence)

def stem(word):
    """
    stemming = find the root form of the word
    examples:
    words = ["organize", "organizes", "organizing"]
    words = [stem(w) for w in words]
    -> ["organ", "organ", "organ"]
    """
    l_word = lowercase(word)
    return stemmer.stem(l_word)
    
def bag_of_words(tokenized_sentence, all_words):
    """
    return bag of words array:
    1 for each known word that exists in the sentence, 0 otherwise
    example:
    sentence = ["hello", "how", "are", "you"]
    words = ["hi", "hello", "I", "you", "bye", "thank", "cool"]
    bog   = [  0 ,    1 ,    0 ,   1 ,    0 ,    0 ,      0]
    """
    tokenized_sentence = [stem(w) for w in tokenized_sentence]
    bag = np.zeros(len(all_words), dtype=np.float32)
    for idx, w in enumerate(all_words):
        if w in tokenized_sentence:
            bag[idx] = 1.0
    
    return bag


def lowercase(word):
    return word.lower()


# test
# a = "How long does shipping take?"
# print(a)
# a = tokenize(a)
# print(a)
# a = stem(a[3])
# print(a)

#a = ["hi", "How", "are", "you"]
#w = ["hi", "hello", "how", "are", "you", "yes", "sir", "bye"]
#print(bag_of_words(a,w))