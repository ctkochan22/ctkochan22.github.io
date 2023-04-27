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

function largestUniqueNumber (nums) {
    let numMap = new Map();
    for (let num of nums) { // O(n)
        numMap.set(num, numMap.get(num) + 1 || 1);
    }

    let max = -1;
    numMap.forEach((value, key) => { // O(m)
        if (value === 1) {
            max = Math.max(max, key);
        }
    });

    return max;
}

function maxNumberOfBallons (text) {
    let ballonMap = new Map([['b', 0], ['a', 0], ['n', 0]]);
    let doubleMap = new Map([['l', 0], ['o', 0]]);

    for (let c of text) {
        if (ballonMap.has(c)) {
            ballonMap.set(c, ballonMap.get(c) + 1);
        }

        if (doubleMap.has(c)) {
            doubleMap.set(c, doubleMap.get(c) + 1);
        }
    }

    // Get min of ballonMap
    let ballonMin = Math.min(Array.from(ballonMap.values()));
    let doubleMin = Math.floor(Math.min(Array.from(doubleMap.values()))/2);

    return Math.min(ballonMin, doubleMin);
}

function groupAnagrams (strs) {
    let anaMap = {};

    for (let word of strs) { // O(n)
        let sorted = word.split('').sort().join('');
        let value = anaMap[sorted] || [];
        anaMap[sorted] = [...value, word];
    }

    let ans = [];
    for (const key in anaMap) {
        ans.push(anaMap[key]);
    }

    return ans;
}


function minimumCardPickup (cards) {
    // We are going to iterate through the numbers
    let cardMap = new Map();
    let curr = null;
    for (let i = 0; i < cards.length; i++) {
        // If it exists, we need to determine the index difference
        if (cardMap.has(cards[i])) {
            curr = curr ? Math.min(curr, i - cardMap.get(cards[i])) : i - cardMap.get(cards[i]);
        }

        // Now update or set the cardNum into the map with the index as the value
        cardMap.set(cards[i], i);
    }

    // Since we are inclusive, we need to add 1
    return curr ? curr + 1 : -1;
}

function maximumSum (nums) {
    let sumMap = {};
    let curr = -1;
    for (let n of nums) {
        let sumDigit = n;
        if (n > 9) {
            let arr = n.toString().split('');
            sumDigit = parseInt(arr[0]) + parseInt(arr[1]);
        }

        // Check if new max is king
        if (sumMap[sumDigit] !== undefined) {
            curr = Math.max(curr, sumMap[sumDigit] + n);
        }

        // Set sumDigit in obj with value being the largest 
        sumMap[sumDigit] = Math.max((sumMap[sumDigit] || -1), n);
    }

    return curr;
}

function sumDigit(digits) {
    // Turn to string
    let arr = digits.toString().split('');
    return parseInt(arr[0]) + parseInt(arr[1]);
}

var maximumSumTwp = function(nums) {
    let getDigitSum = num => {
        let digitSum = 0;
        while (num > 0) {
            digitSum += num % 10;
            num = Math.floor(num / 10);
        }
        return digitSum;
    }

    let sumMap = {};
    let curr = -1;
    for (let n of nums) {
        let sumDigit = getDigitSum(n);

        // Check if new max is king
        if (sumMap[sumDigit] !== undefined) {
            curr = Math.max(curr, sumMap[sumDigit] + n);
        }

        // Set sumDigit in obj with value being the largest
        sumMap[sumDigit] = Math.max((sumMap[sumDigit] || -1), n);
    }

    return curr;
};

// grid = [[3,2,1],[1,7,6],[2,7,7]]

function equalPairs (grid) {
    let rowMap = {};
    let columnArray = [];
    let ans = 0;

    // Add each row as a string hash
    for (let i = 0; i < grid.length; i++) {
        let key = grid[i].join(',');
        rowMap[key] = rowMap[key] + 1 || 1;

        for (let j = 0; j < grid.length; j++) {
            // Insert each row's number with associated index of the column
            columnArray[j] = [...(columnArray[j] || []), grid[i][j]];
        }
    }

    for (let column of columnArray) {
        let key = column.join(',');
        if (rowMap[key] !== undefined) {
            ans += rowMap[key];
        }
    }

    return ans;
}
// Looking up if I can join int -- it'll turn it into a string!
// Split array into sub ararys -- no dice


function canConstruct (ransomNote, magazine) {
    let magMap = new Map();

    // Hash map magazine
    for (let char of magazine) {
        magMap.set(char, magMap.get(char) + 1 || 1);
    }

    // Iterate through ransomNote and decrement mag map
    for (let char of ransomNote) {
        let count = magMap.get(char);

        if (magMap.get(char)) {
            magMap.set(char, count - 1);
        } else {
            return false;
        }
    }

    return true;
}


function numJewelsInStones (jewels, stones) {
    const jewelSet = new Set(jewels);

    let ans = 0;

    for (let char of stones) {
        if (jewelSet.has(char)) {
            ans++;
        }
    }

    return ans;
};









