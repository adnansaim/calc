const inField = document.querySelector('#inputField')

function deleteInput() {
    inField.value = ''
}
function equal() {
    try {
        const method = inField.value;
        const answere = eval(method)
        if (answere == Infinity) {
            inField.value = 'Math Error!!'
        } else {
            inField.value = answere
        }
    } catch (e) {
        inField.value = "invalid operation"
    }


}

function clearOne() {
    let a = inField.value
    a = a.substring(0, a.length - 1)
    inField.value = a
}
function calculate(val) {
    inField.value += val
}