const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado')

function calcularTotal() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        alert('Insira o valor 01 e o valor 02 para prosseguir com o cálculo.')
    } else {
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `
        <h2>Cálculo</h2>
            <ul>
                <li>Você comprou ${v2} unidades com um custo de R$${v1} cada.</li>
                <li>TOTAL A PAGAR:</li>       
                <li>R$ ${v1 * v2}</li>
            </ul>
        `;   
    }
}

function desconto() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        alert('Insira o valor 01 e o valor 02 para prosseguir com o cálculo.')
    } else {
        const desconto = (v1 * v2) / 100
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `
        <h2>Cálculo</h2>
            <ul>
                <li>Desconto de ${v2}% sobre R$${v1}.</li>
                <li>VALOR DO DESCONTO:</li>       
                <li>R$ ${desconto}</li>
                <li>VALOR TOTAL A PAGAR:</li>
                <li>R$ ${v1 - desconto}</li>
            </ul>
        `;   
    }
}

function juros() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        alert('Insira o valor 01 e o valor 02 para prosseguir com o cálculo.')
    } else {
        const acrescimo = (v1 * v2) / 100
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `
        <h2>Cálculo</h2>
            <ul>
                <li>Juros de ${v2}% sobre R$${v1}.</li>
                <li>VALOR DO ACRÉSCIMO:</li>       
                <li>R$ ${acrescimo}</li>
                <li>VALOR TOTAL A PAGAR:</li>
                <li>R$ ${v1 + acrescimo}</li>
            </ul>
        `;   
    }
}

function comissao() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        alert('Insira o valor 01 e o valor 02 para prosseguir.')
    } else {
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `
        <h2>Cálculo</h2>
            <ul>
                <li>COMISSÃO:</li>       
                <li>R$ ${v1 * (v2 / 100)}</li>
            </ul>
        `;   
    }
}

function lucro() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        alert('Insira o valor 01 e o valor 02 para prosseguir com o cálculo.')
    } else {
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `
        <h2>Cálculo</h2>
            <ul>
                <li>Custo R$${v1} | Preço de venda: R$${v2}.</li>
                <li>LUCRO:</li>       
                <li>R$ ${v1 - v2}</li>
            </ul>
        `;   
    }
}

function limpar() {
    resultado.style.display = 'none'
    input01.value = '';
    input02.value = '';
    input01.focus();
}