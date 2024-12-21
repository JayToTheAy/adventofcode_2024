import re

def part_one():
    """function for part one of the problem"""
    sum = 0

    with open('input.txt', encoding="utf-8") as f:
        reg = r"mul\([0-9]+,[0-9]+\)"
        lomatches = re.findall(reg, f.read())

    for match_pair in lomatches:
        pair = re.findall(r"[0-9]+", match_pair)
        sum += int(pair[0]) * int(pair[1])

    return sum

def part_two():
    sum = 0

    with open('input.txt', encoding="utf-8") as f:
        reg = r"mul\([0-9]+,[0-9]+\)|do\(\)|don't\(\)"
        lomatches = re.findall(reg, f.read())

    counting = True
    for match in lomatches:
        if match == 'do()':
            counting = True
        elif match == "don't()":
            counting = False
        elif counting:
            pair = re.findall(r"[0-9]+", match)
            sum += int(pair[0]) * int(pair[1])

    return sum

print(part_one())
print(part_two())