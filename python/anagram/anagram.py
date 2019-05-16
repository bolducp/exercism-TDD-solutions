def find_anagrams(word, candidates):
    case_insensitive_word = word.lower()
    parsed_word = sorted(case_insensitive_word)
    
    return [candidate for candidate in candidates
        if sorted(candidate.lower()) == parsed_word and candidate.lower() != case_insensitive_word]
