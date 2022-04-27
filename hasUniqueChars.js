// Write your code below

function stringHasUniqueChars(string) {
    let mySet = new Set();
    string = String(string);
    for(let char of string) {
        if(mySet.has(char)) {
            return false;
        } else {
            mySet.add(char);
            continue;
        }
    }
    return true;
}

console.log(stringHasUniqueChars("monday"));
console.log(stringHasUniqueChars("moonday"));
console.log(stringHasUniqueChars("MarshmelLow"));
console.log(stringHasUniqueChars(123456));
console.log(stringHasUniqueChars(32132246));
