// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks.
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
function stripSpace(myString) {
    myString = myString.replace(/ /g,'');
    return myString;
}

console.log(stripSpace(" Pl ayTha tF u nkyM usi c "))



// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 01357924680.
function numsOnly(myString) {
    myString = myString.replace(/\D/g,'');
    return myString;
}

console.log(numsOnly("0s1a3y5w7h9a2t4?6!8?0"));




// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW".
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
function acroString(myString) {
    var b = "";
    myString = myString.split(/\s/);

    for (var i = 0; i < myString.length; i++) {
        b += myString[i].substring(0,1).toUpperCase();
    }

    return b;
}

console.log(acroString("there's no free lunch - gotta pay yer way."));
console.log(acroString("Live from New York, it's Saturday Night!"));


// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
function  countNonSpace(myString) {
    myString = myString.replace(/ /g,'');
    return myString.length;
}

console.log(countNonSpace("Honey pie, you are driving me crazy"));

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.
function  shorterStrings(arr, val) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= val) {
            newArr.push(arr[i]);
        }
    }
    arr = newArr;
    return arr;
}

console.log(shorterStrings(['a', 'bb', 'ccc', 'dddd', 'eeeee', 'ffffff', 'ggggggg', 'hhhhhhhh', 'iiiiiiiii', 'jjjjjjjjjj'], 5));