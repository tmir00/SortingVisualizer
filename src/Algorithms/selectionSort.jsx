import { appendCounter, counter } from "../NavBar/NavBar";
import { swap } from "./quickSort";

export function selectionSort(lst, swapBars, color) {
    for (let j = 0; j < lst.length; j++) {
        color(j, "#9a0307", 0)
      }

    for (let i = 0; i < lst.length - 1; i++) {
        let minIndex = i

        for (let j = i + 1; j < lst.length; j++) { 
            if (lst[j] < lst[minIndex]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            color(i, "yellow", counter)
            color(minIndex, "yellow", counter)
            appendCounter()
            swap(lst, i, minIndex)
            swapBars(i, minIndex, counter)
            color(minIndex, "#9a0307", counter)
        }
        appendCounter()
        color(i, "green", counter)
    }
    color(lst.length - 1, "green", counter)
    return lst
}
