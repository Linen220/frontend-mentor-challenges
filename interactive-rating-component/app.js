const opt = document.querySelectorAll('.number');

let rate = null;

opt.forEach( option => {
    option.addEventListener( 'click', ( e ) => {
        const active = document.querySelector('.checked');

        if ( active ) {
            active.classList.remove('checked');
        }

        e.target.classList.add('checked');
        rate = e.target.innerText;
    });

});
