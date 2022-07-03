import { appendCounter, counter } from "../NavBar/NavBar";


export function swap(lst, index1, index2) {
    const temp = lst[index1]
    lst[index1] = lst[index2]
    lst[index2] = temp
    return lst
}


function partition(lst, left, right, swapBars, color) {
    let i = left - 1
    let j = left
    const pivot = lst[right]
    color(right, "purple", counter)

    while (j < right) {
        if (lst[j] < pivot){
            i += 1
            color(i, "yellow", counter)
            color(j, "yellow", counter)
            appendCounter()
            lst = swap(lst, i, j)
            swapBars(i, j, counter)
            color(i, "#9a0307", counter)
            color(j, "#9a0307", counter)
        }
        j += 1
    }
    for (let k = i + 1; k < right + 1; k++) {
        color(k, "yellow", counter)
        color(right, "yellow", counter)
        appendCounter()
        swap(lst, k, right)
        swapBars(k, right, counter)
        color(k, "#9a0307", counter)
        color(right, "#9a0307", counter)
    }

    color(i + 1, "green", counter)
    return i + 1
}


export function quicksort(lst, left, right, swap, color) {
    if (lst.length > 1) {
        let pivotIndex = partition(lst, left, right, swap, color)

        if (pivotIndex < right) {
            quicksort(lst, pivotIndex + 1, right, swap, color)
        }
        if (pivotIndex > left) {
            quicksort(lst, left, pivotIndex - 1, swap, color)
        }
    }
    return lst
}
