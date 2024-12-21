from functools import cache

@cache
def mutate_a_stone(a_stone: str) -> str:
    """mutate a stone"""
    #print(a_stone)
    if a_stone == '0':
        return '1'
    elif len(a_stone) % 2 == 0:
        stone_1 = str(int(a_stone[len(a_stone) // 2:]))
        stone_2 = str(int(a_stone[:len(a_stone) // 2]))
        #print(stone_1 + " " + stone_2)
        return stone_1 + " " + stone_2
    else:
        return str(int(a_stone) * 2024)