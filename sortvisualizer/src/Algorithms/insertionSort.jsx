import { appendCounter, counter } from "../NavBar/NavBar";
import { swap } from "./quickSort";

export function insertionSort(lst, swapBars, color) {
    for (let i = 0; i < lst.length; i++) {
        let j = i
        while (j > 0 && lst[j - 1] > lst[j]) {
            color(j, "yellow", counter)
            color(j - 1, "yellow", counter)
            appendCounter()
            swap(lst, j, j - 1)
            swapBars(j, j-1, counter)
            color(j - 1, "green", counter)
            color(j, "green", counter)
            j = j - 1
        }
    }
    return lst
}