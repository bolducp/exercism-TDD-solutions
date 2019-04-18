import string
import random

class Robot(object):
    used_names = []

    def __init__(self):
        self.name = self.create_random_name()

    def create_random_name(self):
        numbers = ''.join(random.choices(string.digits, k=3))
        letters = ''.join(random.choices(string.ascii_uppercase, k=2))
        name = letters + numbers

        if name not in Robot.used_names:
            Robot.used_names.append(name)
            return name
        return self.create_random_name()


    def reset(self):
        new_name = self.create_random_name()

        if self.name in Robot.used_names: Robot.used_names.remove(self.name)
        self.name = new_name
