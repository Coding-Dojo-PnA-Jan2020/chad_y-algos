// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function pushFront(arr, val) {
    for (var i = arr.length; i >= 1; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = val;
    return arr;
}

function removeAt(arr, val) {
    b = arr[val];
    for (var i = val; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return b;
}

function minToFront(arr) {
    var minValue = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
            b = i + 1;
        }
    }
    pushFront(arr, minValue);
    removeAt(arr, b);

    return arr;
}

console.log(minToFront([4,2,1,3,5]));