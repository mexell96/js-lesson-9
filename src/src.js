const calcBtnsEl = document.getElementById('calc-buttons');
let activeNum1 = document.getElementById('num1');
let activeSign = document.getElementById('sign');
let activeNum2 = document.getElementById('num2');
let screen = document.getElementById('screen');
let page = document.querySelector('.page');


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
            mistake.classList.add('displaynone');
            activeNum1 = activeNum2;
            const attrSym = ev.target.getAttribute('data-sign');
            activeSign.innerText += attrSym;
        } 
    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '=') {
        let num1Val = +document.getElementById('num1').innerText;
        let num2Val = +document.getElementById('num2').innerText;
        screen.classList.remove('displaynone');
            if (activeSign.innerText === '+') {
                var result = num1Val + num2Val;
            }   else if (activeSign.innerText === '-') {
                var result = num1Val - num2Val;
            }   else if (activeSign.innerText === '/') {
                var resultWithoutRounding = num1Val / num2Val;
                var result = resultWithoutRounding.toFixed(3);
            }   if (activeSign.innerText === '*') {
                var result = num1Val * num2Val;
            }   
        document.querySelector('#result span').innerText = result;
        document.querySelector('#screen span').innerText = result;
        activeNum2.innerText = '';
        activeSign.innerText = '';  
    }
    
    var numberOfSymbols = document.querySelector('#result span').innerText.length;
    var noneSymbols = '0';
    calcBtnsEl.addEventListener('click', (ev) => {
        if ((numberOfSymbols > noneSymbols) && ev.target.nodeName === 'BUTTON' && ev.target.dataset.num && document.getElementById('sign').innerText === '') {
            document.querySelector('#mistake').innerText = 'Укажите знак!';
            mistake.classList.remove('displaynone');
            document.querySelector('#screen #sign').innerText = '';
            document.querySelector('#screen #num2').innerText = '';
        }
    })
    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === 'C') {
        document.querySelector('#screen #num2').innerText = '';
        document.querySelector('#screen #num1').innerText = '';
        document.querySelector('#screen #sign').innerText = '';
        document.querySelector('#result span').innerText = '';
        activeNum1 = document.getElementById('num1');
        screen.classList.add('displaynone');
        mistake.classList.add('displaynone');
    }
    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === 'CE') {
        document.querySelector('#screen #sign').innerText = '';
        document.querySelector('#screen #num2').innerText = ''; 
        mistake.classList.add('displaynone');
    }  
    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === 'lightDark') {
        page.classList.toggle('light-theme');
        page.classList.toggle('dark-theme');
    }
    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === 'bigSmall') {
        page.classList.toggle('small-theme');
        page.classList.toggle('big-theme');
    }
})
