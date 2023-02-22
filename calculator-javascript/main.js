//numbers
function btnOne() {
    document.calc.display.value += "1"
};
function btnTwo() {
    document.calc.display.value += "2"
};
function btnThree() {
    document.calc.display.value += "3"
};
function btnFour() {
    document.calc.display.value += "4"
};
function btnFive() {
    document.calc.display.value += "5"
};
function btnSix() {
    document.calc.display.value += "6"
};
function btnSeven() {
    document.calc.display.value += "7"
};
function btnEight() {
    document.calc.display.value += "8"
};
function btnNine() {
    document.calc.display.value += "9"
};
function btnZero() {
    document.calc.display.value += "0"
};

//operations
function btnAdd(){
    document.calc.display.value+='+'
}

function btnSubtrc(){
    document.calc.display.value+='-'
}

function btnMulti(){
    document.calc.display.value+='*'
}

function btnDivi(){
    document.calc.display.value+='/'
}


//result & reset
function btnReset(){
    document.calc.display.value=''
}
function btnResult() {
	var equals = eval(document.calc.display.value)
	document.calc.display.value = equals;
};