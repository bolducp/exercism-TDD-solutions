sounds = {
    3: "Pling",
    5: "Plang",
    7: "Plong"
}

def raindrops(number):
    return  "".join([sounds[num] for num in sounds if number % num == 0]) or str(number)
