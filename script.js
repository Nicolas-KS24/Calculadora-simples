const display = document.getElementById('display');
const numero = document.querySelectorAll('.num');
const btnOperacao = document.querySelectorAll('.op');
const btnIgual = document.getElementById('equals');
const btnClear = document.getElementById('clear');
const btnDel = document.getElementById('del');
const simbOp = ['+', '-', '*', '/'];


numero.forEach(btn => {
    btn.addEventListener('click', () => {
        display.value += btn.textContent;
    });
});


btnOperacao.forEach(btn => {
    btn.addEventListener('click', () => {
        const lastChar = display.value.slice(-1);
        if (simbOp.includes(lastChar)){
            display.value = display.value.slice(0, -1) + btn.textContent;

        } else if (display.value.length === 0 && btn.textContent !== '-') {
            return;

        } else {
            display.value += btn.textContent;
        }
    });
});


btnClear.addEventListener('click', () => {
    display.value = '';
});


btnIgual.addEventListener('click', () => {
    try {
        const res = eval(display.value);
        display.value = res;

    } catch {
        display.value = 'Error';
    }
});


btnDel.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
