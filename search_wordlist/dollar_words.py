import string

dollar_words = []

letters_to_values = {}
for index, letter in enumerate(string.letters):
	letters_to_values[letter] = (index%26)+1

word_list = open("english_wordlist.txt", "r")

for word in word_list:
	word = word.strip()
	total = 0
	for letter in word:
		total+=letters_to_values.get(letter, 0)
	if total==100:
		print word, 
		dollar_words.append(word)

print len(dollar_words)



