from itertools import product

def solution(word):
    wordCase = []
    for i in range(1, 6):
        for permutation in product(['A', 'E', 'I', 'O', 'U'], repeat=i):
            wordCase.append(''.join(permutation))
    wordCase = sorted(list(set(wordCase)))
    
    return wordCase.index(word)+1