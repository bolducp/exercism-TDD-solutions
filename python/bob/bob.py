import re

def response(hey_bob):
    if is_silence(hey_bob):
        return responses["silence"]

    yelling = is_yelling(hey_bob)
    questioning = is_question(hey_bob)

    if yelling and questioning:
        return responses["question_caps"]
    elif yelling:
        return responses["all_caps"]
    elif questioning:
        return responses["question"]
    else:
        return responses["other"]


def is_question(text):
    return text.strip()[-1] == "?"

def is_yelling(text):
    return text.upper() == text and re.findall("[a-zA-Z]", text)

def is_silence(text):
    return text.strip() == ""

responses = {
    "question": "Sure.",
    "all_caps": "Whoa, chill out!",
    "question_caps": "Calm down, I know what I'm doing!",
    "silence": "Fine. Be that way!",
    "other": "Whatever.",
}
