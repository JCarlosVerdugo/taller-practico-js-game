/**
 * @type {HTMLCanvasElement}
 */

const canvas = document.querySelector('#game');
const game =  canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame() {
    // game.fillRect(100, 25, 100, 100);
    // game.clearRect(125, 50, 50, 50)
    // game.fillText('Platzi', 133, 78)

    // game.font = '25px Verdana';
    // game.fillStyle = 'purple';
    // game.textAlign = 'center';
    // game.fillText('Platzi', 25, 25);

    let canvasSize;

    if ( window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementSize = (canvasSize / 10) - 1;

    game.font =  elementSize + 'px Verdana';
    game.textAlign = '';

    for (let i = 0; i < 10; i++) {
        for (let z = 0; z < 10; z++) {
            game.fillText(emojis['X'], elementSize * i, (elementSize * z) + 55)
            
        }
    }


    // window.innerHeight
    // window.innerWidth
    
}