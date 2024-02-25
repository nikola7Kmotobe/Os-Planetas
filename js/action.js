let iformacaoPlantas = [
    'Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.',
    'Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite.',
    'A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos, incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida.',
    'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem a divindade romana da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.',
    'Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno.',
    'Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.',
    'Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano.',
    'Netuno ou Neptuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres.'
]

let estruturaInterna = [
    'Estrutura interna de Mercúrio. Devido à sua elevada densidade, acredita-se que o planeta possui um enorme núcleo de ferro que pode ir até 75% do raio. Em resultado, a espessura do manto de silicatos não deve ultrapassar os 600 km.',
    'O interior de Vénus é provavelmente muito semelhante ao da Terra: um núcleo de ferro com um raio de cerca de 3000 km, um manto de rocha derretida, que parece ocupar a maioria do planeta. Dados recentes da Magalhães indicam que a crosta de Vénus é mais forte e densa do que se pensava.',
    'As camadas da Terra são três: crosta, manto e núcleo. Elas compõem a estrutura interna do nosso planeta e possuem particularidades que as definem, como composição química, densidade e temperatura. Entre cada uma das camadas existe uma faixa de transição que recebe o nome de descontinuidade.',
    'O núcleo está envolvido por um manto de silicato que formou muitos dos acidentes tectônicos e vulcânicos do planeta, mas que parecem agora estar dormentes. Além do silício e do oxigênio, os elementos mais abundantes na crosta marciana são ferro, magnésio, alumínio, cálcio e potássio.',
    'Acredita-se que a estrutura interna de Júpiter revele um núcleo de Fe e Ni, assim como a Terra. Este núcleo deve ser cercado por uma camada de H metálico, existente apenas em condições extremas como o núcleo deste planeta; lá a temperatura é da ordem de 10000K e a pressão é de 3000000atm.',
    'Saturno é formado predominantemente por hidrogênio, hélio em menores proporções e uma quantidade muito pequena de metano. O seu núcleo, em contrapartida, é denso e solidificado, envolto por hidrogênio líquido metálico e hidrogênio líquido. Mesmo com essa composição, a densidade de Saturno é menor do que a da água.',
    'A estrutura interna do planeta é diferente dos outros gigantes gasosos. No centro encontra-se um núcleo de rocha envolto por uma camada de água. A região externa a este núcleo é composta de principalmente H e He.',
    'A estrutura interna lembra a de Urano -- um núcleo rochoso coberto por uma crosta de gelo, escondida no profundo de sua grossa atmosfera. Os dois terços internos de Netuno são compostos de uma mistura de rocha fundida, água, amônia líquida e metano.'
]

let superficie = [
    'A geologia de Mercúrio é composta por uma superfície dominada por crateras de impacto e planícies da lava. Outro aspecto curioso de sua geologia são os depósitos minerais dentro das crateras, provavelmente compostos por gelo. Todavia, nem tudo se sabe sobre sua geologia, pois cerca de 45% de sua superfície não fora mapeada. Seu interior contém um grande núcleo metálico, que equivale a 42% de seu volume total.',
    'Vénus é coberto por uma camada opaca de nuvens de ácido sulfúrico altamente reflexivas, impedindo que a sua superfície seja vista do espaço na luz visível. Ele possui a mais densa atmosfera entre todos os planetas terrestres do Sistema Solar, constituída principalmente de dióxido de carbono.',
    'A superfície terrestre é resultante da interposição entre três camadas, a litosfera (porção sólida), a atmosfera (porção gasosa) e a hidrosfera (porção líquida). Juntas, essas camadas permitem a existência de uma quarta expressão sobre a camada superficial da Terra: a biosfera, onde se manifesta a vida.',
    'Marte possui uma fina camada atmosférica, composta principalmente por dióxido de carbono, nitrogênio e argônio. A superfície marciana é rochosa, e por essa razão o planeta é considerado terroso. Sua coloração avermelhada é em decorrência da composição mineral dessas rochas.',
    'O gigante gasoso apresenta belas camadas de nuvens em faixas, um conjunto de anéis finos e empoeirados, a famosa Grande Mancha Vermelha e dezenas de luas variadas.',
    'Por ser um planeta gasoso, é composto principalmente por hidrogênio e hélio. Ou seja, não há superfície sólida. O centro de Saturno é composto por um núcleo denso de rocha, gelo e água. O planeta já foi explorado por cinco missões espaciais.',
    'Formado principalmente por gases e fluidos, Urano não possui uma superfície sólida como a Terra.',
    'Trata-se de um dos quatro gigantes gasosos. É composto essencialmente por gases como hélio, metano, hidrogênio e amônia. Não apresenta superfície sólida, apenas um núcleo muito denso envolto em fluidos e gases.'
]

