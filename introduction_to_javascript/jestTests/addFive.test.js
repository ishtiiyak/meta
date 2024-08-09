const {default:TestRunner}=require("jest-runner");

const addFive= require(`./addFive.js`);

test('add five to the value', () => { 
    expect(addFive(5)).toBe(10);
 })