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