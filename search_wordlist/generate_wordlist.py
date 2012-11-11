import requests

r = requests.get('http://www.nicklea.com/articles/wordlist.txt')
word_list = r.text

f = open("english_wordlist.txt", 'w')
f.write(word_list)
f.close()