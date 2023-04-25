// function partition(arr, l, r) {
//     let pivot = arr[r];

//     let i = -1;
//     for (let j = 0; j <= r; j++) {
//         // console.log(arr[j]);
//         if (arr[j] < pivot) {
//             // Increment i
//             i += 1;

//             let temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp;
//         }

//         if (j === r ) {
//             let temp = arr[r];
//             arr[j] = arr[i + 1];
//             arr[i + 1] = temp; 
//         }
//     }

//     return i + 1;
// }


function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

// Exact sum
// Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target. False if not.
function exactSum(arr, tgt) {
    let left = 0;
    let right = arr.length - 1;
    let sum = 0;
    while (left < right) {
        // If right is larger than the target, iterate down
        if (right > tgt) {
            right--;
            continue;
        }

        sum = arr[left] + arr[right];
        if (sum > tgt) {
            right--;
        } else if (sum < tgt) {
            left++;
        } else if (sum === tgt) {
            return true;
        }
    }
    return false;
}

function combineSortedArrays(arr1, arr2) {
    let i = j = 0;
    let merged = [];
    while (i < arr1.length || j < arr2.length) {
        // if one is exhuasted, just merge the rest of the array and break
        if (i > arr1.length && j < arr2.length) {
            merged.push(...arr2);
            break;
        } else if (j > arr2.length && i < arr1.length) {
            merged.push(...arr1);
            break;
        }

        // if left array is smaller, push and increment i
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
        // if right array is smaller, push right num and increment j
            merged.push(arr2[j]);
            j++;
        }
    }

    return merged;
}

function pangram(sentence) {
    let alpha = new Set(sentence);
    return alpha.length === 26;
}

function findWinners (matches) {
    let winnerMap = new Map();

    // Loop 
    for (let result of matches) {
        if (!winnerMap.has(result[0])) {
            winnerMap.set(result[0], 0);
        }

        winnerMap.set(result[1], winnerMap.get(result[1]) + 1 || 1);
    }

    // Should have map all winners with their losses
    let undefeated = [];
    let winners = [];
    winnerMap.forEach((value, key) => {
        if (value === 0) {
            undefeated.push(key);
        } else if (value === 1) {
            winners.push(key);
        }
    });

    return [undefeated.sort(), winners.sort()];
}


















