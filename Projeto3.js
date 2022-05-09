// COMENTARIOS IMPORTANTES \/ :)

// ALEXANDRE(PROFESSOR DA BLUEMER) PARA FACILITAR SUA AVALIAÇÃO, MUDE OS STATUS DO PERSONAGEM NA FUNÇÃO
// "PERSONAGEM", ASSIM PODERA EXPLORAR MELHOR O JOGO. OS STATUS DA FORMA QUE ESTÃO, TORNA O LEVEL DESIGN
// JUSTO, MAS ATRAPALHA PARA AVALIAR TODOS OS CRITERIOS, POR PODER CAUSAR UM GAME OVER.
// E NAO ESQUEÇA DE AJUDAR O MENDIGO ENTAO VAI DAR GAME OVER PERTO DO FIM TBM.

// CONQUISTAS: (IMPORTANTE: SEMPRE AJUDE O MENDIGO COMO PRECAUÇÃO !!!)

// FANTASIA = ACEITE ASSISTIR O FILME NA NOITE DO DIA 2 && PASSE PALA MANHA DO DIA 6 

// FEIRISTA = ACEITE VENDER COISAS NA FEIRA NA TARDE DO DIA 1 && ACEITE RECEBER POR ISSO NA TARDE DO DIA 3

// O GATO DE NÓS TODOS = RECUSE ARRUMAR A TV NA MANHA DO DIA 1 && ACEITE 
// FICAR COM O GATO NA MANHA DO DIA 4 && ACEITE DOAR O GATO PARA A CRIANÇA NA MANHA DO DIA 5

// TECNICO DE TVS = ACEITE ARRUMAR A TV NA MANHA DO DIA 1 && ACEITE RECEBER POR ISSO NA MANHA DO DIA 4

// LADRÃO... = RECUSE VENDER COISAS NA FEIRA NA TARDE DO DIA 1 E ACEITE IR VER O POR DO SOL NA TARDE DO DIA 3

// UMA MOEDA POR FAVOR = ACEITE AJUDAR O MENDIGO NA TARDE DO DIA 2 

// QUE FESTA ? = ACEITE IR A FESTA NA NOITE DO DIA 1 && PASSE PELA NOITE DO DIA 5

// DE CARRINHO FICA MAIS FACIL = ACEITE COMPRAR O CARRO NA TARDE DO DIA 4

// NAMORE COM A MARY = ACEITE CORRER PELA MANHÃ DO DIA 2 && ACEITE SAIR COM A MARY NA NOITE DO DIA 3 &&
// ACEITE CHAMAR A MARY PARA SAIR NA NOITE DO DIA 4 && ACEITE COMPRAR A ALIANÇA NA TARDE DO DIA 6

// ZERADOR DE JOGOS = ZERE O JOGO 

// GANHADOR DA MEGA SENA ! = ACEITE CORRER NA MANHA DO DIA 2 && ACEITE COMPRAR O BILHETE
// DA MEGA SENA NA MANHA DO DIA 3 && FINALIZE A HISTORIA DO JOGO.

//SEM CARRO, SEM MULHER - NAO COMPRE O CARRO E CHEGUE COMPRE A ALIANÇA E PASSE PELA TARDE DO DIA 6

//ZERADOR DE JOGOS -- ZERAR O JOGO

const prompt = require("prompt-sync")();

//VARIAVEIS
let Dia = 1;
let fazer = 0;
let i = 0;
let fimz;
let fimH;
let voceNaoAjudouOmendigo;
let sair;

//CONQUISTAS
let conquistas = 0;
let feirista;
let bebidemais;
let rico;
let semcarro;


//OBJETOS
let Personagem = {
    NOME: "",
    SATISFEITO: 60,
    ENERGIA: 60,
    DINHEIRO: 400,
    HORAS: 8,

    AumentarSATISFEITO: function (SAT)
    {

        this.SATISFEITO += SAT

        console.log(`SATIFEITO AUMENTOU ${SAT} PONTOS
        SATISFEITO = ${this.SATISFEITO}`),

        console.log()

    },

    AumentarENERGIA: function (ENE)
    {

        this.ENERGIA += ENE

        console.log(`ENERGIA AUMENTOU ${ENE} PONTOS
        ENERGIA = ${this.ENERGIA}`)

        console.log()

    },

    AumentarDINHEIRO: function (DIN)
    {

        this.DINHEIRO += DIN

        console.log(`DINHEIRO AUMENTOU ${DIN} PONTOS
        DINHEIRO = ${this.DINHEIRO}`)

        console.log()

    },

    AbaixarSATISFEITO: function (SAT)
    {

        this.SATISFEITO -= SAT

        fimH = MORTE()

        if(!fimH)
        {

            console.log(`SATIFEITO ABAIXOU ${SAT} PONTOS
            SATISFEITO = ${this.SATISFEITO}`)

            console.log()

        }

    },

    AbaixarENERGIA: function (ENE)
    {

        this.ENERGIA -= ENE

        fimH = MORTE()

        if(!fimH)
        {

            console.log(`ENERGIA ABAIXOU ${ENE} PONTOS
            ENERGIA = ${this.ENERGIA}`)

            console.log()

        }

    },

    AbaixarDINHEIRO: function (DIN)
    {

        this.DINHEIRO -= DIN

        fimH = MORTE()

        if(!fimH)
        {

        console.log(`DINHEIRO ABAIXOU ${DIN} PONTOS
        DINHEIRO = ${this.DINHEIRO}`)

        console.log()

        }

    },

    //HISTORIAFINAL
    FIM0: function fim () 
    {

        if(respArrayHistoriaTarde[5])
        {

            console.log(`
    OS DIAS PASSARAM DEPRESSA DEPOIS DO NAMORO COM A MARY, TAO RAPIDO QUE AGORA ESTAO CASADOS, ESTOU 
ORGULHOSO DE VOCÊ ${Personagem.NOME}, JA TEM ATÉ FILHOS !!! JUNTO DA SUA ESPOSA, A VIDA FINANCEIRA MELHOROU 
BASTANTE, ACOMPANHE: `)

            if(respArrayHistoriaManha[2])
            {

                console.log(`
    AH, E OS RESULTADOS DA MEGA SENA SAIRAM, VOCÊ FEZ BEM 
EM COMPRAR AQUELE BILHETE POIS VOCÊ É O GRANDE GANHADOR`)

                Personagem.AumentarDINHEIRO(100000)
                Personagem.AumentarENERGIA(100000)
                Personagem.AumentarSATISFEITO(100000)
                rico = true;

            }

            else
            {

                Personagem.AumentarDINHEIRO(5000)
                Personagem.AumentarENERGIA(5000)
                Personagem.AumentarSATISFEITO(5000)

            }

        }

        else
        {

            console.log(`   
    OS DIAS PASSARAM DEPRESSA DEPOIS DE SUBIR DE CARGO, SUA VIDA FINANCEIRA TAMBEM MELHOROU BASTANTE
ACOMPANHE...

            `)

            Personagem.AumentarDINHEIRO(5000)
            Personagem.AumentarENERGIA(5000)
            Personagem.AumentarSATISFEITO(5000)

        }

    console.log(`
    A E ACOSTUME-SE AO QUE VAI LER, PORQUE VOU REPETIR ISSO AO MENOS TRÊS VEZES 
TODO DIA: NAO HÁ NOVIDADES. VOCÊ ZEROU A VIDA ! E TEM A VIDA QUE ESCOLHEU TER.`)
    Dia += 30
    fimz = true;

    },

    //CHECAR CONQUISTAS
    Conquistas: function () 
    {

        console.log(`
            CONSQUISTAS:
        `)

        if(respArrayHistoriaTarde[5]){
            console.log(`
            ZERADOR DE JOGOS !!! -- VOCÊ ZEROU O JOGO`)
            conquistas += 1
        }
        
        //VOCÊ SE DEU BEM COMO VENDEDOR DE FEIRA
        if(feirista){
            console.log(`
            FEIRISTA !!! -- VOCÊ SE DEU BEM COMO VENDEDOR DE FEIRA`)
            conquistas += 1
        }
        
        //LADRÃO
        if(respArrayHistoriaTarde[2]){
            console.log(`
            LADRÃO !!! -- VOCÊ FOI ROUBADO`)
            conquistas += 1
        }
        
        if(respArrayHistoriaManha[5]){
            console.log(`
            FANTASIA !!! -- VOCÊ CONSEGUIU UMA FANTASIA DO SEU FILME FAVORITO`)
            conquistas += 1
        }
        
        if(respArrayHistoriaManha[4]){
            console.log(`
            O GATO DE NÓS TODOS !!! -- VOCÊ DOOU O GATO PARA A GAROTINHA CHORONA`)
            conquistas += 1
        }
        
        if(respArrayHistoriaTarde[1]){
            console.log(`
            UMA MOEDA POR FAVOR !!! -- VOCÊ DEU DINHEIRO AO MENDIGO(AINDA BEM)`)
            conquistas += 1
        }
        
        if(bebidemais){
            console.log(`
            QUE FESTA ? !!! -- VOCÊ QUASE MORREU KK'`)
            conquistas += 1
        }
        
        if(respArrayHistoriaTarde[3]){
            console.log(`
            VOCÊ CONSEGUIU UM CARRO !!! -- VOCÊ CONQUISTOU UM CARRO`)
            conquistas += 1
        }
        
        if(respArrayHistoriaTarde[4]){ //EU SEI QUE O CASAMENTO É NA TARDE DO DIA SEGUINTE, É PROPOSITAL
            console.log(`
            VOCÊ SE CASOU !!! -- VOCÊ CONQUISTOU A MARY <3`)
            conquistas += 1
        }
        
        if(rico){
            console.log(`
            VOCÊ GANHOU NA MEGA SENA !!! -- ESTA RICO !!!`)
            conquistas += 1
        }
        if(semcarro){
            console.log(`
            SEM CARRO, SEM MULHER !!! -- VOCÊ FOI RECUSADO POR NAO TER CARRO KKKK'`)
            conquistas += 1
        }

        console.log(`

            PARABENS !!! VOCE CONSEGUIU ${conquistas} CONQUISTAS E FANALIZOU O JOGO`)

    },

}

