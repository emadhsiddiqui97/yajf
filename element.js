const div = (strings, ...args) => console.log(strings, args);
const firstName = 'Emad';
const lastName  = 'Siddiqui';

div`Hello ${firstName} ${lastName} !`;