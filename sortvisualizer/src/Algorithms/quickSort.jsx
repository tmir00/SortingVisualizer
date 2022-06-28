let counter = 0

function swapItems(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right, swap, color) {
    
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
            color(i, "yellow", counter)
            color(j, "yellow", counter)
            swapItems(items, i, j); //sawpping two elements
            counter += 2500
            swap(i, j, counter)
            
            color(i, "#9a0307", counter)
            color(j, "#9a0307", counter)
            i++;
            j--;
        }
    }
    // color(i, "green", counter)
    // color(j, "green", counter)
    color(Math.floor((right + left) / 2), "green", counter)
    return i;
}

function quickSort(items, swap, color, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right, swap, color); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, swap, color, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, swap, color, index, right);
        }
    }
    return items;
}

export function quickSortStart(items, swap, color, left, right) {
    
    quickSort(items, swap, color, left, right)
    counter = 0
}