//FUNÇÕES

//mostrar personagem
function MostrarPersonagem ()
{

    console.log(`STATUS --
    |NOME: ${Personagem.NOME}
    |SATISFEITO: ${Personagem.SATISFEITO}
    |ENERGIA: ${Personagem.ENERGIA}
    |DINHEIRO: $${Personagem.DINHEIRO},00
    |HORAS: ${Personagem.HORAS}:00
    `)

}

//OPÇÕES
function afazer()
{

    console.log(`   ESCOLHA O QUE QUER FAZER:
            [1] COZINHAR = +30 SATISFEITO / -5 ENERGIA / -10 DINHEIRO
            [2] DORMIR = -5 SATISFEITO / +30 ENERGIA / -10 DINHEIRO
            [3] TRABALHAR = -10 SATISFEITO / -20 ENERGIA / +20 DINHEIRO`)

    fazer = +prompt(`-->`)

    while(fazer != 1 && fazer != 2 && fazer != 3)
    {

        console.log(`   POR FAVOR, DIGITE UM NUMERO VALIDO(1, 2 OU 3)`)

        fazer = prompt(`-->`)

        console.clear()

    }

    if(fazer == 1)
    {

        console.log(`   VOCÊ ESCOLHEU PAGAR POR UMA OTIMA REFEIÇÃO !`)

        Personagem.SATISFEITO += 30
        Personagem.ENERGIA -= 5
        Personagem.DINHEIRO -= 10

    }

    else if(fazer == 2)
    {

        console.log(`   VOCÊ ESCOLHEU PAGAR PARA DESCANSAR EM UM HOTEL !`)

        Personagem.SATISFEITO -= 5
        Personagem.ENERGIA += 30
        Personagem.DINHEIRO -= 10

    }

    else if(fazer == 3)
    {
        console.log(`   VOCÊ ESCOLHEU TRABALHAR PARA CONQUISTAR DINHEIRO !`)

        Personagem.SATISFEITO -= 10
        Personagem.ENERGIA -= 20
        Personagem.DINHEIRO += 20

    }

    Personagem.HORAS += 6
    fimH = MORTE()

}

//MORTE
function MORTE ()
{

    if(Personagem.DINHEIRO <= 0)
    {

        Personagem.DINHEIRO = 0
        console.log()
        return "VOCÊ FALIU -- GAME OVER !!!";

    }

    else if(Personagem.ENERGIA <= 0)
    {

        Personagem.ENERGIA = 0
        console.log()
        return "VOCÊ MORREU DE CANSAÇO - GAME OVER !!!";

    }

    else if(Personagem.SATISFEITO <= 0)
    {
        Personagem.SATISFEITO = 0
        console.log()
        return "VOCÊ MORREU DE FOME - GAME OVER !!!";

    }

    if(voceNaoAjudouOmendigo)
    {

        console.log()
        return "VOCÊ TOMOU UM TIRO E MORREU - GAME OVER !!!";
    }

}   


//HISTORIAS

//0 -- DIA 1
//HM0
function HistoriaM0()
{

    Personagem.HORAS += 2;

    console.log(`
    UM PARENTE FICOU SABENDO QUE VOCÊ SE MUDOU PARA A CIDADE E TE LIGOU:

    - OI ${Personagem.NOME}, TUDO BEM ? VEM AQUI EM CASA ESSA MANHÃ PARA TOMARMOS UM CAFÉ !
MINHA TV PAROU DE FUNCIONAR, SE ARRUMAR ELA, TE DOU UNS TROCADOS OUTRO DIA, O QUE ACHA ?[S/N]`)

    respArrayHistoriaManha[i] = prompt('-->').toLowerCase()

    while(respArrayHistoriaManha[i] != "s" && respArrayHistoriaManha[i] != "n")
    {

        console.log(`resposta invalida, digite novamente[S/N]`)
        respArrayHistoriaManha[i] = prompt('-->').toLowerCase()

    }

    console.clear()

    if(respArrayHistoriaManha[i] == 's')
    {

        console.log(`
    PARENTE: - QUE BOM QUE VEIO !!! FICO FELIZ. FAZ MUITO TEMPO 
QUE NAO TE VEJO. SENTE-SE, COMA ALGUMA COISA E VAMOS CONVERSAR.
        `)

        console.log()

        Personagem.AumentarSATISFEITO(10)

        respArrayHistoriaManha[i] = true;

    }

    else
    {

        console.log(`
    PARENTE: - TUDO BEM, TALVEZ EU TE CHAME OUTRA HORA.`)

        respArrayHistoriaManha[i] = false;

    }

    fimH = MORTE ()

}

