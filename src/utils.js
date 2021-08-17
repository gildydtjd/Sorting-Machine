export function bubbleSort(numArr) {
  const len = numArr.length;
  const newArr = [...numArr];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (newArr[i] < newArr[j]) {
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
    }
  }
  return newArr;
}

export function selectionSort(numArr) {
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
  return newArr;
}

export function insertionSort(numArr) {
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
  return newArr;
}
