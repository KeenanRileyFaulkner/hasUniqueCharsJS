// Write your code below

function stringHasUniqueChars(string) {
    let mySet = new Set();
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