//HT0
function HistoriaT0()
{

    Personagem.HORAS += 2;

    console.log(`
    É DIA DE FEIRA, VOCÊ PODE VENDER ALGUMAS COISAS !!!

VOCÊ ACEITA ?[S/N]`)

    respArrayHistoriaTarde[i] = prompt('-->').toLowerCase()

    while(respArrayHistoriaTarde[i] != "s" && respArrayHistoriaTarde[i] != "n")
    {

        console.log(`resposta invalida, digite novamente[S/N]`)
        respArrayHistoriaTarde[i] = prompt('-->').toLowerCase()

    }

    console.clear()

    if(respArrayHistoriaTarde[i] == 's')
    {

        console.log(`
    QUE LEGAL ! O MOVIMENTO ESTA BOM HOJE E VOCÊ CONHECE ALGUMAS PESSOAS QUE PARECEM LEGAIS
        
        `)

        respArrayHistoriaTarde[i] = true;

        Personagem.AumentarDINHEIRO(20)
        Personagem.AbaixarENERGIA(5)

    }

    else
    {

        console.log(`
    TUDO BEM, DEIXA PRA LA ENTÃO.`)

        respArrayHistoriaTarde[i] = false;

    }

    fimH = MORTE ()

}

//Hn0
function HistoriaN0()
{

    Personagem.HORAS += 2;

    console.log(`   DEPOIS DE UM DIA DESSES, O QUE ACHA DE SAIR PARA UMA FESTA ESSA NOITE ?!![S/N]`)

    respArrayHistoriaNoite[i] = prompt('-->').toLowerCase()

    while(respArrayHistoriaNoite[i] != "s" && respArrayHistoriaNoite[i] != "n")
    {

        console.log(`resposta invalida, digite novamente[S/N]`)
        respArrayHistoriaNoite[i] = prompt('-->').toLowerCase()

    }

    console.clear()

    if(respArrayHistoriaNoite[i] == 's')
    {

        console.log(`
    VOCÊ CURTE BASTANTE A FESTA, GASTA ALGUM DINHEIRO E
ENERGIA, APESAR DE NAO SE LEMBRAR DE MUITA COISA...
        
        `)

        Personagem.AbaixarENERGIA(15)
        Personagem.AbaixarDINHEIRO(10)

        respArrayHistoriaNoite[i] = true;

    }

    else
    {
        
        console.log(`
    TUDO BEM, TALVEZ SEJA MELHOR DESCANSAR MESMO...`)

        Personagem.AumentarENERGIA(15)

        respArrayHistoriaNoite[i] = false;

    }

    fimH = MORTE ()

}

//1 -- DIA 2
//HM1
function HistoriaM1 ()
{

    Personagem.HORAS += 2;

    console.log(`
    O QUE ACHA DE CORRER UM POUCO NESSA MANHÃ ?`)

    respArrayHistoriaManha[i] = prompt('-->').toLowerCase()

    while(respArrayHistoriaManha[i] != "s" && respArrayHistoriaManha[i] != "n")
    {

        console.log(`resposta invalida, digite novamente[S/N]`)
        respArrayHistoriaManha[i] = prompt('-->').toLowerCase()

    }

    console.clear()

    if(respArrayHistoriaManha[i] == 's')
    {

        console.log(`
    O DIA ESTA ENSOLARADO, AS PESSOAS TE OLHAM UM POUCO DIFERENTE JA QUE É NOVO 
NA CIDADE. TIMIDO COMO VOCÊ É, SE MANTEM CORRENDO SEM OLHAR MUITO PARA OS LADOS.

    - OLÁ, VOCÊ É NOVO NA CIDADE NÉ ? ME CHAMO MARY !

    ${Personagem.NOME}: ...

    Mary: - NAO SEJA TIMIDO, NOSSA CIDADE NÃO COSTUMA RECEBER PESSOAS NOVAS, POR ISSO TE OLHAM ASSIM. 
TOME ! AQUI ESTA MEU NUMERO, PODE ME LIGAR PARA EU TE MOSTRAR A CIDADE QUALQUER DIA, SE QUISER, CLARO.
        `)

        console.log()

        Personagem.AbaixarENERGIA(5)

        respArrayHistoriaManha[i] = true;

    }

    else
    {

        console.log(`   
    TUDO BEM. CONTINUEMOS COM NOSSA MANHÃ ENTAO`)

        respArrayHistoriaManha[i] = false;

    }

    fimH = MORTE ()

}

//HT1
function HistoriaT1 ()
{

    Personagem.HORAS += 2;

    console.log(`   
    VOCÊ ESTA NA RUA E VÊ UM MENDIGO, ELE TE PEDE DINHEIRO.

DE $15 PARA AJUDAR O MENDIGO

VOCÊ ACEITA AJUDAR O MENDIGO ?[S/N]`)

    respArrayHistoriaTarde[i] = prompt('-->').toLowerCase()

    while(respArrayHistoriaTarde[i] != "s" && respArrayHistoriaTarde[i] != "n")
    {

        console.log(`resposta invalida, digite novamente[S/N]`)
        respArrayHistoriaTarde[i] = prompt('-->').toLowerCase()

    }

    console.clear()

    if(respArrayHistoriaTarde[i] == 's')
    {

        console.log(`
        
        `)

        Personagem.AbaixarDINHEIRO(15)

        respArrayHistoriaTarde[i] = true;

    }
    
    else
    {

        console.log(`
    VOCÊ DEVERIA AJUDAR AS PESSOAS...`)

        respArrayHistoriaTarde[i] = false;

    }

    fimH = MORTE ()

}
//Hn1
function HistoriaN1 ()
{

    Personagem.HORAS += 2;

    console.log(`   
    A NOITE ESTA FRIA, QUE TAL COMPRAR UM FILME PARA ASSISTIR ?!![S/N]`)

    respArrayHistoriaNoite[i] = prompt('-->').toLowerCase()

    while(respArrayHistoriaNoite[i] != "s" && respArrayHistoriaNoite[i] != "n")
    {

        console.log(`resposta invalida, digite novamente[S/N]`)
        respArrayHistoriaNoite[i] = prompt('-->').toLowerCase()
    
    }

    console.clear()

    if(respArrayHistoriaNoite[i] == 's')
    {

        console.log(`
    VOCÊ GASTA ALGUM DINHEIRO NO FILME, MAS DESCANSA ENQUANTO ASSISTE,
E POR SINAL, O FILME É MUITO BOM, ALGO SOBRE UM PISTOLEIRO E O FAROESTE...
        `)

        console.log()

        Personagem.AumentarENERGIA(20)
        Personagem.AbaixarDINHEIRO(10)

        respArrayHistoriaNoite[i] = true;

    }

    else
    {   

        console.log(`
    TUDO BEM, ENTAO VEJAMOS O QUE FAZER...
        `)

        respArrayHistoriaNoite[i] = false;

    }

    fimH = MORTE ()

}


