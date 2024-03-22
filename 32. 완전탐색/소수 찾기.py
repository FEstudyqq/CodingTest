from itertools import permutations

def isSOSU(num) :
    if(num in [0, 1]):
        return False
    for i in range(2, num):
        if(num%i == 0):
            return False
    return True

def solution(numbers):
    numbers = list(numbers)
    numberCase = []
    for i in range(1, len(numbers)+1):     
        for num in permutations(numbers, i):
            numberCase.append(int(''.join(num)))

    answer = 0
    for num in list(set(numberCase)):
        if (isSOSU(num)):
            answer+=1
    return answer