const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado')

function calcularTotal() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `<p>INSIRA O <span>VALOR 01</span> E O <span>VALOR 02</span> PARA PROSSEGUIR.</p>`
    } else {
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `
        <div>
            <h2>TOTAL</h2>
            <p>Você comprou ${v2} unidades com um custo de R$${v1} cada.</p>
        </div>
        <ul>
            <li><span>TOTAL A PAGAR:<span></li>       
            <li><span>R$ ${(v1 * v2).toFixed(2)}<span></li>
        </ul>
        `;   
    }
}

function desconto() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `<p>INSIRA O <span>VALOR 01</span> E O <span>VALOR 02</span> PARA PROSSEGUIR.</p>`
    } else {
        const desconto = (v1 * v2) / 100
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `
        <div>
            <h2>DESCONTOS</h2>
            <p>Desconto de ${v2}% sobre R$${v1}.</p>
        </div>
            <ul>
                <li>VALOR DO DESCONTO:</li>       
                <li>R$ ${desconto.toFixed(2)}</li>
                <li><span>VALOR TOTAL A PAGAR:</span></li>
                <li><span>R$ ${(v1 - desconto).toFixed(2)}</span></li>
            </ul>
        `;   
    }
}

function juros() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `<p>INSIRA O <span>VALOR 01</span> E O <span>VALOR 02</span> PARA PROSSEGUIR.</p>`
    } else {
        const acrescimo = (v1 * v2) / 100
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `
        <div>
            <h2>JUROS</h2>
            <p>Juros de ${v2}% sobre R$${v1}.</p>
        </div>
        <ul>
            <li>VALOR DO ACRÉSCIMO:</li>       
            <li>R$ ${acrescimo.toFixed(2)}</li>
            <li><span>VALOR TOTAL A PAGAR:</span></li>
            <li><span>R$ ${(v1 + acrescimo).toFixed(2)}</span></li>
        </ul>
        `;   
    }
}

function comissao() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `<p>INSIRA O <span>VALOR 01</span> E O <span>VALOR 02</span> PARA PROSSEGUIR.</p>`
    } else {
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `
        <h2>COMISSÕES</h2>
        <ul>
            <li><span>COMISSÃO:</span></li>       
            <li><span>$ ${(v1 * (v2 / 100)).toFixed(2)}</span></li>
        </ul>
        `;   
    }
}

function lucro() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `<p>INSIRA O <span>VALOR 01</span> E O <span>VALOR 02</span> PARA PROSSEGUIR.</p>`
    } else {
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `
        <div>
            <h2>LUCRO</h2>
            <p>Custo R$${v1} | Preço de venda: R$${v2}.</p>
        </div>
        <ul>
            <li><span>LUCRO:</span></li>       
            <li><span>R$ ${(v1 - v2).toFixed(2)}</span></li>
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