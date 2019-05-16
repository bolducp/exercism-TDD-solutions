def color_code(color):
    if color not in color_codes:
        raise ValueError("Sorry, that color isn't coded.")
    return color_codes[color]

def colors():
    return list(color_codes.keys())

color_codes = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
}
