'use strict';

let brandDark = document.querySelector( '.brandDark' );

function toggleMenu () {
    brandDark.classList.toggle( 'hidden' );
}

let headerBars = document.querySelector( '.headerBars' );
let menuClose = document.querySelector( '.menuClose' );

headerBars.addEventListener( 'click', toggleMenu );
menuClose.addEventListener( 'click', toggleMenu );