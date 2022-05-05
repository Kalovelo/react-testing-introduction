// addition of two numbers
export const add = function( a, b ) {
  return a + b;
}

// division two numbers
export const divide = function( a, b ) {
  if ( b === 0 ) {
    throw new Error( "Division by 0!" );
  }
  return a / b;
}

// multiply two numbers
export const multiply = function( a, b ) {
  return new Promise( resolve => {
      setTimeout( () => {
          resolve( a * b );
      }, 1000 ); 
  } );
}