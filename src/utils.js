export function isNumber(n) {
  return Number(n) === n;
}

export function bubbleSort(numArr, isDesc) {
  const len = numArr.length;
  const newArr = [...numArr];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (newArr[i] > newArr[j]) {
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
    }
  }
  if (isDesc) {
    return newArr.reverse();
  } else {
    return newArr;
  }
}

export function selectionSort(numArr, isDesc) {
  const len = numArr.length;
  const newArr = [...numArr];

  for (let i = 0; i < len - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (newArr[j] < newArr[minIdx]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      [newArr[i], newArr[minIdx]] = [newArr[minIdx], newArr[i]];
    }
  }
  if (isDesc) {
    return newArr.reverse();
  } else {
    return newArr;
  }
}

export function insertionSort(numArr, isDesc) {
  const len = numArr.length;
  const newArr = [...numArr];
  let idx = 0;

  for (let i = 0; i < len; i++) {
    idx = i;
    while (newArr[idx] !== undefined && newArr[idx - 1] > newArr[idx]) {
      [newArr[idx - 1], newArr[idx]] = [newArr[idx], newArr[idx - 1]];
      idx--;
    }
  }
  if (isDesc) {
    return newArr.reverse();
  } else {
    return newArr;
  }
}
