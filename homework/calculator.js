initCalculator();

function initCalculator() {
    let keys = document.querySelectorAll("#calculator span");

    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = callBack;
    }
}

function callBack(e) {
    e.preventDefault();

    let operators = ["+", "-", "x", "÷"],
        decimalAdded = false,
        total = 0,
        input = document.querySelector(".screen"),
        btnVal = this.innerHTML,
        inputVal = input.innerHTML;

    if (btnVal == "=") {
        calculate();
    } else if (operators.indexOf(btnVal) > -1) {
        showOperator();
    } else if (btnVal == ".") {
        showDecimal();
    } else if (btnVal == "C") {
        reset();
    } else {
        showDigit(btnVal);
    }

    /** Обработчики */
    function showOperator() {
        let lastChar = inputVal[inputVal.length - 1];

        if (inputVal != "" && operators.indexOf(lastChar) == -1)
            input.innerHTML += btnVal;
        else if (inputVal == "" && btnVal == "-") input.innerHTML += btnVal;
        if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
            input.innerHTML = inputVal.replace(/.$/, btnVal);
        }
        decimalAdded = false;
    }

    function showDigit() {
        input.innerHTML += btnVal;
    }

    function showDecimal() {
        if (!decimalAdded) {
            input.innerHTML += btnVal;
            decimalAdded = true;
        }
    }

    function calculate() {
        let equation = inputVal,
            lastChar = equation[equation.length - 1];

        equation = equation.replace(/x/g, "*").replace(/÷/g, "/");
        if (operators.indexOf(lastChar) > -1 || lastChar == ".")
            equation = equation.replace(/.$/, "");
        if (equation) {
            total = eval(equation);
            if (total.toString().indexOf(".") != -1)
                total = total.toFixed(2);
            input.innerHTML = total;
        }
        decimalAdded = false;
    }
        function reset() {
        console.warn("Function Reset started");
        input.innerHTML = "";
    }
}