//2 -- DIA 3
//HM2
function HistoriaM2 ()
{

    Personagem.HORAS += 2;

    if(respArrayHistoriaManha[1])
    {
        
        console.log(`   
    VOCÊ SAI PARA CORRER NOVAMENTE, GOSTOU DA GAROTA DA MANHA DO DIA ANTERIOR, MAS ESTA TIMIDO DE MAIS
PARA LIGAR PARA ELA, TENTA ACHA-LA NA PRAÇA ONDE COSTUMA CORRER, MAS NAO A ENCONTRA...

DESCONHECIDO: - OLÁ, QUER COMPRAR MEU BILHETE DA MEGA SENA ?[S/N]`)

        respArrayHistoriaManha[i] = prompt('-->').toLowerCase()

        while(respArrayHistoriaManha[i] != "s" && respArrayHistoriaManha[i] != "n")
        
        {

            console.log(`resposta invalida, digite novamente[S/N]`)
            respArrayHistoriaManha[i] = prompt('-->').toLowerCase()

        }

        console.clear()

        if(respArrayHistoriaManha[i] == 's')
        {

            console.log(`
    DESCONHECIDO: - OBRIGADO POR ME AJUDAR !
    
            `)

            Personagem.AbaixarDINHEIRO(10)

            respArrayHistoriaManha[i] == true;

        }

        else
        {

            console.log(`   
    TUDO BEM, OBRIGADO POR NADA !
            `)

            respArrayHistoriaManha[i] = false;

        }

    }

    else
    {

        console.log(`   
    HOJE O DIA PARECE DESINTERESSANTE...ENFIM, VAMOS NESSA !`)

        respArrayHistoriaManha[i] = false;

    }

    fimH = MORTE ()

}

//HT2
function HistoriaT2 ()
{

    Personagem.HORAS += 2;

    if(respArrayHistoriaTarde[0])
    {

        console.log(`   
    EI, VOCÊ É O RAPAZ DA FEIRA NÉ ? AQUELA TARDE DO DIA 1 ? TE DEI DINHEIRO
A MENOS E NAO PERCEBI, AQUI ESTA O QUE FALTA !

VOCÊ ACEITA ?[S/N]`)

        let resposta = prompt('-->').toLowerCase()

        while(resposta != "s" && resposta != "n")
        {

            console.log(`resposta invalida, digite novamente[S/N]`)
            resposta = prompt('-->').toLowerCase()

        }

        console.clear()

        if(resposta == 's')
        {

            console.log(`
            
            `)

            Personagem.AumentarDINHEIRO(15)
            feirista = true;

        }

        else
        {

            console.log(`
    OBRIGADO ! VAI ME AJUDAR...
            `)

        }

    }

    else
    {

        console.log(`   
    A TARDE ESTA MUITO LINDA, QUE TAL VER O POR DO SOL NA PONTE ?`)

        respArrayHistoriaTarde[i] = prompt('-->').toLowerCase()

        while(respArrayHistoriaTarde[i] != "s" && respArrayHistoriaTarde[i] != "n")
        {

            console.log(`resposta invalida, digite novamente[S/N]`)
            respArrayHistoriaTarde[i] = prompt('-->').toLowerCase()

        }

        console.clear()

        if(respArrayHistoriaTarde[i] == 's')
        {

            console.log(`
    VOCÊ ESTA INDO VER O POR DO SOL E É ROUBADO.
            
            `)

            Personagem.AbaixarDINHEIRO(30)

            respArrayHistoriaTarde[i] = true;

        }
        
        else
        {

            console.log(`
    QUEM NÃO GOSTA DE VER O POR DO SOL ? VOCÊ É ENGRAÇADO`)

            respArrayHistoriaTarde[i] = false;

        }

    }

    fimH = MORTE ()

}

//Hn2
function HistoriaN2 ()
{

    Personagem.HORAS += 2;

    if(respArrayHistoriaManha[1])
    {

        console.log(`
    VOCÊ NAO CONSEGUE NAO PENSAR NA MARY, A GAROTA QUE TE PASSOU O TELEFONE NA MANHA DO DIA 2, ISSO TE 
FAZ TOMAR MAIS CORAGEM, UMA OTIMA HORA PARA LIGAR PARA ELA E MARCAR ALGO

    MARCAR ALGO ?[S/N]`)

        respArrayHistoriaNoite[i] = prompt('-->').toLowerCase()

        while(respArrayHistoriaNoite[i] != "s" && respArrayHistoriaNoite[i] != "n")
        {

            console.log(`resposta invalida, digite novamente[S/N]`)
            respArrayHistoriaNoite[i] = prompt('-->').toLowerCase()

        }

        console.clear()

        if(respArrayHistoriaNoite[i] == 's')
        {

            console.log(`
    ${Personagem.NOME}: - ALÔ ? ÉÉÉ MARY ? EU ACHO QUE NAO LEMBRA DE MIM, EU SOU O-O-O CARA-R-RAPAZ.

    MARY: - OOI ! EU LEMBRO, QUE ESTAVA CORRENDO NA PRAÇA ! TUDO BEM ? A NOITE ESTA LINDA HOJE
QUER ME CHAMAR PRA SAIR ?

    ${Personagem.NOME}: - S-SIM !

    MARY: - EU ADORARIA ! VOU ME ARRUMAR, ME ENCONTRE NO CINEMA EM DUAS HORAS...

...O ENCONTRO ACABA E VOCÊS SE DIVERTEM MUITO. VOCÊ SE PERGUNTA SE ELA TOPARA SAIR OUTROS DIAS DE NOVO.
FELIZMENTE, VOCÊ SE SENTE MENOS TIMIDO PARA CONVIDA-LA.
            
            `)

            Personagem.AbaixarENERGIA(10)

            Personagem.AbaixarDINHEIRO(10)

            respArrayHistoriaNoite[i] = true;

        }

        else
        {

            console.log(`
    QUE PENA, ELA PARECIA UMA GAROTA LEGAL...`)

            respArrayHistoriaNoite[i] = false;

        }

    }

    else
    {

        console.log(`A NOITE ESTA LINDA, MAS VOCÊ TEM MAIS O QUE FAZER, PELO JEITO..`)
        respArrayHistoriaNoite[i] = false;

    }

    fimH = MORTE ()
    
}

