import { appendCounter, counter } from "../NavBar/NavBar";
import { swap } from "./quickSort";

export function heapsort(lst, swapBars, color) {
    for (let j = 0; j < lst.length; j++) {
        color(j, "#9a0307", 0)
    }

    let n = lst.length - 1
    buildMaxHeap(lst, n, swapBars, color)
    for (let i = n; i >= 0; i--) {
        color(i, "yellow", counter)
        color(0, "yellow", counter)
        appendCounter()
        swap(lst, 0, i)
        swapBars(0, i, counter)
        color(i, "green", counter)
        color(0, "#9a0307", counter)
        n -= 1
        heapify(lst, 0, n, swapBars, color)
    }
    color(0, "green", counter)
    return lst
}

function buildMaxHeap(lst, n, swapBars, color) {
    for (let i = Math.floor(n / 2); i >= 0; i--) {
        heapify(lst, i, n, swapBars, color)
    }
}

function heapify(lst, index, n, swapBars, color) {
    let left = 2 * index
    let right = 2 * index + 1
    let maximum = 0

    if ((left <= n) && (lst[left] > lst[index])) {
        maximum = left
    }
    else {
        maximum = index
    }
    if ((right <= n) && (lst[right] > lst[maximum])) {
        maximum = right
    }

    if (maximum !== index) {
        color(maximum, "yellow", counter)
        color(index, "yellow", counter)
        appendCounter()
        swap(lst, index, maximum)
        swapBars(index, maximum, counter)
        color(index, "#9a0307", counter)
        color(maximum, "#9a0307", counter)
        heapify(lst, maximum, n, swapBars, color)
    }
}
