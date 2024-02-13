const classDivs = document.querySelectorAll('.class-div')
// const deal= document.querySelectorAll('.legendCards')
const cardSection = document.getElementById('legendCardSection')
const characterButton = document.getElementById('characterButton')
const shuffleBtn = document.getElementById('shuffleBtn')

shuffleBtn.addEventListener("click", ()=> {
    if(shuffleBtn.classList.contains('d-block')) {
        shuffleBtn.classList.remove('d-block')
        shuffleBtn.classList.add('d-none')
    }
})

console.log(cardSection)

characterButton.addEventListener("click", ()=> {
    if (cardSection.classList.contains('d-none')) {
        cardSection.classList.remove('d-none')
        cardSection.classList.add('d-block')
    }
    // } else if (cardSection.classList.contains('d-none')) {
    //     cardSection.classList.remove('d-none')
    //     cardSection.classList.add('d-block')
    // }

    console.log(cardSection)
})


const playerHand = [

] 

const classType = [
    'support',
    'recon',
    'skirmisher',
    'assault',
    'controller'
]

// Create menu items arr of objects
/*
Ash - Assault
Bangalore - Assault
ballistic - Assault
fuse - assault
mad maggie - assault
horizon - skirmisher
wraith - skirmisher
octane - skirmisher
pathfinder - skirmisher
revenant - skirmisher
valkyrie - skirmisher
bloodhound - recon
seer - recon
crypto - recon
vantage - recon
catalyst - controller
caustic - controller
rampart - controller
wattson - controller
conduit - support
lifeline - support
gibraltar - support
loba - support
mirage -support
newcastle - support


If user has the better deck of legend cards 

user === Win

If user has the worst deck of cards 

user === lose

while playerCard.length <= 3 push random card into array

while playerCard.length === 3 computerCard

splice
*/
let legendCards = [
{
    id: 1,
    class: 'assault',
    character: 'ash',
    desc: 'Incisive Instigator',
    imgUrl: 'ash.jpg',
    value: 4
},

{
    id: 2,
    class: 'assault',
    character: 'bangalore',
    desc: 'Professional Soldier',
    imgUrl: 'bangalore.jpg',
    value: 8
}, 
{
    id: 3,
    class: 'assault',
    character: 'ballistic',
    desc: 'Refined Gunslinger',
    imgUrl: 'ballistic.jpg',
    value: 3
}, 
{
    id: 4,
    class: 'assault',
    character: 'fuse',
    desc: 'Bombastic Explosives Expert',
    imgUrl: 'fuse.jpg',
    value: 6
},
{
    id: 5,
    class: 'assault',
    character: 'mad maggie',
    desc: 'rebel warlord',
    imgUrl: 'mad maggie.jpg',
    value: 4
},
{
    id: 6,
    class: 'skirmisher',
    character: 'horizon',
    desc: 'Gravitational Manipulator',
    imgUrl: 'horizon.jpg',
    value: 9
},
{
    id: 7,
    class: 'skirmisher',
    character: 'octane',
    desc: 'High-Speed Daredevil',
    imgUrl: 'octane.jpg',
    value: 6
},
{
    id: 8,
    class: 'skirmisher',
    character: 'pathfinder',
    desc: 'Forward Scout',
    imgUrl: 'pathfinder.jpg',
    value: 6
},
{
    id: 9,
    class: 'skirmisher',
    character: 'revenant',
    desc: 'Synthetic Nightmare',
    imgUrl: 'revenant.jpg',
    value: 6
},
{
    id: 10,
    class: 'skirmisher',
    character: 'Valkyrie',
    desc: 'Winged Avenger',
    imgUrl: 'valkyrie.jpg',
    value: 7
},
{
    id: 11,
    class: 'skirmisher',
    character: 'wraith',
    desc: 'Interdimensional Skirmisher',
    imgUrl: 'wraith.jpg',
    value: 6
},
{
    id: 12,
    class: 'recon',
    character: 'bloodhound',
    desc: 'Technological Tracker',
    imgUrl: 'bloodhound.jpg',
    value: 7
},
{
    id: 13,
    class: 'recon',
    character: 'crypto',
    desc: 'Surveillance Expert',
    imgUrl: 'crypto.jpg',
    value: 5
},
{
    id: 14,
    class: 'recon',
    character: 'seer',
    desc: 'Ambush Artist',
    imgUrl: 'seer.jpg',
    value: 2
},
{
    id: 16,
    class: 'recon',
    character: 'vantage',
    desc: 'Sniper Savant',
    imgUrl: 'vantage.jpg',
    value: 3
},
{
    id: 17,
    class: 'controller',
    character: 'catalyst',
    desc: 'Defense Conjurer',
    imgUrl: 'catalyst.jpg',
    value: 8
},

{
    id: 18,
    class: 'controller',
    character: 'caustic',
    desc: 'Toxic Trapper',
    imgUrl: 'caustic.jpg',
    value: 5
},
{
    id: 19,
    class: 'controller',
    character: 'rampart',
    desc: 'Amped Modder',
    imgUrl: 'rampart.jpg',
    value: 4
},
{
    id: 20,
    class: 'controller',
    character: 'wattson',
    desc: 'Static Defender',
    imgUrl: 'wattson.jpg',
    value: 7
},
{
    id: 21,
    class: 'support',
    character: 'conduit',
    desc: 'Shield Healer',
    imgUrl: 'conduit.jpg',
    value: 9
},
{
    id: 22,
    class: 'support',
    character: 'gibraltar',
    desc: 'Shielded Fortress',
    imgUrl: 'gibraltar.jpg',
    value: 5
},
{
    id: 23,
    class: 'support',
    character: 'lifeline',
    desc: 'Combat Medic',
    imgUrl: 'lifeline.jpg',
    value: 3
},
{
    id: 24,
    class: 'support',
    character: 'loba',
    desc: 'Translocating Thief',
    imgUrl: 'loba.jpg',
    value: 6
},
{
    id: 25,
    class: 'support',
    character: 'mirage',
    desc: 'Holographic Trickster',
    imgUrl: 'mirage.png',
    value: 1
},
{
    id: 26,
    class: 'support',
    character: 'newcastle',
    desc: 'Heroic Defender',
    imgUrl: 'newcastle.jpg',
    value: 3
},
]

