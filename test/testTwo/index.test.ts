import { expect } from "chai";
import { spy, assert, fake}from 'sinon'

class Test {
    minus = (numOne: number, numTwo: number) => {
        return numOne - numTwo
    };
}



describe('Test Something',  ()  =>{

    beforeEach(() => {

    });

    it('should test minus',  () => {
        const m = new Test();
        expect(m.minus(3,5)).equal(-2,'This is correct')
    });


});
