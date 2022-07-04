import { appendCounter, counter } from "../NavBar/NavBar";
import { swap } from "./quickSort";

export function mergesort(lst, left, right, swapBars, color) {
    if (left < right) {
        const n = right + left
        const middle = Math.floor(n / 2)
        mergesort(lst, left, middle, swapBars, color)
        mergesort(lst, middle + 1, right, swapBars, color)
        return merge(lst, left, middle, middle + 1, right, swapBars, color)
    }
    else {
        return lst
    }
}

function merge(lst, left1, right1, left2, right2, swapBars, color) {
    const originalLeft = left1
    const originalRight = right2

    if (lst[right1] < lst[left2]) {
        return lst
    }

    while (left1 <= right1 && left2 <= right2) {
        color(left2, "yellow", counter)
        color(left1, "yellow", counter)
        appendCounter()
        if (lst[left1] > lst[left2]) {
            for (let k = left1; k < left2 + 1; k++) {
                swap(lst, k, left2)
                swapBars(k, left2, counter)
            }

            left2 += 1
            left1 += 1
            right1 += 1
        }
        else {
            left1 += 1
        }
        color(left1, "#9a0307", counter)
        color(left2, "#9a0307", counter)

        for (let i = originalLeft; i < originalRight + 1; i++) {
            color(i, "green", counter)
        }
    }
    return lst
}
