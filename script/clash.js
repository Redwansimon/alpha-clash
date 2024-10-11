

function edu() {
    console.log(656);

    gethide('firstsec');  // Hides the first section
    unhide('play-g');     // Unhides the play section
    continueGame();       // Starts the game loop
}
function keyPressByUser(event){
    const pressedkey = event.key;
    const displayed = document.getElementById('screentext').innerText.toLowerCase();
    console.log(displayed);
    if (pressedkey === displayed){
        const newnnumber = document.getElementById('lefiside');
        newnnumber.innerText++;
        removeBacground(pressedkey);
        continueGame();

    }
    else{
       const neww = document.getElementById('rightside');
       neww.innerText--;
    }


}
document.addEventListener('keypress',keyPressByUser);

function continueGame() {
    const alphabet = getalphabet();  // Get a random alphabet letter
    console.log(alphabet); 

    // Set background color in keyboard for the random letter
    setBackground(alphabet);
    showonscreen (alphabet);
}
function showonscreen(p){
    document.getElementById('screentext').innerText=p;
}

function removeBacground(elementid){
    document.getElementById(elementid).classList.remove('bg-orange-400');
}
function setBackground(elementid) {

    const element = document.getElementById(elementid);
    element.classList.add('bg-orange-400');
}


function getalphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // Generating a random number between 0 and 25
    const random = Math.random() * 25;
    const number = Math.round(random);

    const alphabet = alphabets[number];
    return alphabet;
}

function gethide(id) {
    const eid = document.getElementById(id);
    if (eid) {
        eid.classList.add('hidden');
    } else {
        console.error(`Element with id ${id} not found`);
    }
}

function unhide(id) {
    const eid = document.getElementById(id);
    if (eid) {
        eid.classList.remove('hidden');
    } else {
        console.error(`Element with id ${id} not found`);
    }
}
