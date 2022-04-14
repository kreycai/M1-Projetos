const prompt = require('prompt-sync')();

for(j = 0; j <1; j++)
{
    console.log();

    let pergunta1 = "1 - O pistoleiro conseguiu passar pelos Grandes Artrópodes ? Resposta: ";
    let pergunta2 = "2 - O pistoleiro conseguiu achar cactos para economizar a água dos cantis ? Resposta: ";
    let pergunta3 = "3 - O pistoleiro conseguiu derrotar o grande dragão vermelho ? Resposta: ";
    let pergunta4 = "4 - O pistoleiro conseguiu salvar sua amada do cavaleiro das trevas ? Resposta: ";
    let pergunta5 = "5 - O pistoleiro conseguiu chegar na torre negra ? Resposta: ";

    prgntArray = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];

    console.log(`O pistoleiro segue cansado no deserto visando chegar na Grande Torre, para isso terá que passar pelos Grandes
Artrópodes do deserto, achar cactos para economizar a água dos cantis, derrotar o grande dragão vermelho da ponte
de madeira, salvar sua amada do cavaleiro das trevas e, finalmente, chegar na Grande Torre.`);
    console.log();
    console.log('Responda com "sim" ou "nao" para ver o resultado da sua jornada !');
    console.log();
    console.log("Caso você responda alguma pergunta de forma incorreta, a pergunta sera refeita após responder as outras perguntas.");
    console.log()  ;

    let qntRespostas = 0;
    respArray = [];

    for(i = 0; i <=4; i++)
    {
        respArray[i] = prompt(prgntArray[i]).toLowerCase()
    }

    for(let i = 0; i <= 4; i++){
        while (respArray[i] != "sim" && respArray[i] != "nao")
        {
            console.log("Você nao digitou uma informação valida para tal pergunta, vou perguntar denovo:");
            respArray[i] = prompt(prgntArray[i]).toLowerCase()
        }
    }

    for(let i = 0; i <= 4; i++)
    {
        if(respArray[i] == "sim")
        qntRespostas = qntRespostas + 1;
    }
    
    console.log();

    if(qntRespostas == 0)
    {
        console.log(`(Você conquistou ${qntRespostas} dos seus objetivos)`);
        console.log();
        console.log("Você falha miseravelmente.");
    }
    else if(qntRespostas == 1 || qntRespostas == 2)
    {
        console.log(`(Você conquistou ${qntRespostas} dos seus objetivos)`);
        console.log();
        console.log("Você falha, mas ainda consegue fugir da situação.");
    }
    else if(qntRespostas == 3)
    {
        console.log(`(Você conquistou ${qntRespostas} dos seus objetivos)`);
        console.log()
        console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.");
    }
    else if(qntRespostas == 4)
    {
        console.log(`(Você conquistou ${qntRespostas} dos seus objetivos)`);
        console.log();
        console.log("Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.");
    }
    else if(qntRespostas == 5)
    {
        console.log(`(Você conquistou ${qntRespostas} dos seus objetivos)`);
        console.log();
        console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.");
    }

    console.log();

    let jogar = prompt("Gostaria de se aventurar novamente ? ").toLowerCase();

    while(jogar != "nao" && jogar != "sim")
    {
        console.log("Você nao digitou uma informação valida para tal pergunta, vou perguntar denovo:");
        jogar = prompt("Gostaria de se aventurar novamente ? Resposta: ").toLowerCase()
    }    
    if(jogar == "sim")
    {
        j = -1;
    }
}
console.log();
console.log("Fim de Jogo.");