listaFratelli = [
    'Leodori Francesco',
    'Leodori Claudia',
    'Leodori Niccolo',
    'Leodori Rosa',
    'Leodori Filippo',
    'Cianciola Nicola', 
    'Cianciola Mariangela', 
    'Cianciola Jonathan', 
    'DeGiglio Domenico', 
    'DeGiglio Nicla',
    'Meme Gaetana',
    'Meme Massimo', 
    'Ghigi AnnaPaola',
    'DeBustis Adriana',
    'Bellini Daniela',
    'Olcese Ezio',
    'Olcese Giuseppina',
    'Ramaccia Giorgia',
    'Tomassini Ennia',
    'Sollazzi Cristina',
    'Sollazzi Paolo', 
    'Sollazzi Noah',
    'Pica Raffaella',
    'Pica Cristian',
    'Sedmak Daniel',
    'Cadoni Tiziana',
    'Cipparrone Loredana',
    'DeBrito Osvaldo',
    'Angelini Rocco',
    'Angelini Maria',
    'Angelini Nazzareno',
    'Caporuscio Antonio',
    'Caporuscio Sesta',
    'Caporuscio Gabriele',
    'Caporuscio Maria',
    'Cortellesi Scolastica',
    'Cortellesi Giancarlo',
    'Cortellesi Sabrina',
    'Amprino Valter',
    'Amprino Daniela',
    'Bortune Leonardo',
    'Scosta Rita',
    'Lozzi Antonella',
    'Conte Giuseppe',
    'Conte Enza',
    'Mangiante Miriam',
    'Perrini Rita',
    'Rocchetta Angela',
    'Sollazzi RosAnna',
    'Mikhail Essam',
    'Mikhail Daniela',
    'Mikhail Fabio',
    'Mikhail Leonardo',
    'Altarocca Silvio',
    'Fabbrini Maria',
    'Abate Nunzia',
    'Farina Andrea',
    'Farina Elisa',
    'Farina Daniela',
    'Aiello Barbara',
    'Cuzzocrea Loredana',
    'Hurtado Karina',
    'Hurtado Camilla',
    'Gallone AnnaMaria',
    'Rossi Nicoletta',
    'Rossi Matteo',
    'Rajei Amina',
    'Rajei Jasmine',
    'Giovannini Rita',
    'Cristofani Antonio',
    'Cristofani Angela',
    'Cucci Donatella',
    'Piccolo Gabriella',
    'Angeletti Italo',
    'Proietti Annalisa',
    'Gagliarducci Simone',
    'Gagliarducci Bruna',
    'Gagliarducci Pauline',
    'Martucci Mafalda?',
    'Liliana',
    'Fernandez Gloria',
    'Oliva Antonella',
    'Sita',
    'Montiero Lidia',
    'Marco Liberati'
]
let conteggio = 0;
listaFratelli.sort();

let buttonSalva = document.querySelector('.salva')

let lista = document.querySelector('.lista');

for (let i = 0; i < listaFratelli.length; i++){
    let element = document.createElement('p');
    element.setAttribute('style', "display: inline-block; margin: 0")
    element.innerHTML = listaFratelli[i]
    var checkBox = document.createElement('input');
    checkBox.classList.add('checkbox')
    checkBox.type = 'checkbox';
    let listItem = document.createElement('li')
    listItem.classList.add('listItem')
    listItem.setAttribute('style',"list-style-type: none")
    listItem.appendChild(element)
    listItem.appendChild(checkBox)
    lista.appendChild(listItem);
}




const allCheckBox = document.querySelectorAll("input");

function prova(e) {
    if (e.target.checked == true) {
        setTimeout(() => {
            lista.appendChild(e.target.parentNode)
            conteggio++
            display.innerText = conteggio
        },300)
    } else {
        conteggio--
        display.innerHTML = conteggio
    }
}

function addNumber(e) {
    
    conteggio++
    display.innerText = conteggio
};


allCheckBox.forEach(elem => elem.addEventListener("change",prova));
let display = document.querySelector('.display');


let tastoAggiungi = document.querySelector(".button")
tastoAggiungi.addEventListener("click", addNumber)

function prova1() {
    let quelliAssenti = document.querySelectorAll('.listItem');
    let assenti = []
    quelliAssenti.forEach(elem => {
        // console.log(elem.lastChild.checked)
        if (!elem.lastChild.checked) {
            assenti.push(elem.firstChild.innerText); 
        }
    })
    let date = new Date().toLocaleDateString('it-IT');
    
    localStorage.setItem(date, JSON.stringify({'assenti': assenti, [date]: conteggio}))
    alert(localStorage.getItem(date))
}

buttonSalva.addEventListener('click', prova1)