//3 -- DIA 4
//HM3
function HistoriaM3 ()
{

    Personagem.HORAS += 2;

    if(respArrayHistoriaManha[0])
    {

        console.log(`
    VOCÊ ESTA CAMINHANDO E O TELEFONE TOCA.

    PARENTE: - ALÔ ? ${Personagem.NOME}? TUDO BEM ? LEMBRA QUE ARRUMOU MINHA TV AQUELE DIA ?`)

        let resposta = prompt('-->').toLowerCase()

        while(resposta != "s" && resposta != "n")
        {

            console.log(`resposta invalida, digite novamente[S/N]`)
            resposta = prompt('-->').toLowerCase()

        }

        console.clear()

        if(resposta == 's')
        {

            console.log(`
    ${Personagem.NOME}: - OOI, SIM, ME LEMBRO, TUDO BEM SIM E COM VOCÊ ?

    PARENTE: - "JA RECEBI MEU SALARIO, ESTOU COM O DINHEIRO QUE FALEI QUE TE DARIA,
VENHA BUSCAR !"

    VOCÊ DESLIGA O TELEFONE E CORRE ATÉ A CASA DELA, VOCÊ PASSA POR UMAS 
CAIXAS DE PAPELÃO, MAS ESTA CORRENDO CORRENDO DE MAIS PARA ESCUTAR UM MIADO.
            
            `)

        Personagem.AumentarDINHEIRO(20)

        }

        else
        {

            console.log(`   
    PARENTE: - AH, TA BOM, ACHO QUE LIGUEI ERRADO..."
        
    VOCÊ DESLIGA O TELEFONE E, DISTRAIDO COM ELE, NAO PERCEBE UM MIADO VINDO DE
UMAS CAIXAS DE PAPELÃO UM POUCO A SUA DIREITA NA CALÇADA`)

        }

    }
    
    else
    {

        console.log(`
    VOCÊ ESTA CAMINHANDO E ACHA UM GATINHO FILHOTE DENTRO DE UMA CAIXA,
O QUE ACHA DE FICAR COM ELE ?[S/N]`)

        respArrayHistoriaManha[i] = prompt('-->').toLowerCase()

        while(respArrayHistoriaManha[i] != "s" && respArrayHistoriaManha[i] != "n")
        {

        console.log(`resposta invalida, digite novamente[S/N]`)
        respArrayHistoriaManha[i] = prompt('-->').toLowerCase()

        }

        console.clear()

        if(respArrayHistoriaManha[i] == 's')
        {

            console.log(`
    ${Personagem.NOME}: - OOI GATO FOFINHO, TE ABANDONARAM AQUI ? NÃO ESQUENTA,
VAI FICAR TUDO BEM AGORA ! VAMOS, VOU TE COMPRAR RAÇÃO.

            `)

            Personagem.AbaixarDINHEIRO(5)

            respArrayHistoriaManha[i] = true;

        }

        else
        {

                console.log(`
    VOCÊ É CRUEL !`)

                respArrayHistoriaManha[i] = false;

        }

    }

    fimH = MORTE ()

}

//HT3
function HistoriaT3 ()
{

    Personagem.HORAS += 2;

    console.log(`
    ALEXANDRE: ALÔ ! ${Personagem.NOME} ?!! SOU EU, ALEXANDRE. VOCÊ ANDA SE DEDICANDO BEM AO TRABALHO ! ESTOU
IMPRESSIONADO. GOSTARIA DE TE OFERECER UM CARRO, ESTOU COMPRANDO OUTRO E QUERO VENDER O MEU POR UM
PREÇO JUSTO.

    VOCÊ SE INTERESSA (-$120,00) ?[S/N]`)

    respArrayHistoriaTarde[i] = prompt('-->').toLowerCase()

    while(respArrayHistoriaTarde[i] != "s" && respArrayHistoriaTarde[i] != "n")
    {

        console.log(`resposta invalida, digite novamente[S/N]`)
        respArrayHistoriaTarde[i] = prompt('-->').toLowerCase()

    }

        console.clear()

    if(respArrayHistoriaTarde[i] == 's')
    {

        console.log(`
    ${Personagem.NOME}: - SIM, ADORARIA !!!
            
            `)

        Personagem.AbaixarDINHEIRO(120)

        respArrayHistoriaTarde[i] = true;

    }

    else
    {

        console.log(`TUDO BEM, DE QUALQUER FORMA, GOSTARIA DE TE RECOMPENSAR PELO TRABALHO DURO !`)

        Personagem.AumentarDINHEIRO(30)

        respArrayHistoriaTarde[i] = false;

    }

    fimH = MORTE()

}

//HN3
function HistoriaN3 ()
{

    Personagem.HORAS += 2;

    if(respArrayHistoriaNoite[2])
    {

        console.log(`
    A NOITE CHEGA NOVAMENTE E, COM ELA, VEM AS LEMBRAÇAS DA NOITE ANTERIOR COM A MARY, É CLARO QUE 
VOCÊS SE VIRAM A POUCO TEMPO E NAO FAZ SENTIDO NENHUM LIGAR PARA ELA, MUITO MENOS MARCAR ALGO NÉ... 
MAS TALVEZ ELA ESTEJA DESOCUPADA ESSA NOITE, OU FOI AQUELAS RISADAS DELA QUE TE DERAM ALGUMA CONFIANÇA 
DE QUE ELA PODE ACEITAR SAIR HOJE. 

    LIGAR PARA MARCAR ALGO ?[S/N]`)

        respArrayHistoriaNoite[i] = prompt('-->').toLowerCase()

        while(respArrayHistoriaNoite[i] != "s" && respArrayHistoriaNoite[i] != "n")
        {

            console.log(`resposta invalida, digite novamente[S/N]`)
            respArrayHistoriaNoite[i] = prompt('-->').toLowerCase()

        }

        console.clear()

        if(respArrayHistoriaNoite[i] == 's')
        {

            console.log(`
    ${Personagem.NOME}: - ALÔ ? MARY ...?

    MARY: - ${Personagem.NOME} ? TUDO BEM ?

    ${Personagem.NOME}: - S-SIM ! EU QUERIA PERGUNTAR SE NÃO QUER FAZER ALGO ESSA NOITE ?

    MARY: - ESTA FRIO, PODE SER UM FILME ?

...O FILME ACABA E, TALVEZ, VOCÊS ESTEJAM APAIXONADOS...
        
            `)

            Personagem.AumentarENERGIA(30)

            respArrayHistoriaNoite[i] = true;

        }

        else
        {
        
            console.log(`
    ESTAR SOZINHO, AS VEZES, É A MELHOR OPÇÃO, DA PRA DESCANSAR...
            
            `)

            Personagem.AumentarENERGIA(15)

            respArrayHistoriaNoite[i] = false;

        }
    }

    else
    {

        console.log(`
    ESTA FRIO NOVAMENTE, UM OTIMO CLIMA PARA DORMIR NESSA NOITE.
        
        `)

        Personagem.AumentarENERGIA(15)

        respArrayHistoriaNoite[i] = false;

    }

    fimH = MORTE ()

}

//4 -- DIA 5
//HM4
function HistoriaM4 ()
{

    Personagem.HORAS += 2;

    if(respArrayHistoriaManha[3])
    {

        console.log(`
    VOCÊ ESTA SAINDO COM O GATO DO PETSHOP E VÊ UMA GAROTA CHORANDO NA PORTA DE UM VETERINARIO...

    ${Personagem.NOME}: - EI, GAROTINHA, O QUE FOI ?

    GAROTINHA: - MEU GATO MORREU !!! ELE ERA O MEU MELHOR AMIGO...

    ${Personagem.NOME}: - VEJA ! ACHEI ESSE GATINHO ONTEM ABANDONADO EM UMA CAIXA. ELE NAO TEM ONDE FICAR.
SERA QUE PODE FICAR COM ELE ?[S/N]`)

        respArrayHistoriaManha[i] = prompt('-->').toLowerCase()

        while(respArrayHistoriaManha[i] != "s" && respArrayHistoriaManha[i] != "n")
        {

            console.log(`resposta invalida, digite novamente[S/N]`)
            respArrayHistoriaManha[i] = prompt('-->').toLowerCase()

        }

        console.clear()

        if(respArrayHistoriaManha[i] == 's')
        {

            console.log(`
    ${Personagem.NOME}: OBRIGADO, CONFIO EM VOCÊ PARA CUIDAR DELE.
            
            `)

            respArrayHistoriaManha[i] = true;

        }

        else
        {

            console.log(`
    ${Personagem.NOME}: - QUE PENA...SEI QUE NÃO MUDA MUITA COISA, MAS TOME ESSE DINHEIRO PARA COMPRAR ALGUNS DOCES...
            `)

            Personagem.AbaixarDINHEIRO(100)

            respArrayHistoriaManha[i] = false;

        }

    }

    else
    {

        console.log(`
    VOCE VÊ UMA GAROTA CHORANDO NA RUA......
    
    ${Personagem.NOME}: - EI, GAROTINHA, O QUE FOI ?

    GAROTINHA: - MEU GATO MORREU !!! ELE ERA O MEU MELHOR AMIGO...
    
    TENTAR AJUDAR ?[S/N]`)

        let resposta = prompt('-->').toLowerCase()

        while(resposta != "s" && resposta != "n")
        {

            console.log(`resposta invalida, digite novamente[S/N]`)
            resposta = prompt('-->').toLowerCase()

        }

        console.clear()

        if(resposta == 's')
        {

            console.log(`${Personagem.NOME}: - SEI QUE NÃO MUDA MUITA COISA, MAS TOME ESSE DINHEIRO PARA COMPRAR ALGUNS DOCES...
            
            `)

            respArrayHistoriaManha[i] = false;

            Personagem.AbaixarDINHEIRO(100)

        }

        else
        {

            console.log(`${Personagem.NOME}: - EU SINTO MUITO MESMO...
            
            `)

            respArrayHistoriaManha[i] = false;

        }

    }

    fimH = MORTE ()

}

