// ADD EASTER EGG

function colorRandomise(){
    const hue=Math.floor(Math.random()*360);
    const saturation=Math.floor(Math.random()*100);
    const lightness=Math.floor(Math.random()*100);
    const color=`${hue},${saturation}%,${lightness}%`;
    return color;
}

function bgColor(){
    const elements=document.querySelectorAll('h3, h1, h4');
    body.style['background-color']=`hsl(${colorRandomise()})`;
    elements.forEach((element)=>{
        element.style['color']=`hsl(${colorRandomise()})`;
    })
}

const easteregg=document.querySelector('.easteregg');
easteregg.addEventListener('mouseover',()=>{
    const bgInterval=setInterval(bgColor,1000);
    easteregg.addEventListener('mouseout',()=>{
        clearInterval(bgInterval);
/*         body.style['background-color']=`#4B231B`;
        h1.style['color']="yellow";
        p.style['color']=`#bfa602`; */
    })
});
