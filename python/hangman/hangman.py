import re

# Game status categories
# Change the values as you see fit
STATUS_WIN = "win"
STATUS_LOSE = "lose"
STATUS_ONGOING = "ongoing"


class Hangman(object):
    def __init__(self, word):
        self.remaining_guesses = 9
        self.status = STATUS_ONGOING
        self.word = word
        self.guesses = []

    def guess(self, char):
        if self.status != STATUS_ONGOING:
            raise ValueError("Sorry! The game is over. You %s" % self.status)

        if char not in self.word or char in self.guesses:
            self.remaining_guesses -= 1

        self.guesses.append(char)

        if self.game_won():
            self.status = STATUS_WIN

        if len(self.guesses) >= 10 and self.status != STATUS_WIN:
            self.status = STATUS_LOSE


    def get_masked_word(self):
        return "".join([char if char in self.guesses else "_" for char in self.word])

    def get_status(self):
        return self.status

    def game_won(self):
        return re.match("_", self.get_masked_word()) == None
