const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{10}$/,
    first_name: /^[a-z]{3,12}$/i,
    last_name: /^[a-z]{3,12}$/i,
    password: /^[\w\W@-]{8,20}$/,
    email: /^([a-z\d.-]+)@([a-z\d-]+).([a-z]{2,8})$/i,
}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
        // field.style.border="thick solid 1px";
    } else {
        field.className = 'invalid';
        // field.style.border="thick solid 1px";
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});



//  let regex2 = /[^0-9]/g;
// console.log(myString.match(regex2));

// console.log(myString.match(regex1) == myString.match(regex2));
