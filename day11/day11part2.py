"""this times out; could probably be optimized by moving to a dict since place in-list is unimportant"""
from functools import cache
from multiprocessing.pool import ThreadPool
from math import ceil
from time import perf_counter
from os import cpu_count

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


if __name__ == "__main__":
    if (NCPUS := cpu_count()):
        NCPUS = max(NCPUS//2, 2)
    else:
        NCPUS = 2

    N = 50_000

    stones = input()
    num_blinks = int(input())
    list_of_stones = stones.split(" ")

    with ThreadPool(NCPUS) as pool:
        chunksize = ceil(len(list_of_stones) / NCPUS)
        start = perf_counter()
        results = list(pool.map_async(mutate_a_stone, list_of_stones, chunksize=chunksize).get())
        end = perf_counter()
        assert len(results) == N
        print(results[-20:])
        print(f'Duration={end-start:.4f}s')
