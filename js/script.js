var buttonsGet = document.getElementsByClassName('button')

for (i = 0; i < buttonsGet.length; i++) {
    show();

}

function show() {
    alert(buttonsGet[i].innerText);
    console.log(buttonsGet[i].innerText);
}