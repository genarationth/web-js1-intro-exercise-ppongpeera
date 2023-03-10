function ChangeName() {
    let name = prompt('What is your name?');
    let text
    text = "Hello" + name;
    document.getElementById("inputName").innerHTML = text

}