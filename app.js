const botones = document.querySelectorAll('.boton');
const pantalla = document.getElementById('pantalla')

const operate = (operando1,operador,operando2) => {
    let num1 = Number(operando1);
    let num2 = Number(operando2);
    switch(operador){
        case '/':
            if(num2 === 0){
                pantalla.innerText = 'No se puede dividir por cero';
            }
            else{
                pantalla.innerText = `${num1/num2}`;
            }
            break;
        case '*':
            pantalla.innerText = `${num1*num2}`;
            break;
        case '-':
            pantalla.innerText = `${num1-num2}`;
            break;
        case '+':
            pantalla.innerText = `${num1+num2}`;
    }
}


botones.forEach(boton => {
    boton.addEventListener('click', () => {
        let botonApretado = boton.innerText;
       
        if(boton.id === 'clear'){
            pantalla.innerText = '0';
            return;
        }
        if(boton.id === 'delete'){
            if(pantalla.innerText.length === 1){
                pantalla.innerText = '0';
                return;
            }else{
                pantalla.innerText = pantalla.innerText.slice(0,-1);
            }
            return;
        }
        if(boton.id === 'mas-menos'){
            if(pantalla.innerText[0] === '-'){
                pantalla.innerText = pantalla.innerText.slice(1);
            }else{
                pantalla.innerText = '-' + pantalla.innerText;
            }
            return;
        }
        if(botonApretado ==='+' || botonApretado === '-' || botonApretado === '*' || botonApretado === '/'){
            if(pantalla.innerText.includes('+') || pantalla.innerText.includes('-') || pantalla.innerText.includes('*') || pantalla.innerText.includes('/')){
                return;
            }
        }
        if(boton.id === 'igual'){
            let operacion = pantalla.innerText;
            let operando1 = '';
            let operando2 = '';
            let operador = '';
            let flag = false;
            for(let i = 0; i < operacion.length; i++){
                if(operacion[i] === '+' || operacion[i] === '-' || operacion[i] === '*' || operacion[i] === '/'){
                    operador = operacion[i];
                    flag = true;
                }else{
                    if(flag){
                        operando2 += operacion[i];
                    }else{
                        operando1 += operacion[i];
                    }
                }
            }
            operate(operando1,operador,operando2);
            return;
        }
        if(pantalla.innerText === '0' && botonApretado !== '.'){
            if(pantalla.innerText === '0'|| pantalla.innerText === 'No se puede dividir por cero'){
                pantalla.innerText = botonApretado;
            }else{
                pantalla.innerText += botonApretado;
            }
        }else{
            if(botonApretado === '.' && pantalla.innerText.includes('.')){
                let suma = pantalla.innerText.indexOf('+');
                let resta = pantalla.innerText.indexOf('-');
                let multiplicacion = pantalla.innerText.indexOf('*');
                let division = pantalla.innerText.indexOf('/');
                let punto = pantalla.innerText.indexOf('.');
                let maximo = Math.max(suma,resta,multiplicacion,division);
                if(suma === -1 && resta === -1 && multiplicacion === -1 && division === -1){
                    return;
                }else if(punto > maximo){
                        return;
                    }else{
                        let segundoOperando = pantalla.innerText.slice(maximo+1);
                        if(segundoOperando.includes('.')){
                            return;
                        }
                        pantalla.innerText += botonApretado;
                    }
                }else{
                pantalla.innerText += botonApretado;
            }
        }
    });
});