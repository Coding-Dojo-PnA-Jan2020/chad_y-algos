// To Do 3
// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 
// rBinarySearch([1,3,5,6],4) = false; 
// rBinarySearch([4,5,6,8,12],5) = true.
function rBinarySearch(arr, val, startIdx = 0, endIdx = arr.length-1) {
    if (val < arr[startIdx] || val > arr[endIdx]) {
        return false;
    }
    var midIdx = Math.floor((startIdx+endIdx)/2);
    if (arr[midIdx] == val) {
        return true;
    }
    else if (arr[midIdx] > val) {
        return rBinarySearch(arr, val, startIdx, endIdx = midIdx-1);
    }
    else {
        return rBinarySearch(arr, val, startIdx = midIdx+1, endIdx);
    }

}

console.log(rBinarySearch([1,3,5,6],4));
console.log(rBinarySearch([4,5,6,8,12],5));
console.log(rBinarySearch([-5,2,4,9,12],5));



// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).
function rGCF(num1, num2) {
    if (num1 == num2) {
        return num1;
    }
    if (num1 > num2) {
        return rGCF(num1-num2, num2);
    }
    if (num2 > num1) {
        return rGCF(num1, num2-num1);
    }
}

console.log(rGCF(1800, 1020));
// console.log(rGCF(123456, 987654)); // Stack exceeded

function rGCF2(num1, num2) {
    if (num2 == 0) {
        return num1;
    }
    else {
        return rGCF2(num2, (num1 % num2));
    }
}

console.log(rGCF2(1800, 1020));
console.log(rGCF2(123456, 987654));