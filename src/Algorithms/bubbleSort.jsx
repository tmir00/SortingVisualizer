import { appendCounter, counter } from "../NavBar/NavBar";

export function bblSort(array, swap, color) {
    let arr = array
    var i, j;
    var len = arr.length;
     
    var isSwapped = false;
     
    for(i = 0; i < len; i++){
       
      isSwapped = false;
       
      for(j = 0; j < len; j++){
          if(arr[j] > arr[j + 1]){
            color(j, "yellow", counter)
            color(j + 1, "yellow", counter)
            appendCounter()
            var temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            isSwapped = true;
            swap(j, j + 1, counter)
            color(j, "#9a0307", counter)
            color(j + 1, "#9a0307", counter)
          }
      } 
      // IF no two elements were swapped by inner loop, then break
      color(len - 1 - i, "green", counter)

      if(!isSwapped){
        for(j = 0; j < len; j++){
            color(j, "green", counter)
        }   
        break;
      }
    }
    return arr
}