let initialValue = document.getElementById("counter")

let counter = 0

function updateValue() {
    counter = counter + 1
    initialValue.innerText = counter
}
