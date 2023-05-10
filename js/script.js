const string = "Hello World";
const counter = {};

var characterCounter = function (str) {
    for (let i = 0; i < str.length; i++) {
        const character = str.charAt(i);
        if (counter[character]) {
            counter[character]++;
        } else {
            counter[character] = 1;
        }
    }
    return counter;
}

console.log(characterCounter(string));