const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', event => { // event - отслеживает нажатую клавишу на клавиатуре.
   if  (event.code === 'Space') {
    setRandomColors()
   }
})

document.addEventListener('click', event => {
    const type = event.target.dataset.type


    if (type === 'lock') {
       const node = event.target.tagName.toLowerCase() === 'i'
       ? event.target
       : event.target
    }
})


function generateRandomColor() {
      
    
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
         color +=hexCodes[Math.floor(Math.random() * hexCodes.length)]
        
    }
    return '#' + color
}

function setRandomColors() {
    cols.forEach(col => {
        const text = col.querySelector('h2')
        const color = generateRandomColor()


        text.textContent = color
        col.style.background = color
    })
}

setRandomColors()