//HT4
function HistoriaT4 ()
{

    Personagem.HORAS += 2;

    if(respArrayHistoriaNoite[3])
    {

        console.log(`
    VOCÊ PENSA SERIAMENTE EM PEDIR A MARY EM NAMORO DEPOIS DE TODO O APEGO QUE DEMONSTRARAM NOS
ULTIMOS DIAS...MAS AINDA ESTA EM DUVIDA.

    COMPRAR ALIANÇA ? (-$60,00) ?[S/N]`)

        respArrayHistoriaTarde[i] = prompt('-->').toLowerCase()

        while(respArrayHistoriaTarde[i] != "s" && respArrayHistoriaTarde[i] != "n")
        {

            console.log(`resposta invalida, digite novamente[S/N]`)
            respArrayHistoriaTarde[i] = prompt('-->').toLowerCase()

        }

        console.clear()

        if(respArrayHistoriaTarde[i] == 's')
        {

            console.log(`
    VOCÊ COMPRA UMA LINDA ALIANÇA FINA DE PRATA.
            
            `)

            Personagem.AbaixarDINHEIRO(60)

            respArrayHistoriaTarde[i] = true;

        }

        else
        {

            console.log(`...`)

            respArrayHistoriaTarde[i] = false;

        }
    }

    else
    {

        console.log(`
    SABE ${Personagem.NOME}... JA SENTIU COMO SE TIVESSE DEIXADO PASSAR ALGO QUE NAO DEVIA ?`)

        respArrayHistoriaTarde[i] = false;

    }

    fimH = MORTE()

}

//HN4
function HistoriaN4 ()
{
    Personagem.HORAS += 2;

    if(respArrayHistoriaNoite[0])
    {

        console.log(`
    ESTA DE NOITE E VOCÊ ESTA FELIZ, VOCÊ MUDOU MUITO DESDE QUE CHEGOU NA CIDADE... VOCÊ ERA UM HOMEM 
TIMIDO E REPRIMIDO, COM ALGUM TIPO DE ANSEIO. OLHE SÓ PRA VOCÊ AGORA, TOTALMENTE INDEPENDENTE, LEVANDO 
SUA VIDA SOZINHO, CONQUISTANDO SEU DINHEIRO E CONHECENDO COISAS NOVAS.
    OPA... QUE CARRO É AQUELE VINDO TÃO RAPIDO ?
        
    CARA DO CARRO: - HEY IDIOTA, É VOCÊ MESMO, ESTOU TE PROCURANDO A DIAS, LEMBRA DE MIM ? VOCÊ PEGOU MINHA
ESPOSA NA FRENTE DE TODO MUNDO NAQUELA FESTA DO DIA 1.
    
    ELE SACA UM REVOLVER E SEM PENSAR DUAS VEZES DISPARA CONTRA VOCÊ.........
        `)

        if(respArrayHistoriaTarde[1])
        {
            console.log(`
    NUM ULTIMO INSTANTE... O MENDIGO QUE VOCÊ AJUDOU NA TARDE DO DIA 2 PULA NO CARA E O DERRUBA,
VOCÊ E O MENDIGO BATEM NO CARA DO CARRO ATÉ ELE QUE ELE PARE DE TENTAR REAGIR.
    O MENDIGO LEVANTA E TE AGRADECE PELO DINHEIRO QUE DEU A ELE AQUELE DIA, VOCÊ DA MAIS ALGUM DINHEIRO
AGRADECE ELE, VAI ATÉ A POLICIA RELATAR O OCORRIDO E, INCRIVELMENTE, SEGUE SUA NOITE.
            `)

            Personagem.AbaixarDINHEIRO(80)
            bebidemais = true;
            voceNaoAjudouOmendigo = false;

        }

        else
        {

            console.log(`
    ELE TE ATINGE NO PEITO, VOCÊ CAI PARA FRENTE. UM POUCO ATRAS DO HOMEM DO CARRO VOCÊ VÊ, NO ESCURO 
E QUASE INVISIVEL, O MENDIGO DA TARDE DO DIA 2 LEMBRA ? AQUELE QUE VOCÊ ESCOLHEU NAO AJUDAR... ELE TE 
OLHA COM UM OLHAR DE PENA.
            `)

            voceNaoAjudouOmendigo = true;

        }

    }

    else
    {

        console.log(`
    ESTA DE NOITE E VOCÊ ESTA FELIZ, VOCÊ MUDOU MUITO DESDE QUE CHEGOU NA CIDADE... VOCÊ ERA UM HOMEM 
TIMIDO E REPRIMIDO, COM ALGUM TIPO DE ANSEIO. OLHE SÓ PRA VOCÊ AGORA, TOTALMENTE INDEPENDENTE, LEVANDO 
SUA VIDA SOZINHO, CONQUISTANDO SEU DINHEIRO E CONHECENDO COISAS NOVAS.
    OPA... QUE CARRO É AQUELE VINDO TÃO RAPIDO ?
        
    CARA DO CARRO: - HEY IDIOTA, É VOCÊ MESMO, ESTOU TE PROCURANDO A DIAS.

    VOCÊ NÃO FAZ IDEIA DO QUE ELE ESTA FALANDO, CLARAMENTE ESTA TE CONFUNDINDO.
    
    ELE SACA UM REVOLVER E SEM PENSAR DUAS VEZES DISPARA CONTRA VOCÊ.........
        `)   

        if(respArrayHistoriaTarde[1])
        {

            console.log(`
    NUM ULTIMO INSTANTE... O MENDIGO QUE VOCÊ AJUDOU NA TARDE DO DIA 2 PULA NO CARA E O DERRUBA,
VOCÊ E O MENDIGO BATEM NO CARA DO CARRO ATÉ ELE QUE ELE PARE DE TENTAR REAGIR.
    O MENDIGO LEVANTA E TE AGRADECE PELO DINHEIRO QUE DEU A ELE AQUELE DIA, VOCÊ DA MAIS ALGUM DINHEIRO
AGRADECE ELE, VAI ATÉ A POLICIA RELATAR O OCORRIDO E, INCRIVELMENTE, SEGUE SUA NOITE.
            `)

            Personagem.AbaixarDINHEIRO(80)

            voceNaoAjudouOmendigo = false;

        }

        else
        {

            console.log(`
    ELE TE ATINGE NO PEITO, VOCÊ CAI PARA FRENTE. UM POUCO ATRAS DO HOMEM DO CARRO VOCÊ VÊ, NO ESCURO 
E QUASE INVISIVEL, O MENDIGO DA TARDE DO DIA 2 LEMBRA ? AQUELE QUE VOCÊ ESCOLHEU NAO AJUDAR... ELE TE 
OLHA COM UM OLHAR DE PENA.
            `)
            voceNaoAjudouOmendigo = true;

        }

    }

   fimH = MORTE()

}

