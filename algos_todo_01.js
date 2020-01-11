/*
Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods
*/
function pushFront(arr, val){
    for(var i=arr.length; i>=1; i-- ){
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    return arr;
}

console.log(pushFront([10,20,30,40,50,60], 0));

/*
Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
*/
function popFront(arr){
    var b = arr[0];
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.pop();
    console.log(arr);
    return b;
}

console.log(popFront([10,20,30,40,50,60]));

/*
Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
*/
function insertAt(arr, loc, val) {
    for (var i = arr.length; i > loc; i--) {
        arr[i] = arr[i - 1];
    }
    arr[loc] = val;
    return arr;
}

console.log(insertAt([10,20,30,40,50,60], 3, 35));

/*
Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
*/
function removeAt(arr, val) {
    b = arr[val];
    for (var i = val; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    console.log(arr);
    return b;
}

console.log(removeAt([10,20,30,40,50,60], 3));


/*
Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
*/
function swapPos(arr) {
    var i = 0;
    while (i < arr.length) {
        if (arr.length % 2 == 1 && i == arr.length - 1) {
            break;
        } else {
            var b = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = b;
        }
        i = i + 2;
    }
    return arr;
}

console.log(swapPos([1,2,3,4]));
console.log(swapPos([1,2,3,4,5]));

/*
Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

Second: Solve this without using any nested loops.
*/
function noDups(arr) {
    var i = 0;
    var newArr = [];
    while (i < arr.length) {
        newArr[newArr.length] = arr[i];
        if (arr[i + 1] == arr[i]) {
            i = i + 2;
        } else {
            i++;
        }
    }
    return newArr;
}

console.log(noDups([1,1,2,2,3,3,4,4]));