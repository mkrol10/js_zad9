var buttonsGet = document.getElementsByClassName('button')

for (i = 0; i < buttonsGet.length; i++) {
    show();
}

function show() {
    console.log(buttonsGet[i].innerText);
}