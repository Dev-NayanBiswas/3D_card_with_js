document.addEventListener("DOMContentLoaded",(e)=>{
    const card = document.querySelector(".card__body");
    const cardImage = document.querySelector(".card__image");
    console.log(cardImage);


    card.addEventListener("mousemove", function(e){
        
        //% getting the mouse cursor position

        const rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        // console.log(x);
        let y = e.clientY - rect.top;
        // console.log(y);


        //*** getting the center.......
        let xCenter = rect.width / 2;
        // console.log(xCenter);
        let yCenter = rect.width / 2;
        // let yCenter = rect.height/2;
        // console.log(yCenter);


        // !! getting offset values

        let xOffset = (x-xCenter) / xCenter;
        let yOffset = (y - yCenter) / yCenter;

        let rotateX = yOffset * 25;
        let rotateY = xOffset * 25;
        // console.log(rotateX, rotateY);

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        // console.log(card.style.transform);

        let imageRotateX = yOffset * 30;
        let imageRotateY = xOffset * 30;
        // console.log(imageRotateX, imageRotateY);
   

        cardImage.style.transform = `rotateX(${imageRotateX}deg) rotateY(${imageRotateY}deg) translateZ(150px)`;
        // console.log(Rotate);
    })

    card.addEventListener("mouseleave", ()=>{
        card.style.transform=`rotateX(0) rotateY(0)`;
        cardImage.style.transform=`rotateX(0) rotateY(0) translateZ(0)`
    })
})

