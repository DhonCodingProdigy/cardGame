const classDivs = document.querySelectorAll('.class-div')
// const deal= document.querySelectorAll('.legendCards')
const cardSection = document.getElementById('legendCardSection')
const characterButton = document.getElementById('characterButton')
const playNow = document.getElementById('playNow')
const playNowSection = document.getElementById('gameBoard')

playNow.addEventListener("click", ()=> {
    if(playNow.classList.contains('d-block')) {
        playNow.classList.remove('d-block')
        playNow.classList.add('d-none')
    }
})

// console.log(cardSection)

const startGame = document.getElementById('startGame')




// Character Button Click Element
characterButton.addEventListener("click", ()=> {
    if (cardSection.classList.contains('d-none')) {
        cardSection.classList.remove('d-none')
        cardSection.classList.add('d-block')
    }
    if (playNow.classList.contains('d-block')) {
        playNow.classList.remove('d-block')
        playNow.classList.add('d-none')
    }
    // } else if (cardSection.classList.contains('d-none')) {
    //     cardSection.classList.remove('d-none')
    //     cardSection.classList.add('d-block')
    // }

    // console.log(cardSection)
})


// Play Now Button Click Element
playNow.addEventListener('click', ()=> {
    if (playNowSection.classList.contains('d-none')) {
        playNowSection.classList.remove('d-none')
        playNowSection.classList.add('d-block')
    }
})

// Empty Player Array
const playerHand = [] 

// Empty Computer/AI Array
const computerHand = []

// Different Character Class That Has a Different Impact on the Game
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

