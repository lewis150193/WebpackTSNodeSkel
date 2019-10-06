import { expect } from "chai";
const add = (numOne: number, numTwo: number) => {
    return numOne + numTwo
};


describe('Test Something',  ()  =>{
    it('should test add',  () => {
        expect(add(3,5)).equal(8,'This is correct')
    });
});
