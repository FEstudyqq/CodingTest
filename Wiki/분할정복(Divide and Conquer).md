# 📌개념

![image](./images/divide-and-conquer.webp)

- 문제를 작은 문제로 분할하고 각각의 작은 문제를 해결한 결과를 조합하여, 전체 문제를 해결하는 방법

```
💡 재귀와 분할 정복은 서로 다른 것이다.
분할 정복 알고리즘을 구현할 때 일반적으로 재귀를 이용하는 것 뿐이다.
```

# 📌예시

## 퀵 정렬 (Quick Sort)

```javascript
function quickSort(arr) {
  // 종료 조건 만족 시 결과 반환
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [5, 3, 7, 2, 9, 1];
const sortedArr = quickSort(arr);
```

## 이진 탐색 (Binary Search)

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = (left + right) / 2;
    if (arr[mid] === target) return mid;
    else if (arr[mid < target]) left = mid + 1;
    else right = mid - 1;
  }
}

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 정렬된 배열
const target = 7; // 찾고자 하는 숫자
binarySearch(sortedArr, target);
```

# 📌예시 문제

- [종이의 개수](../11.%20재귀/종이의%20개수.js)
