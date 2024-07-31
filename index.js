document.addEventListener('mousemove',(event)=>{
    const rotateElem = document.querySelector('.card__Container');
    rotateAxisGenerator(event, rotateElem)
})

function rotateAxisGenerator(event, element){
    
    // find mouse cursor . . . .
    let x = event.clientX;
    let y = event.clientY;
    
    // Find the Middle axis point of screen. . .
    let middleX = window.innerWidth/2;
    let middleY = window.innerHeight/2;

    // calculate offset with Middle axis percentage and cut it in short for rotate Degree value (not mandatory). . . . 
    let offsetX = ((x-middleX)/middleX)*50;
    let offsetY = (-1*(y-middleY)/middleY)*50;

    // setProperty custom value in element. . .
    element.style.setProperty('--x-axis', `${offsetY}deg`);
    element.style.setProperty("--y-axis", `${offsetX}deg`);

}