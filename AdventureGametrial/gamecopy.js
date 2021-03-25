const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame(){
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.option.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })

}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'Welcome to Your life! What path will you choose?',
        option: [
            {
               text: 'Street Boxer',
               setState: { streetBoxer: true}, 
               nextText: 2
            },
            {
                text: 'Pro Boxer',
                setState: { proBoxer: true},
                nextText: 8
            }
        ]
    },
    {
        id: 2,
        text: 'You are taken to the streets waking as you find yourself surround by three men who intentions are to hurt you what will you use?',
        option: [
            {
                text: 'Tactics',
                requiredState: (currentState) => currentState.streetBoxer,
                setState: { streetBoxer: false, tactics: true},
                nextText: 3
                
            },
            {
                text: 'Strength',
                nextText: 6
            },
        ]
    },
    {
        id: 3,
        text: 'As your opponents lay defeated and the last one running for his life in cowardice anger, you are approached by a bareknuckle boxer ready to take you in what do you do?',
        option: [
            {
            text: 'Accept',
            requiredState: (currentState) => currentState.tactics,
            setState: {tactics: false, fighter: true },
            nextText: 4
            },
            {
            text: 'Refuse',
            nextText: 7
            },
        ]
    },
    {
        id: 4,
        text: 'knocks you out and you wake laying in your bed realizing this was a dream, but as you wake one thing stayed with you from that dream and that was the unexplainable desire to take up bareknuckle boxing',
        option: [
            {
                text: 'Reflect',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: 'End',
        option:[
            {
                text: 'Start Over',
                nextText: 1
            }
        ]
        
    },
    {
        id: 6,
        text: 'You decide to go all out and use all your might to knock the first guy out leaving you exhausted, winded, and worse defenseless. Leaving you to be curb stomped by the other two opponents',
        option:[
            {
                text: 'Start Over',
                nextText: 1
            }
        ]
    },
    {
        id: 7,
        text: 'He walks away with a look of disgust leaving you there towering over the men you previously knocked out, as you realize flaunting and feeling powerful with your power of being able to knock both of those men clean out. You hear foot steps approaching you at an alarming fast rate and as you look up you see the coward approach you but this time he has a gun leaving you riddles with holes and only blood to run.',
        option:[
            {
                text: 'Start Over',
                nextText: 1
            }
        ]
    },
    {
        id: 8,
        text: 'you open your eyes to a blinding light, your vision begins to adapt. Before you are fully coherent you are shook aggressively by your ringside coach informing you that you are to far behind in points and you can only win by KO what will you do?',
        option:[
            {
                text: 'Listen to Advice of coach',
                requiredState: (currentState) => currentState.proBoxer,
                setState: {proBoxer: false},
                nextText: 9
            },
            {
                text: 'Go all out and unleash your potential',
                requiredState: (currentState) => currentState.proBoxer,
                setState: {proBoxer: true},
                nextText: 10
            }

        ]
    },
    {
        id: 9,
        text: ' you take heed of the advice that you coach has provided you and you approach your opponent thinking constantly on what your coach advised but as your opponent closes in and hits you clean with a jab you lose all focus. Before you realize he is coming back with another jab to the body leading to a devastating uppercut rendering you unconscious',
        option:[
            {
                text:'Start Over',
                nextText: 1
            }
        ]
    },
    {
        id: 10,
        text: 'you respectfully move your coach to the side and assure him that you got this with the confidence of 10 kings. You approach your opponent as his jab comes your reflect and loos style allows you to easily dodge the jab creating a once and a life time chance of a knockout counter right hook, and you take full advantage knocking the mouth piece out of the opponent leaving you victorious! You have become the top contender for the belt, and the current Champion awaits. But you have two options of fighting the champ or selecting an under card match what will you do?',
        option:[
            {
                text: 'Under Card',
                nextText: 11
            },
            {
                text: 'Champ',
                nextText: 12
            }
        ]
    },
    {
        id: 11,
        text: 'you choose wisely on choosing an undercard not overestimating your abilities but your peers look to you slightly more negatively. But you look past that understanding your capabilities and strengths. You begin the understand as you wake knowing  the importance of knowing ones self',
        option:[
            {
                text: 'Reflect',
                nextText: 5
            }
        ]
    },
    {
        id:12,
        text: 'You decide to head into the den of the champion the currents kings abode. Unaware that his abode will be the doom to your overconfidence for this confidence has lead you astray and not realizing that you have so much more to learn before you step into the ring with kings for you are still a prince growing and day dreaming as the king now towers over your mouth full of canvas muttering “I wasn’t ready',
        option:[
            {
                text: 'Start Over',
                nextText: 1
            }
        ]
    }
]

startGame()