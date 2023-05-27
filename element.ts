const div = (strings, ...args) => console.log(strings, args);
const firstName:string = 'Emad';
const lastName:string  = 'Siddiqui';

div`Hello ${firstName} ${lastName} !`;