// init () {

// }

const assaRow = document.getElementById("assaultRow")
const recRow = document.getElementById("reconRow")
const suppRow = document.getElementById("supportRow")
const skirRow = document.getElementById("skirmisherRow")
const contRow = document.getElementById("controllerRow")

legendCards.forEach(card => {
    const column = document.createElement('div')
    column.classList.add("col-md-3")
    const legend = document.createElement('div')
    legend.classList.add("legend", "h-100")
    legend.innerHTML = `
    <img src="images/${card.imgUrl}" class="img-fluid legend-image card-img-top" alt="${card.desc}">
        <div class="card-body">
            <h3 class="card-title text-capitalize">${card.character}</h3>
            <h4 class="card-subtitle text-capitalize">${card.class}</h4>
            <p class="card-text text-capitalize">${card.desc}</p>
        </div>
    <footer class="card-footer">
        </div>
    </footer>
    `

    column.appendChild(legend);

    // console.log(column)

    switch(card.class) {
        case 'assault':
            assaRow.appendChild(column)
            break;
        case 'recon':
            recRow.appendChild(column)
            break;
        case 'support':
            suppRow.appendChild(column)
            break;
        case 'skirmisher':
            skirRow.appendChild(column)
            break;
        case 'controller':
            contRow.appendChild(column)
            break;
        default:
            console.log('Error: legend type not listed')
            break;
    }
})

const shuffle =(arr)=> Math.floor(Math.random() * arr.length)

const dealCards =(arr)=> {
    // console.log(arr[shuffle(arr)])
}

dealCards(legendCards)

for (let i = 0; i <= 2; i++) {
    // console.log(legendCards[i])
}

const getPlayerHand =()=> {
    // console.log(playerHand, legendCards)
    // if (playerHand.length <= 3) [
        
    // ]
}

getPlayerHand()



// .forEach(shuffle => {
//     dealCards(Math.floor(Math.random))

//     console.log(shuffle)
// })