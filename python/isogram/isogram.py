import re

def is_isogram(string):
    string_no_punct = re.sub(r'[^\w]', '', string).lower()
    return len(string_no_punct) == len(set(string_no_punct))