//5 -- DIA 6
//HM5
function HistoriaM5 ()
{

    Personagem.HORAS += 2;

    if(respArrayHistoriaNoite[1])
    {

        console.log(`
    VOCÊ ESTA PASSANDO EM FRENTE A LOCADORA DE FILMES E ESCUTA UM HOMEM TE CHAMAR.

    HOMEM: - EI !!! AMIGO !!!

    ${Personagem.NOME}: - AAH, OLÁ, É O RAPAZ QUE ME VENDEU O FILME DO PISTOLEIRO NA MINHA SEGUNDA NOITE AQUI !

    HOMEM: - EXATAMENTE, VEJA SÓ ! TENHO AQUI UMA FANTASIA DAQUELE MESMO PISTOLEIRO, TOME, QUERO DAR A VOCÊ

    ${Personagem.NOME}: - POXA MUITO OBRIGADO :)
        `)

        respArrayHistoriaManha[i] = true;

    }

    else
    {
        console.log(`
    UMA MANHÃ TRANQUILA APESAR DE QUASE MORRER ONTEM... NÃO ACHA ? FINALMENTE NÉ, OS DIAS ANDAVAM DANDO MUITO TRABALHO
        `)

        respArrayHistoriaManha[i] = false;
    }

    fimH = MORTE ()

}

//HT5
function HistoriaT5FF ()
{

    Personagem.HORAS += 2;

    if(respArrayHistoriaTarde[4])
    {

        console.log(`   
    VOCÊ SOBREVIVEU A UMA NOITE UM TANTO QUANTO AGITADA, A MARY ESTA SUPER PREOCUPADA COM A LIGAÇÃO DA 
NOITE DE ONTEM E É UM MILAGRE VOCÊ ESTAR VIVO. VOCÊ DECIDE QUE VAI PEDI-LA EM NAMORO ESSA MANHÃ. COMO 
UMA CRIANÇA, VOCÊ CORRE.

    MARY: - AAAA ${Personagem.NOME} !!! ESTOU TÃO PREOCUPADA, DESDE QUE VOCÊ ENTROU NA MINHA VIDA EU SOU TÃO MAIS FELIZ,
FIQUEI COM TANTO MEDO DE TE PERDER !
    DIZ ELA, TE ABRAÇANDO FORTE

    ${Personagem.NOME}: NÃO SE PREOCUPE, EU NUNCA VOU TE DEIXAR... E PRA PROVAR ISSO...

    'VOCÊ PUXA AS ALIANÇAS E SE AJOELHA.'
        
        `)

        if(respArrayHistoriaTarde[3])
        {
            
            console.log(`MARY: - OWWWWWNT EU ACEITO !!! CLARO QUE EU ACEITO, PARA TODO O SEMPRE :) <3 S2
            
            `)

            respArrayHistoriaTarde[i] = true;

        }

        else
        {

            console.log(`
    MARY: - HMMRRR OLHA ${Personagem.NOME}, COMO EU DISSE, VOCÊ ME AJUDA MUITO E É MUITO COMPANHEIRO
MAS SINCERAMENTE ? NAO É A PESSOA QUE EU ESPERO TER PRA MINHA VIDA TODA, DESCULPE, MAS SOMOS AMIGOS NÉ ?
    ${Personagem.NOME}: - CLARO QUE SOMOS MARY ... PRECISO IR AGORA, TENHO MAIS O QUE FAZER !
            
            `)

            semcarro = true

            prompt(`                                          --> APERTE ENTER <--`)

            console.clear()

            console.log(`
    OLÁ !!! SOU EU, O ALEXANDRE ! VIM TE PARABENIZAR POR SUA CONTRIBUIÇÃO NOVAMENTE, ESTOU LHE DANDO 
UM CARGO DE DIRETOR ! SEU SALARIO TAMBEM AUMENTARÁ, VOCÊ DEMONSTROU MUITA DEDICAÇÃO. SEU AUMENTO SERA 
PERCEBIDO EM BREVE`)

            respArrayHistoriaTarde[i] = false;

        }

    }

    else
    {

        console.log(`
    OLÁ !!! SOU EU, O ALEXANDRE ! VIM TE PARABENIZAR POR SUA CONTRIBUIÇÃO NOVAMENTE, ESTOU LHE DANDO 
UM CARGO DE DIRETOR ! SEU SALARIO TAMBEM AUMENTARÁ, VOCÊ DEMONSTROU MUITA DEDICAÇÃO. SEU AUMENTO SERA 
PERCEBIDO EM BREVE`)

        respArrayHistoriaTarde[i] = false;

    }

}


//RECADOS FIM
function HistoriaFimM ()
{

    console.log(`NAO HÁ NOVIDADES NESSA MANHÃ, VOCÊ ZEROU A VIDA ! JÁ TEM DINHEIRO E TUDO QUE DECIDIU OU NÃO TER, 
AGORA VIVA A VIDA QUE ESCOLHEU

QUER SAIR DO JOGO E VER SUAS CONQUISTAS ? VOCÊ JA ZEROU O JOGO...[S/N]`)

    sair = prompt('-->').toLowerCase()

    while(sair != "s" && sair != "n")
    {
        console.log(`resposta invalida, digite novamente[S/N]`)
        sair = prompt('-->').toLowerCase()

    }

    if(sair == "s")
    {

        sair = true;

    }

    else
    {

        sair = false;
        
    }

}

function HistoriaFimT ()
{

    console.log(`NAO HÁ NOVIDADES NESSA TARDE, VOCÊ ZEROU A VIDA ! JÁ TEM DINHEIRO E TUDO QUE DECIDIU OU NÃO TER, 
AGORA VIVA A VIDA QUE ESCOLHEU

QUER SAIR DO JOGO E VER SUAS CONQUISTAS ? VOCÊ JA ZEROU O JOGO...[S/N]`)

    sair = prompt('-->').toLowerCase()

    while(sair != "s" && sair != "n")
    {
        console.log(`resposta invalida, digite novamente[S/N]`)
        sair = prompt('-->').toLowerCase()

    }

    if(sair == "s")
    {

        sair = true;

    }

    else
    {

        sair = false;
        
    }

}

function HistoriaFimN ()
{

    console.log(`NAO HÁ NOVIDADES NESSA NOITE, VOCÊ ZEROU A VIDA ! JÁ TEM DINHEIRO E TUDO QUE DECIDIU OU NÃO TER, 
AGORA VIVA A VIDA QUE ESCOLHEU

    QUER SAIR DO JOGO E VER SUAS CONQUISTAS ? VOCÊ JA ZEROU O JOGO...[S/N]`)

    sair = prompt('-->').toLowerCase()

    while(sair != "s" && sair != "n")
    {
        console.log(`resposta invalida, digite novamente[S/N]`)
        sair = prompt('-->').toLowerCase()

    }

    if(sair == "s")
    {

        sair = true;

    }

    else
    {

        sair = false;

    }

}



