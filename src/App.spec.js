import React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react'
import App from './App';

describe('App', () => {

// test `App` component with `name` prop
test( 'Render App component with "Apostolos"', () => {

    // render and prepare
    render( <App name='Apostolos'/> );

    const h1Elem = screen.getByText( 'Apostolos' );

    expect( h1Elem ).toBeInTheDocument();

    expect(h1Elem.tagName).toBe('H1');
    expect( h1Elem ).toHaveTextContent( 'Apostolos' );
} );

// test `App` component with mouse clicks
test( 'increment number on mouse click events and disabled on the third', () => {
   // render and prepare
   render( <App name='Apostolos'/> );


    // access `h2` and `button` elements
    const h2Elem = screen.getByText( 'count: 0' ); // <h2>
    const btnElem = screen.getByRole( 'button' );

    expect( btnElem ).not.toBeDisabled();

    // dispatch a mouse click event and assert again
    fireEvent.click( btnElem );
    expect( h2Elem ).toHaveTextContent( 'count: 1' );
    expect( btnElem ).not.toBeDisabled();
    
    // dispatch two mouse click event and assert again
    fireEvent.click( btnElem );
    fireEvent.click( btnElem );
    expect( h2Elem ).toHaveTextContent( 'count: 3' );
    expect( btnElem ).toBeDisabled();
} );
});