var infroTerra = [
    { id: "Mercúrio", rotacao: "59 dias", translacao:"88 dias", radius: "2.439,7 km", tempN:"179 º C" }, 
    { id: "Vênus", rotacao: "243 dias", translacao: "225 dias", radius: "6.051,8 km", tempN:"475° C"  }, 
    { id: "Terra", rotacao: "23 horas",  translacao: "365 dias" , radius: "6.371 km", tempN:" 17,15° C"}, // índice 2
    { id: "Marte", rotacao: "24 horas e 37 minutos", translacao: " 687 dias", radius: "3.397 km", tempN:"−55°C" }, 
    { id: "Júpiter", rotacao: "9 horas e 50 minutos", translacao: "12 anos", radius: "71.492 Km", tempN:"-110 °C"  },
    { id: "Saturno", rotacao: "10,7 horas", translacao: "29,4 anos terrestres" , radius: "60.268 Km", tempN:"-178 °C" },
    { id: "Urano", rotacao: "18 horas", translacao: "84 anos" , radius: "25.559 km", tempN:"-195 °C" },
    { id:"Netuno", rotacao: "16 horas",  translacao: "165 anos", radius: "24.764 km", tempN:"-223 ºC" }  
];

function trocarPlaneta(idx){
    if(idx === 1){trocarInformacoesPalneats("Mercúrio", "mercurio", iformacaoPlantas[0], "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",infroTerra[0].rotacao, infroTerra[0].translacao, infroTerra[0].radius, infroTerra[0].tempN);}
    if(idx === 2){trocarInformacoesPalneats("Vênus", "venus", iformacaoPlantas[1], "https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)",infroTerra[1].rotacao, infroTerra[1].translacao, infroTerra[1].radius, infroTerra[1].tempN,infroTerra[1].rotacao, infroTerra[1].translacao, infroTerra[1].radius, infroTerra[1].tempN);}
    if(idx === 3){trocarInformacoesPalneats("Terra", "terra", iformacaoPlantas[2], "https://pt.wikipedia.org/wiki/Terra",infroTerra[2].rotacao, infroTerra[2].translacao, infroTerra[2].radius, infroTerra[3].tempN);}
    if(idx === 4){trocarInformacoesPalneats("Marte", "marte", iformacaoPlantas[3], "https://pt.wikipedia.org/wiki/Marte_(planeta)",infroTerra[3].rotacao, infroTerra[3].translacao, infroTerra[3].radius, infroTerra[3].tempN);}
    if(idx === 5){trocarInformacoesPalneats("Júpiter", "jupter", iformacaoPlantas[4], "https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)",infroTerra[4].rotacao, infroTerra[4].translacao, infroTerra[4].radius, infroTerra[4].tempN);}
    if(idx === 6){trocarInformacoesPalneats("Saturno", "saturno", iformacaoPlantas[5], "https://pt.wikipedia.org/wiki/Saturno_(planeta)",infroTerra[5].rotacao, infroTerra[5].translacao, infroTerra[5].radius, infroTerra[5].tempN);}
    if(idx === 7){trocarInformacoesPalneats("Urano", "urano", iformacaoPlantas[6], "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",infroTerra[6].rotacao, infroTerra[6].translacao, infroTerra[6].radius, infroTerra[6].tempN);}
    if(idx === 8){trocarInformacoesPalneats("Netuno", "netuno", iformacaoPlantas[7], "https://pt.wikipedia.org/wiki/Netuno_(planeta)",infroTerra[7].rotacao, infroTerra[7].translacao, infroTerra[7].radius, infroTerra[7].tempN);}
}

