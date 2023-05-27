const div = (strings, ...args) => 
    strings.reduce(
        (acc, currentString, index)=>
            acc + currentString + (args[index] || ""), ""
    )
 

const firstName = 'Emad';
const lastName  = 'Siddiqui';

const template = div`Hello ${firstName} ${lastName} !`;
console.log(template)