const form = document.querySelector('.signForm');
//const fullName = document.querySelector('#fullName');

form.addEventListener( 'submit', e => {
    e.preventDefault();
    console.log(form.fullName.value);
    console.log(form.email.value);
    console.log(form.password.value);
})
