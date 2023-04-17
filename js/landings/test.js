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



