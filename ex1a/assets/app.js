// Nu e nevoie de acest event pentru ca DOMul poate fi incarcat mai tarziu
// document.addEventListener("DOMContentLoaded", (event) => {

onClickSubmit = (e) => {
    // Ignora comportamentul implicit al butonului
    // In cazul unui form de tip submit - comportamentul implicit al butonului este de a ne duce catre o alta pagina, 
    //  definita in action de la form
    e.preventDefault();

    let list = document.querySelectorAll('[name="fav_language"]');
    let labelList = [];
    let checkedList = [];
    for (let i = 0; i < list.length; i++) {
        const item = list[i];

        labelList.push(item.value);
        if (item.checked) {
            checkedList.push(item.value);
        }
    }
    console.log("labelList = ", labelList);
    console.log("checkedList = ", checkedList);
}

// });