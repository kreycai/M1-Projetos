const prompt = require("prompt-sync")();
console.clear()

//função para gerar numero aleatorio
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//variaveis
let minhaEscolha = 0;
let meusPontos = 0;
let maqPontos = 0;
let escolhas = ["PEDRA", "PAPEL", "TESOURA"]

//"for" para jogar novamente
for(let j = 0; j < 1; j++)
{
console.log()
    console.log("JOGO JOKENPO !!!")
    console.log()
    console.log()

    //rodadas
    let rodadas = +prompt("-DIGITE QUANTAS RODADAS VAMOS JOGAR, QUERIDO JOGADOR: ")
    console.clear()
    for(i = 1; i <= rodadas; i++)
    {
        //gerar numero aleatorio
        let variavelAleatoria = getRandomIntInclusive(0, 2);

        console.log(`RODADA ${i}`)
        console.log()
        console.log(`PLACAR:
        MAQUINA = ${maqPontos}
        JOGADOR = ${meusPontos}`)
        console.log(`
OPÇÕES
[0] PEDRA
[1] PAPEL
[2] TESOURA
`)
        minhaEscolha = +prompt(`DIGITE O NUMERO DA OPÇÃO ESCOLHIDA: `)

        //checar se a informação é valida
        while(minhaEscolha != 0 && minhaEscolha !=1 && minhaEscolha != 2)
        {
            console.log()
            console.log(`-NÃO TENTE ME BURLAR, JOGADOR ! ESCOLHA UMA OPÇÃO VALIDA,
A NAO SER, É CLARO, QUE ESTEJA COM MEDO DE PERDER.`)
        console.log()
        minhaEscolha = +prompt('DIGITE O NUMERO DA OPÇÃO ESCOLHIDA(0, 1 OU 2): ')
        console.clear()
        }
        console.clear()
        console.log()
        console.log(`-VOCÊ ESCOLHEU ${escolhas[minhaEscolha]}, EU(MAQUINA) ESCOLHI ${escolhas[variavelAleatoria]}.`)
        console.log()

        //checar quem ganha a rodada.
        if(variavelAleatoria == 0)
        {
            if(minhaEscolha == 0){console.log("-EMPATAMOS !")}
            else if(minhaEscolha == 1){console.log("-VOCÊ GANHOU ESSA RODADA, JOGADOR...")
            meusPontos ++}
            else{console.log("-EU(MAQUINA) GANHEI DE VOCÊ NESSA RODADA, JOGADOR !!!")
            maqPontos ++}
        }
        else if(variavelAleatoria == 1)
        {
            if(minhaEscolha == 0){console.log("-EU GANHEI DE VOCÊ NESSA RODADA, JOGADOR !!!")
            maqPontos ++}
            else if(minhaEscolha == 1){console.log("-EMPATAMOS !")}
            else{console.log("-VOCÊ GANHOU ESSA RODADA, JOGADOR...")
            meusPontos ++}
        }
        else
        {
            if(minhaEscolha == 0){console.log("-VOCÊ GANHOU ESSA RODADA, JOGADOR...")
            meusPontos ++}
            else if(minhaEscolha == 1){console.log("-EU GANHEI DE VOCÊ NESSA RODADA, JOGADOR !!!")
            maqPontos ++}
            else{console.log("-EMPATAMOS !")}
        }
        console.log()
        console.log(`PLACAR:
        MAQUINA = ${maqPontos}
        JOGADOR = ${meusPontos}`)
        console.log()
        if(i <= rodadas -1)
        {
            prompt('TECLE "ENTER" PARA INICIAR A PROXIMA RODADA')
            console.clear()
        }
        else if(i = rodadas)
        {
            prompt('TECLE "ENTER" PARA VER O RESULTADO')
            console.clear()
        }
    }
    if(maqPontos > meusPontos)
    {
        console.log("-EU VENCI VOCÊ, JOGADOR !!! QUER PERDER DE NOVO EM UMA REVANCHE ? ")
        jogar = prompt("OU ESTA COM MEDO ?! (ACEITAR REVANCHE ? [S/N])").toLocaleLowerCase()
        while(jogar != "s" && jogar != "n")
        {
            jogar = prompt("-COM MEDO DE NOVO ? DE UMA RESPOSTA VALIDA, MEDROSO ! (REVANCHE ? [S/N]")
        }
        if(jogar == "s")
        {
            j= -1
        }else{console.log("-FRACO !!! HAHAAHAH'")}
    }
    else if(maqPontos < meusPontos)
    {
        console.log(`-AAAH !!! EU PERDI... TALVEZ VOCÊ NÃO SEJA TAO RUIM ASSIM`)
        jogar = prompt("UMA REVANCHE ? DESSA VEZ VOU JOGAR SÉRIO ![S/N]").toLocaleLowerCase()
        while(jogar != "s" && jogar != "n")
        {
            jogar = prompt("-COM MEDO DE NOVO ? DE UMA RESPOSTA VALIDA, MEDROSO ! (REVANCHE ? [S/N]")
        }
        if(jogar == "s")
        {
            j = -1
        }else{console.log("-ESPERO TERMOS A CHANCE DE JOGAR DE NOVO")}
    }
    else
    {
        console.log("-EMPATEI COM VOCÊ ?!! INADIMISSIVEL !")
        jogar = prompt("UMA REVANCHE ? DESSA VEZ VOU JOGAR SÉRIO ![S/N]").toLocaleLowerCase()
        while(jogar != "s" && jogar != "n")
        {
            jogar = prompt("-COM MEDO DE NOVO ? DE UMA RESPOSTA VALIDA, MEDROSO ! (REVANCHE ? [S/N]")
        }
        if(jogar == "s")
        {
            j = -1
        }else{console.log('-ESTA COM MEDO DE PERDER NO DESEMPATE NAO É ? HAHAHAH; ADEUS, "JOGADOR".')}
        console.clear()
    }
}