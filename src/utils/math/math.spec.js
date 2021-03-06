import { add, divide, multiply } from '.';


// add test 
describe( 'add()', () => {
    // test addtestion of two numbers
    test( 'add(1,2) to be 3', () => {
        expect( add(1, 2) ).toBe(3);
    } );
} );

// divide test 
describe( 'divide()', () => {

    // test division of two numbers
    test( 'divide(4,2) to be 2', () => {
        expect( divide(4, 2) ).toBe(2);
    } );

    // division by 0 should return null
    test( 'divide(4,0) to throw error', () => {
        expect(()=>divide(4, 0)).toThrow("Division by 0!");
    } );
} );

// multiply test 
describe( 'multiply()', () => {
    // callback approach
    test( 'multiply(4,2) to be 8', ( done ) => {
        multiply(4, 2).then( result => {
            expect( result ).toBe(8);
            done(); // done callback
        } );
    } );

    // promise approach
    test( 'multiply(2,3) to be 6', () => {
        return multiply(2, 3).then( result => {
            expect( result ).toBe(6);
        } );
    } );

    // async/awatest approach
    test( 'multiply(2,0) to be 0', async () => {
        const result = await multiply(2, 0);
        expect( result ).toBe(0);
    } );
} );