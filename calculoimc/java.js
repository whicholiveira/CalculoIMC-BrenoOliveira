let pessoa = new Object();
let dados = [];

function calcular() {

    let nome    = document.getElementById("nome").value.trim();
    let altura  = parseFloat(document.getElementById("altura").value);
    let peso    = parseFloat(document.getElementById("peso").value);

    if (validaForm(nome, altura, peso)) {
        
        let imc = calcularImc(altura, peso); //chama a função pra calcular imc
        let situacao = geraSituacao(imc); //chama a função pra calcular imc
        
        //gera o objeto pessoa com os dados devidamente preenchidos
        pessoa.nome = nome;
        pessoa.altura = altura;
        pessoa.peso = peso.toFixed(2);
        pessoa.imc = imc.toFixed(2);
        pessoa.situacao = situacao;

        //cadastra pessoa no array dados
        dados.push(pessoa);
        pessoa = {};//reseta objeto pesso para novo cadastro
        
        geraTemplate();// gera o template baseado na quandidade de pessoas cadastradas
        limparForm();
    } else {
        alert("Preencha todos os dados corretamente");
    }

}

function validaForm(nome, altura, peso) {

    if (nome == '' || isNaN(altura)|| isNaN(peso)) {
        return false;
    }
    return true;
}

function limparForm() {

    document.getElementById("nome").value = '';
    document.getElementById("altura").value = '';
    document.getElementById("peso").value = '';
}

function calcularImc(altura, peso) {

    let imc = peso / (altura * altura);
    return imc;
}

function geraSituacao(imc) {

    if (imc < 17) {
        return "Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.49) {
        return "Abaixo do peso";
    } else if (imc >= 18.50 && imc <= 24.99) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.99) {
        return "Acima do peso";
    } else if (imc >= 30 && imc <= 34.99) {
        return "Obesidade I";
    } else if (imc >= 35 && imc <= 39.99) {
        return "Obesidade II (severa)";
    } else {
        return "Obesidade III (mórbida)";
    }
}


function geraTemplate() {

    let template = '';
    for (let i = 0; i < dados.length; i++) {
        template +=
            `<tr>
                <td>${dados[i].nome}</td>
                <td>${dados[i].altura}</td>
                <td>${dados[i].peso}</td>
                <td>${dados[i].imc}</td>
                <td>${dados[i].situacao}</td>
            </tr>`;
    }
    document.getElementById('cadastro').innerHTML = template;
}