// Legend Cards 
let legendCards = [
{
    id: 1,
    class: 'assault',
    character: 'ash',
    desc: 'Incisive Instigator',
    imgUrl: '../images/ash.jpg',
    value: 4
},

{
    id: 2,
    class: 'assault',
    character: 'bangalore',
    desc: 'Professional Soldier',
    imgUrl: '../images/bangalore.jpg',
    value: 8
}, 
{
    id: 3,
    class: 'assault',
    character: 'ballistic',
    desc: 'Refined Gunslinger',
    imgUrl: '../images/ballistic.jpg',
    value: 3
}, 
{
    id: 4,
    class: 'assault',
    character: 'fuse',
    desc: 'Bombastic Explosives Expert',
    imgUrl: '../images/fuse.jpg',
    value: 6
},
{
    id: 5,
    class: 'assault',
    character: 'madmaggie',
    desc: 'rebel warlord',
    imgUrl: '../images/mad maggie.jpg',
    value: 4
},
{
    id: 6,
    class: 'skirmisher',
    character: 'horizon',
    desc: 'Gravitational Manipulator',
    imgUrl: '../images/horizon.jpg',
    value: 9
},
{
    id: 7,
    class: 'skirmisher',
    character: 'octane',
    desc: 'High-Speed Daredevil',
    imgUrl: '../images/octane.jpg',
    value: 6
},
{
    id: 8,
    class: 'skirmisher',
    character: 'pathfinder',
    desc: 'Forward Scout',
    imgUrl: '../images/pathfinder.jpg',
    value: 6
},
{
    id: 9,
    class: 'skirmisher',
    character: 'revenant',
    desc: 'Synthetic Nightmare',
    imgUrl: '../images/revenant.jpg',
    value: 6
},
{
    id: 10,
    class: 'skirmisher',
    character: 'Valkyrie',
    desc: 'Winged Avenger',
    imgUrl: '../images/valkyrie.jpg',
    value: 7
},
{
    id: 11,
    class: 'skirmisher',
    character: 'wraith',
    desc: 'Interdimensional Skirmisher',
    imgUrl: '../images/wraith.jpg',
    value: 6
},
{
    id: 12,
    class: 'recon',
    character: 'bloodhound',
    desc: 'Technological Tracker',
    imgUrl: '../images/bloodhound.jpg',
    value: 7
},
{
    id: 13,
    class: 'recon',
    character: 'crypto',
    desc: 'Surveillance Expert',
    imgUrl: '../images/crypto.jpg',
    value: 5
},
{
    id: 14,
    class: 'recon',
    character: 'seer',
    desc: 'Ambush Artist',
    imgUrl: '../images/seer.jpg',
    value: 2
},
{
    id: 16,
    class: 'recon',
    character: 'vantage',
    desc: 'Sniper Savant',
    imgUrl: '../images/vantage.jpg',
    value: 3
},
{
    id: 17,
    class: 'controller',
    character: 'catalyst',
    desc: 'Defense Conjurer',
    imgUrl: '../images/catalyst.jpg',
    value: 8
},

{
    id: 18,
    class: 'controller',
    character: 'caustic',
    desc: 'Toxic Trapper',
    imgUrl: '../images/caustic.jpg',
    value: 5
},
{
    id: 19,
    class: 'controller',
    character: 'rampart',
    desc: 'Amped Modder',
    imgUrl: '../images/rampart.jpg',
    value: 4
},
{
    id: 20,
    class: 'controller',
    character: 'wattson',
    desc: 'Static Defender',
    imgUrl: '../images/wattson.jpg',
    value: 7
},
{
    id: 21,
    class: 'support',
    character: 'conduit',
    desc: 'Shield Healer',
    imgUrl: '../images/conduit.jpg',
    value: 9
},
{
    id: 22,
    class: 'support',
    character: 'gibraltar',
    desc: 'Shielded Fortress',
    imgUrl: '../images/gibraltar.jpg',
    value: 5
},
{
    id: 23,
    class: 'support',
    character: 'lifeline',
    desc: 'Combat Medic',
    imgUrl: '../images/lifeline.jpg',
    value: 3
},
{
    id: 24,
    class: 'support',
    character: 'loba',
    desc: 'Translocating Thief',
    imgUrl: '../images/loba.jpg',
    value: 6
},
{
    id: 25,
    class: 'support',
    character: 'mirage',
    desc: 'Holographic Trickster',
    imgUrl: '../images/mirage.png',
    value: 1
},
{
    id: 26,
    class: 'support',
    character: 'newcastle',
    desc: 'Heroic Defender',
    imgUrl: '../images/newcastle.jpg',
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

// InnerHTML for the different cards in the array
legendCards.forEach(card => {
    const column = document.createElement('div')
    column.classList.add("col-md-2", 'm-2')
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

    // Switch HTML input type for the legend classes to categorize the different legends in the array and append them to the correct row
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

// shuffle method for card decks
const shuffle =(arr)=> Math.floor(Math.random() * arr.length)

// console.log(shuffle(legendCards))

// const dealCards =(arr)=> {
//     console.log(arr[shuffle(arr)])
// }


const displayHands =(hands, user)=> {
    // console.log(hands)
    hands.forEach(hand => {
        // build column
        const col = document.createElement('div')
        col.classList.add('col-md-4', 'hand')

        // build card 
        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.setAttribute('src', hand.imgUrl)

        const legend = document.createElement('h2')
        legend.classList.add('legend', hand.character)
        legend.innerText = hand.character

        card.appendChild(img)
        card.appendChild(legend)
        col.appendChild(card)


        // why am I getting 6 duplicate arrays instead of 2 random arrays 
        if (user === 'player') {
            const playerHandDiv = document.getElementById('playerHandDiv')
            playerHandDiv.appendChild(col)
        } else if (user === 'computer') {
            const computerHandDiv = document.getElementById('computerHandDiv')
            computerHandDiv.appendChild(col)
        }

    })
}



const getPlayerHand =(arr)=> {
    // console.log(arr)
    for (let i = 0; i <= 2; i++) {
        playerHand.push(arr[shuffle(arr)])
        displayHands(playerHand, 'player')
        console.log(playerHand, i)
    }

}
getPlayerHand(legendCards)


const getComputerHand =(arr)=> {
    for (let i = 0; i <= 2; i++) {
        computerHand.push(arr[shuffle(arr)])
        displayHands(computerHand, 'computer')
    }
}
getComputerHand(legendCards)

console.log(computerHand)

/* makeCards

array.forEach

call this function in both getHand functions

gameBoardRow.appendChild(card)


*/

// legendCards.forEach(card => {
//     return legendCards
// })




