// const greeting = 'hello, world, Skill brain. Sprint 10?';

// // Deschide un modal


// const html = `
//       <body><p>hello, <b>world</b>!</p></body>
//     `;

// const parser = new DOMParser();

// // Fiecare tag HTML este un nod in acest arbore,
// // iar tag-urile din ele devin copiii nodului respectiv.
// // Pentru text exista noduri speciale.
// // In DOM ajung absolut toate elementele HTM (inclusiv atribute),
// const doc = parser.parseFromString(html, 'text/html');

// console.log(doc.body.innerHTML);



const clickIndex2 = (event) => {

    console.log("Click index2 activat");

    document.querySelector('body > h1').innerHTML = "Acesta este index2";

    return false;
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOMContentLoaded Listener finished.");
    const h1 = document.getElementById('h1');
    h1.addEventListener('click', (e) => {
        document.getElementById('h1').style = "color:blue";
        console.log(e.clientX);
        console.log(e.clientY);
        console.log(e);
    });

    const form = document.querySelector('#form-cu-submit');
    form.addEventListener('submit', (e) => {
        // Sa ramanem pe aceeasi pagina
        e.preventDefault();
        // Datele din form sunt extrase din DOM automat
        const formData = new FormData(e.target); // Input-urile sunt atasat la form cu ajutorul eventului!
        // Acum putem lucra cu field-urile
        formData.get('email'); // example@example.com
        // values() returneaza un array de valori
        [...formData.values()]; // ['example@example.com', 'supersecret']
        [...formData.entries()]; // [['email', 'example@example.com'], ['password', 'supersecret']]

        // transformam intr-un obiect
        const data = Object.fromEntries(formData); // { email: 'example@example.com', password: 'supersecret' }
        console.log(data);
    });

    const input = document.querySelector('#parola');
    input.addEventListener('focus', (e) => {
        e.target.type = "text";
    });
    input.addEventListener('change', (e) => {
        e.target.type = "password";
    });

});






// const clickH1 = (e) => {
//     document.getElementById('h1').style = "color:red";
//     console.log(e.clientX);
//     console.log(e.clientY);
// }