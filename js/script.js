var buttonsGet = document.getElementsByClassName('button')

for (i = 0; i < buttonsGet.length; i++) {
    show();

}

function show() {
    var showAlert = buttonsGet[i].innerText;
    alert(showAlert);
    console.log(buttonsGet[i].innerText);
}