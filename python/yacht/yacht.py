from functools import partial

# Score categories
# Change the values as you see fit
YACHT = 'yacht'
ONES = 'ones'
TWOS = 'twos'
THREES = 'threes'
FOURS = 'fours'
FIVES = 'fives'
SIXES = 'sixes'
FULL_HOUSE = 'full_house'
FOUR_OF_A_KIND = 'four_of_a_kind'
LITTLE_STRAIGHT = 'little_straight'
BIG_STRAIGHT = 'big_straight'
CHOICE = 'choice'

def score(dice, category):
    score_funcs = {
        YACHT: score_yacht,
        ONES: partial(score_num, num=1),
        TWOS: partial(score_num, num=2),
        THREES: partial(score_num, num=3),
        FOURS: partial(score_num, num=4),
        FIVES: partial(score_num, num=5),
        SIXES: partial(score_num, num=6),
        FULL_HOUSE: score_full_house,
        FOUR_OF_A_KIND: score_four_of_a_kind,
        LITTLE_STRAIGHT: score_little_straight,
        BIG_STRAIGHT: score_big_straight,
        CHOICE: score_choice,
    }

    if category not in score_funcs:
        raise ValueError("Invalid Category")

    return score_funcs[category](dice=dice)


def score_yacht(dice):
    if len(dice) == 5 and len(set(dice)) == 1:
        return 50
    return 0

def score_num(num, dice):
    return sum(x for x in dice if x == num)

def score_full_house(dice):
    for die in dice:
        count = len([x for x in dice if x == die])
        if count != 2 and count != 3:
            return 0
    return sum(dice)

def score_four_of_a_kind(dice):
    for die in dice:
        count = len([x for x in dice if x == die])
        if count == 4 or count == 5:
            return die * 4
    return 0

def score_little_straight(dice):
    if sorted(dice) == [1, 2, 3, 4, 5]:
        return 30
    return 0

def score_big_straight(dice):
    if sorted(dice) == [2, 3, 4, 5, 6]:
        return 30
    return 0

def score_choice(dice):
    return sum(dice)
