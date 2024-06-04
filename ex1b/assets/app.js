onClickSubmit = (e) => {
    // Ignora comportamentul implicit al butonului
    // In cazul unui form de tip submit - comportamentul implicit al butonului este de a ne duce catre o alta pagina, 
    //  definita in action de la form
    e.preventDefault();

    let labelList = [];
    let checkedList = [];

    const nodeList = document.querySelectorAll('[name="fav_language"]');

    nodeList.forEach(node => labelList.push(node.value));
    nodeList.forEach(node => {
        if (node.checked) {
            checkedList.push(node.value);
        }
    });

    console.log("labelList = ", labelList);
    console.log("checkedList = ", checkedList);
}


// Este nevoie ca DOM-ul sa fie incarcat inainte de a apela querySelector.
document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector('form[language]').addEventListener('submit', onClickSubmit);
});