//ARRAYS

let arrayHistoriaManha = [HistoriaM0, HistoriaM1, HistoriaM2, HistoriaM3, HistoriaM4, HistoriaM5, Personagem.FIM0]
let respArrayHistoriaManha = []

let arrayHistoriaTarde = [HistoriaT0, HistoriaT1, HistoriaT2, HistoriaT3, HistoriaT4, HistoriaT5FF ,Personagem.FIM0]
let respArrayHistoriaTarde = []

let arrayHistoriaNoite = [HistoriaN0, HistoriaN1, HistoriaN2, HistoriaN3, HistoriaN4, Personagem.FIM0]
let respArrayHistoriaNoite = []



//JOGO
console.clear()
console.log(`


BEM VINDO AO JOGO !!!
POR FAVOR, DIGITE SEU NOME: `)

Personagem.NOME = prompt("-->").toUpperCase()

while(!isNaN(Personagem.NOME))
{

    console.log("POR FAVOR, DIGITE UM NOME VALIDO:")
    Personagem.NOME = prompt("-->").toUpperCase()

}

console.clear()

 console.log(`VOCÊ ACABA DE SE MUDAR PARA UMA CIDADE PARA COMEÇAR UMA VIDA NOVA, TENTE SE MANTER VIVO E SE DIVERTIR, MAS CUIDADO, 
VOCÊ SÓ TEM 400 REAIS, PRESTE ATENÇÃO AO STATUS E AO CUSTO DE SUAS AÇÕES, TENTE CHEGAR O MAIS LONGE POSSIVEL !

É IMPORTANTE NOTAR QUE CADA ESCOLHA SUA AFETA AS POSSIBILIDADES FUTURAS,
EXPLORE O JOGO E NO FIM VEJA QUANTAS CONQUISTAS VOCÊ CONSEGUIU !!!

NAS PERGUNTAS, RESPONDE SEMPRE COM "S" OU "N" ([S/N])

`)

prompt(`                                          --> APERTE ENTER <--`)

console.clear()

console.log(`- OLÁ, MEU NOME É ALEXANDRE, OUVI DIZER QUE VOCÊ TEM EXPERIENCIA COMO DESENVOLVEDOR WEB, CASO PRECISE 
TRABALHAR, TENHO ALGUNS TRABALHOS PARA VOCÊ, QUALQUER COISA BASTA ME PROCURAR ! TEM UM HOTEL PERTO 
DAQUI, CASO PRECISE DE UM LUGAR PARA DORMIR



`)

prompt(`                                          --> APERTE ENTER <--`)

console.clear()

let x = -1;
for(i = 0; i > x; i++)
{
    //DIA
    console.log('DIA ' + Dia)
    console.log()

    //PERIODO DA MANHA
    console.log(`PERIODO: MANHÃ`)
    console.log()

    //EXIBIR STATUS
    MostrarPersonagem()
    console.log()

    //HistoriaMANHA
    arrayHistoriaManha[i]()
    if(fimH){
        console.log()
        MostrarPersonagem()
        console.log()
        console.log(fimH)
        break;}
    if(fimz == true){
        arrayHistoriaManha[i] = HistoriaFimM
        arrayHistoriaManha[i+1] = HistoriaFimM
        arrayHistoriaTarde[i] = HistoriaFimT
        arrayHistoriaTarde[i+1] = HistoriaFimT
        arrayHistoriaNoite[i] = HistoriaFimN
        arrayHistoriaNoite[i+1] = HistoriaFimN
    }
    if(sair){
        Personagem.Conquistas()
        break;
    }
    
    console.log()
    prompt(`                                          --> APERTE ENTER <--`)
    console.clear()

    //escolha entre trabalhar, comer, dormir visitar a loja
    console.log('DIA ' + Dia)
    console.log()
    console.log(`PERIODO: MANHÃ`)
    console.log()
    MostrarPersonagem()
    console.log()
    afazer()
    console.clear()
    MostrarPersonagem()
    if(fimH){
        console.log()
        MostrarPersonagem()
        console.log()
        console.log(fimH)
        break;}
    console.log()
    prompt(`                                          --> APERTE ENTER <--`)
    console.clear()

    //visitarAloja()


    //PERIODO DA TARDE
    console.log('DIA ' + Dia)
    console.log()
    console.log(`PERIODO: TARDE`)
    console.log()

    //EXIBIR STATUS
    MostrarPersonagem()
    console.log()

    //HistoriaTARDE
    arrayHistoriaTarde[i]()
    if(fimH){
        console.log()
        MostrarPersonagem()
        console.log()
        console.log(fimH)
        break;}
    if(fimz){
        arrayHistoriaManha[i] = HistoriaFimM
        arrayHistoriaManha[i+1] = HistoriaFimM
        arrayHistoriaTarde[i] = HistoriaFimT
        arrayHistoriaTarde[i+1] = HistoriaFimT
        arrayHistoriaNoite[i] = HistoriaFimN
        arrayHistoriaNoite[i+1] = HistoriaFimN
    }
    if(sair){
        Personagem.Conquistas()
        break;
    }
    console.log()
    prompt(`                                          --> APERTE ENTER <--`)
    console.clear()

    //escolha entre trabalhar, comer, dormir ou visitar a loja
    console.log('DIA ' + Dia)
    console.log()
    console.log(`PERIODO: NOITE`)
    console.log()
    MostrarPersonagem()
    console.log()
    afazer()
    Personagem.HORAS = 0;
    Dia++
    console.clear()
    MostrarPersonagem()
    if(fimH){
        console.log()
        MostrarPersonagem()
        console.log()
        console.log(fimH)
        break;}
    prompt(`                                          --> APERTE ENTER <--`)
    console.clear()

    //visitarAloja()


    //PERIODO DA NOITE
    console.log('DIA ' + Dia)
    console.log()
    console.log(`PERIODO: NOITE`)
    console.log()

    //EXIBIR STATUS
    MostrarPersonagem()
    console.log()

    //HistoriaNOITE
    arrayHistoriaNoite[i]()
    if(fimH){
        console.log()
        MostrarPersonagem()
        console.log()
        console.log(fimH)
        break;}
    if(fimz == true){
        arrayHistoriaManha[i] = HistoriaFimM
        arrayHistoriaManha[i+1] = HistoriaFimM
        arrayHistoriaTarde[i] = HistoriaFimT
        arrayHistoriaTarde[i+1] = HistoriaFimT
        arrayHistoriaNoite[i] = HistoriaFimN
        arrayHistoriaNoite[i+1] = HistoriaFimN
    }
    if(sair){
        Personagem.Conquistas()
        break;
    }

    prompt(`                                          --> APERTE ENTER <--`)
    console.clear()

    //escolha entre trabalhar, comer, dormir ou visitar a loja
    console.log('DIA ' + Dia)
    console.log()
    console.log(`PERIODO: NOITE`)
    console.log()
    MostrarPersonagem()
    afazer()
    console.clear()
    MostrarPersonagem()
    if(fimH){
        console.log()
        MostrarPersonagem()
        console.log()
        console.log(fimH)
        break;}
    prompt(`                                          --> APERTE ENTER <--`)
    console.clear()

}