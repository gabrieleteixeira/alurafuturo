const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
         enunciado: "Você vê seu futuro mais focado em alcançar um crago de liderança ou em desenvelver habilidades especializadas?",
        alternativas: [
            {
                texto: "Cargo de liderança.",
                afirmacao: "Você valoriza a oportunidade de guiar e inspirar equipes, além de buscar constantemente desafios que permitam desenvolver suas habilidades de gestão e estratégia."
            },
            {
                texto: "Habilidades especializadas.",
                afirmacao: "Você acredita que o domínio profundo em uma área específica permite alcançar um nível de excelência que é crucial para resolver problemas complexos e se destacar em seu campo."
            }
        ]
    },
    {
        enunciado: "Você se imagina mais feliz daqui cinco anos se conquistar um grande objetivo profissional ou se estabelecer um equilíbrio saudável entre vida pessoal e trabalho?",
        alternativas: [
            {
                texto: "Grande objetivo profissional.",
                afirmacao: "Você busca impacto significativo em sua área de atuação e está disposta a investir tempo e esforço para alcançar esse objetivo. Você tende a ser motivada por desafios e pela possibilidade de realizar contribuições substanciais para sua carreira e para a sociedade."
            },
            {
                texto: "Equilibrio saudável entre a vida pessoal e trabalho.",
                afirmacao: "Você valoriza tanto o sucesso profissional quanto o bem-estar pessoal.  Busca harmonizar suas responsabilidades e conquistas profissionais com tempo de qualidade para família, amigos e atividades pessoais, acreditando que essa abordagem promove uma vida mais satisfatória e sustentável a longo prazo."
            }
        ]
    },
    {
        enunciado: "Qual sua principal prioridade para o futuro?",
        alternativas: [
            {
                texto: "Ter um impacto significativo na sua area de atuação.",  
                afirmacao: "Você é motivada por metas ambiciosas e pela vontade de transformar seu campo de trabalho, dedicando-se a inovações e soluções que possam deixar um legado duradouro.  Está disposta a enfrentar desafios e trabalhar intensamente para alcançar resultados que tragam avanços notáveis para sua área e para a sociedade."
            },
            {
                texto: "Garantir uma vida pessoal rica e saatisfatoria.",
                afirmacao: "Você prioriza o equilíbrio entre suas atividades profissionais e suas paixões pessoais, buscando tempo para cultivar relacionamentos significativos, desenvolver interesses e desfrutar de momentos de lazer.  Acredita que uma vida plena e gratificante é alcançada ao nutrir tanto seu bem-estar emocional quanto seus vínculos pessoais."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "VOCÊ É";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();