function trocarInformacoesPalneats(nomePlaneta, imgPlaneta, infoPlaneta, wikiPalneta, rotacao, translacao, radius, tempN){
    let planetaNome = document.getElementById("nomePlaneta");
    let planteaImg = document.getElementById("imgPlaneta");
    let planetaInfo = document.getElementById("infoPlaneta");
    let planetaWiki = document.getElementById("wikiPalneta");

    let planetarotacao = document.getElementById("rotacao");
    let planetaTranslacao = document.getElementById("translacao");
    let planetaRadius = document.getElementById("raio");
    let planetaTempM = document.getElementById("tempM");

    planetaNome.textContent = `${nomePlaneta}`
    planetaInfo.textContent = `${infoPlaneta}`
    planteaImg.setAttribute('src', `images/${imgPlaneta}.png`);
    planetaWiki.setAttribute('href', `${wikiPalneta}`);

    planetarotacao.textContent = `${rotacao}`
    planetaTranslacao.textContent = `${translacao}`
    planetaRadius.textContent = `${radius}`
    planetaTempM.textContent = `${tempN}`
}

function trocarVisãoGeral(){
    let planetaNome = document.getElementById("nomePlaneta").innerText;
    let planetaInfo = document.getElementById("infoPlaneta");
    
    if(planetaNome === "Mercúrio"){planetaInfo.textContent = `${iformacaoPlantas[0]}`}
    if(planetaNome === "Vênus"){planetaInfo.textContent = `${iformacaoPlantas[1]}`}
    if(planetaNome === "Terra"){planetaInfo.textContent = `${iformacaoPlantas[2]}`}
    if(planetaNome === "Marte"){planetaInfo.textContent = `${iformacaoPlantas[3]}`}
    if(planetaNome === "Júpiter"){planetaInfo.textContent = `${iformacaoPlantas[4]}`}
    if(planetaNome === "Saturno"){planetaInfo.textContent = `${iformacaoPlantas[5]}`}
    if(planetaNome === "Urano"){planetaInfo.textContent = `${iformacaoPlantas[6]}`}
    if(planetaNome === "Netuno"){planetaInfo.textContent = `${iformacaoPlantas[7]}`}
}

function trocarEstruturaInterna(){
    let planetaNome = document.getElementById("nomePlaneta").innerText;
    let planetaInfo = document.getElementById("infoPlaneta");
    
    if(planetaNome === "Mercúrio"){planetaInfo.textContent = `${estruturaInterna[0]}`}
    if(planetaNome === "Vênus"){planetaInfo.textContent = `${estruturaInterna[1]}`}
    if(planetaNome === "Terra"){planetaInfo.textContent = `${estruturaInterna[2]}`}
    if(planetaNome === "Marte"){planetaInfo.textContent = `${estruturaInterna[3]}`}
    if(planetaNome === "Júpiter"){planetaInfo.textContent = `${estruturaInterna[4]}`}
    if(planetaNome === "Saturno"){planetaInfo.textContent = `${estruturaInterna[5]}`}
    if(planetaNome === "Urano"){planetaInfo.textContent = `${estruturaInterna[6]}`}
    if(planetaNome === "Netuno"){planetaInfo.textContent = `${estruturaInterna[7]}`}
}

function trocarSupeficie(){
    let planetaNome = document.getElementById("nomePlaneta").innerText;
    let planetaInfo = document.getElementById("infoPlaneta");
    
    if(planetaNome === "Mercúrio"){planetaInfo.textContent = `${superficie[0]}`}
    if(planetaNome === "Vênus"){planetaInfo.textContent = `${superficie[1]}`}
    if(planetaNome === "Terra"){planetaInfo.textContent = `${superficie[2]}`}
    if(planetaNome === "Marte"){planetaInfo.textContent = `${superficie[3]}`}
    if(planetaNome === "Júpiter"){planetaInfo.textContent = `${superficie[4]}`}
    if(planetaNome === "Saturno"){planetaInfo.textContent = `${superficie[5]}`}
    if(planetaNome === "Urano"){planetaInfo.textContent = `${superficie[6]}`}
    if(planetaNome === "Netuno"){planetaInfo.textContent = `${superficie[7]}`}
}