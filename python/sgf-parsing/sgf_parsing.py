import re

class SgfTree(object):
    def __init__(self, properties=None, children=None):
        self.properties = properties or {}
        self.children = children or []

    def __eq__(self, other):
        if not isinstance(other, SgfTree):
            return False
        for k, v in self.properties.items():
            if k not in other.properties:
                return False
            if other.properties[k] != v:
                return False
        for k in other.properties.keys():
            if k not in self.properties:
                return False
        if len(self.children) != len(other.children):
            return False
        for a, b in zip(self.children, other.children):
            if a != b:
                return False
        return True

    def __ne__(self, other):
        return not self == other

def parse(input_string):
    check_valid_input(input_string)
    nodes = "".join(re.findall(r'\((.*?)\)', input_string)).split(";")

    properties = parse_properties(nodes[1])
    children = [parse_child(child) for child in nodes[2:]]

    return SgfTree(properties, children)

def check_valid_input(input_string):
    if re.match(r'\(.*?\)', input_string) == None or re.match(".?;.?", input_string) == None:
        raise ValueError("Invalid input")

def check_valid_property(prop_string):
    if re.findall(r"[A-Z]+\[(\w+)\]+", prop_string) == []:
        raise ValueError("Invalid property")

def parse_properties(input_string):
    if input_string == "":
        return {}
    check_valid_property(input_string)

    properties = {}

    for group in re.findall(r".*?([A-Z]+[\[\w+\]]+).*?", input_string):
        key, *values = re.findall(r"[\w']+", group)
        properties[key] = values

    return properties

def parse_child(child_string):
    properties = parse_properties(child_string)
    return SgfTree(properties)
