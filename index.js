'use strict';

let sample = `function test(){
    return {{apple }} + 5;
}`


let state = {apple : 2 , orange : 3};
let keysArr = Object.keys(state);
console.log(keysArr);

keysArr.forEach(val => {
    let regex = new RegExp('\{\{ *'+val+ ' *\}\}', 'g');
    console.log(regex);
    if(sample.match(regex)){
        sample = sample.replace(regex , `${state[val]}`);
    };
});

console.log(sample);

