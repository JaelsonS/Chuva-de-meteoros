// Função para exibir as chuvas de meteoros com base no mês informado
function mostrarMeteoros() {
    // Pegando o valor inserido pelo usuário
    var mes = document.getElementById('mes').value;
    
    // Definindo as chuvas de meteoros para cada trimestre
    var meteorosTrimestreUm = "Alfa Centaurídeos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02";
    var meteorosTrimestreDois = "Líridas começa em 23/05 e termina em 26/05\nBootídeos de Junho começa em 16/06 e termina em 20/06";
    var meteorosTrimestreTres = "Alfa Capricornídeos começa em 13/09 e termina em 17/09\nEta Líridas começa em 19/08 e termina em 22/08";
    var meteorosTrimestreQuatro = "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12";

    var resultado = '';

    // Verificando em qual trimestre o mês atual se encontra e exibindo a previsão
    if (mes >= 1 && mes <= 3) {
        resultado = "As chuvas de meteoros do primeiro trimestre são:\n\n" + meteorosTrimestreUm;
    } else if (mes >= 4 && mes <= 6) {
        resultado = "As chuvas de meteoros do segundo trimestre são:\n\n" + meteorosTrimestreDois;
    } else if (mes >= 7 && mes <= 9) {
        resultado = "As chuvas de meteoros do terceiro trimestre são:\n\n" + meteorosTrimestreTres;
    } else if (mes >= 10 && mes <= 12) {
        resultado = "As chuvas de meteoros do quarto trimestre são:\n\n" + meteorosTrimestreQuatro;
    } else {
        resultado = "Nenhuma chuva de meteoro no período informado.";
    }

    // Exibindo o resultado na página
    document.getElementById('resultado').innerText = resultado;

    // Mudando a cor do texto para uma cor aleatória
    document.body.style.color = getRandomColor();
}

// Função para gerar uma cor aleatória
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
