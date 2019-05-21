def is_equilateral(sides):
    return check_is_triange(sides) and len(set(sides)) == 1

def is_isosceles(sides):
    return check_is_triange(sides) and len(set(sides)) < 3

def is_scalene(sides):
    return check_is_triange(sides) and len(set(sides)) == 3

def check_is_triange(sides):
    sorted_sides = sorted(sides)
    if 0 in sides or sorted_sides[2] > (sorted_sides[0] + sorted_sides[1]):
        return False
    return True
