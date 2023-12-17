const opt = document.querySelectorAll('.number');
const btnSubmit = document.getElementById('btnSubmit');
const ratingApp = document.getElementById('ratingApp');
const ratingThank = document.getElementById('ratingThank');
const ratingRate = document.getElementById('ratingRate');
const btnReturn = document.getElementById('btnReturn');

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


btnSubmit.addEventListener( 'click', () => {
    if ( !rate ) {
        alert('Marca una opción');
        return;
    } 
    ratingApp.classList.toggle('hidden');
    ratingThank.classList.toggle('hidden');
    ratingRate.innerText = rate;
});

btnReturn.addEventListener( 'click', () => {
    ratingApp.classList.toggle('hidden');
    ratingThank.classList.toggle('hidden');

    const active = document.querySelector('.checked');
    active.classList.remove('checked');
    rate = null;
});