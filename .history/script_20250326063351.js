// Função que verifica se a tecla pressionada é o Enter para continuar a interação
function checkEnter(event) {
    if (event.key === "Enter") {
        greetUser(); // Chama a função que saudará o usuário e esconde o popup
    }
}

// Função que saúda o usuário e esconde o popup
function greetUser() {
    var userName = document.getElementById('userName').value; // Obtém o nome do usuário

    // Verifica se o nome foi inserido
    if (userName) {
        // Exibe o nome do usuário na página e esconde o popup
        document.getElementById('userDisplayName').textContent = userName;
        document.getElementById('popup').style.display = 'none'; // Esconde o popup
        document.getElementById('content').classList.remove('hidden'); // Exibe o conteúdo principal

        // Exibe uma mensagem motivacional aleatória
        showMotivationalMessage();

    } else {
        alert('Por favor, insira seu nome.'); // Se não inserir nome, exibe um alerta
    }
}

// Função para mostrar uma mensagem motivacional aleatória
function showMotivationalMessage() {
    const messages = [
        "Acredite em você, você é capaz de alcançar grandes coisas!",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Não espere por uma oportunidade, crie-a.",
        "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
        "Seja a mudança que você deseja ver no mundo."
    ];
    const randomIndex = Math.floor(Math.random() * messages.length); // Gera um índice aleatório
    document.getElementById('motivationalMessage').textContent = messages[randomIndex]; // Exibe a mensagem aleatória
}

// Função para mostrar as chuvas de meteoros com base no mês informado
function mostrarMeteoros() {
    var mes = document.getElementById('monthInput').value.toLowerCase().trim(); // Obtém o mês digitado pelo usuário

    // Definindo as chuvas de meteoros para cada trimestre do ano
    var meteorosTrimestreUm = "Alfa Centaurídeos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02";
    var meteorosTrimestreDois = "Líridas começa em 23/05 e termina em 26/05\nBootídeos de Junho começa em 16/06 e termina em 20/06";
    var meteorosTrimestreTres = "Alfa Capricornídeos começa em 13/09 e termina em 17/09\nEta Líridas começa em 19/08 e termina em 22/08";
    var meteorosTrimestreQuatro = "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12";

    var resultado = '';

    // Conversão de mês escrito para número
    if (mes === 'janeiro' || mes === '1') mes = 1;
    else if (mes === 'fevereiro' || mes === '2') mes = 2;
    else if (mes === 'março' || mes === '3') mes = 3;
    else if (mes === 'abril' || mes === '4') mes = 4;
    else if (mes === 'maio' || mes === '5') mes = 5;
    else if (mes === 'junho' || mes === '6') mes = 6;
    else if (mes === 'julho' || mes === '7') mes = 7;
    else if (mes === 'agosto' || mes === '8') mes = 8;
    else if (mes === 'setembro' || mes === '9') mes = 9;
    else if (mes === 'outubro' || mes === '10') mes = 10;
    else if (mes === 'novembro' || mes === '11') mes = 11;
    else if (mes === 'dezembro' || mes === '12') mes = 12;

    // Verificando o mês e mostrando a chuva de meteoros correspondente
    if (mes === 1 || mes === 2 || mes === 3) {
        resultado = meteorosTrimestreUm; // Se for janeiro, fevereiro ou março
    } else if (mes === 4 || mes === 5 || mes === 6) {
        resultado = meteorosTrimestreDois; // Se for abril, maio ou junho
    } else if (mes === 7 || mes === 8 || mes === 9) {
        resultado = meteorosTrimestreTres; // Se for julho, agosto ou setembro
    } else if (mes === 10 || mes === 11 || mes === 12) {
        resultado = meteorosTrimestreQuatro; // Se for outubro, novembro ou dezembro
    } else {
        resultado = "Mês inválido. Por favor, insira um mês correto ou número."; // Caso o mês não seja válido
    }

    // Exibindo o resultado na página
    document.getElementById('resultado').textContent = resultado;
}
