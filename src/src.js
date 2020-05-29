const calcBtnsEl = document.getElementById('calc-buttons');
let activeNum1 = document.getElementById('num1');
let activeSign = document.getElementById('sign');
let activeNum2 = document.getElementById('num2');
let screen = document.getElementById('screen');


calcBtnsEl.addEventListener('click', (ev) => {
    if (ev.target.nodeName === 'BUTTON' && !ev.target.dataset.sign) {
        const attrVal = ev.target.getAttribute('data-num');
        activeNum1.innerText += attrVal;
        screen.classList.remove('displaynone');
    }
    if ((ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '+') || 
        (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '-') || 
        (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '/') || 
        (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '*')) {
            screen.classList.remove('displaynone');
            activeNum1 = activeNum2;  //document.getElementById('num2');
            const attrSym = ev.target.getAttribute('data-sign');
            activeSign.innerText += attrSym;
        }
    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '=') {
        let num1Val = +document.getElementById('num1').innerText;
        let num2Val = +document.getElementById('num2').innerText;
        screen.classList.add('displaynone');
            if (activeSign.innerText === '+') {
                var result = num1Val + num2Val;
            }   else if (activeSign.innerText === '-') {
                var result = num1Val - num2Val;
            }   else if (activeSign.innerText === '/') {
                var result = num1Val / num2Val;
            }   if (activeSign.innerText === '*') {
                var result = num1Val * num2Val;
            }   
        document.querySelector('#result span').innerText = result;
        document.querySelector('#screen span').innerText = result;
        activeNum2.innerText = '';
        activeSign.innerText = '';
    }
    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === 'C') {
        document.querySelector('#screen #num2').innerText = '';
        document.querySelector('#screen #num1').innerText = '';
        document.querySelector('#screen #sign').innerText = '';
        document.querySelector('#result span').innerText = '';
        activeNum1 = document.getElementById('num1');
    }
    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === 'CE') {
        document.querySelector('#screen #sign').innerText = '';
        document.querySelector('#screen #num2').innerText = ''; 
    }  
})
