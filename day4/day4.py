import re

def part_one():
    """function for part one of the problem"""
    with open('input.txt', encoding="utf-8") as f:
        f_txt = f.read()
        f_array = f_txt.split("\n")
        for i in range(len(f_array)):
            for j in range(len(f_array[i])):
                check_xmas(i, j, f_array)

def check_xmas(i, j, f_array):
    return True

if __name__ == "__main__":
    print(part_one())