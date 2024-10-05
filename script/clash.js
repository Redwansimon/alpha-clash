function paly(){
    gethide('firstsec');
    unhide('play-g');

    
}
function gethide(id){
    const eid = document.getElementById(id);
    eid.classList.add('hidden');
}
function unhide(id){
    const eid = document.getElementById(id);
    eid.classList.remove('hidden')
}