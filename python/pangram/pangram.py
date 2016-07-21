def is_pangram(sentence):
    letters = 'abcdefghijklmnopqrstuvwxyz'
    for letter in letters:
        if letter not in sentence.lower():
            return False
    return True