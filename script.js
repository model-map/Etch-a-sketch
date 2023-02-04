const container=document.querySelector('.container');
const slider=document.querySelector('#slider');
const slidervalue=document.querySelector('#slidervalue');
const canvasSize=[4,8,16,32,64];
createGrid(4);

slider.addEventListener('change',(e)=>{
    const value=canvasSize[parseInt(e.target.value)];
    slidervalue.textContent=`${value}x${value}`;
    destroyGrid();
    createGrid(value);
});

function destroyGrid(){
    const children=document.querySelectorAll('.gridChild');
    children.forEach((child)=>container.removeChild(child));
}

function createGrid(value){
    container.style['grid-template-columns']=`repeat(${value},1fr)`;
    for (i=1;i<=value**2;i++){
        const div=document.createElement('div');
        div.classList.add('gridChild');
        container.appendChild(div);
    }
    colorGrid();
}

// COLOURING GRID ELEMENTS
const body=document.querySelector('body');

function colorGrid(){
    gridChildren=document.querySelectorAll('.gridChild');
    gridChildren.forEach((child)=>{
        child.addEventListener('mouseover',()=>{
            child.style['cursor']="pointer";
        });
    
        child.addEventListener('mouseup',(e)=>{
            console.log("BUTTON ",e.button);
            switch(e.button){
                case 0:
                    child.classList.add("gridChild--colored");
                    child.style['background-color']=`hsl(${colorRandomise()})`;
                    break;
    
                case 2:
                    child.classList.remove("gridChild--colored");
                    child.style['background-color']=`${body.style['background-color']}`;
                    break;
            }
        })
    
    })
}

function colorRandomise(){
    const hue=Math.floor(Math.random()*360);
    const saturation=Math.floor(Math.random()*100);
    const lightness=Math.floor(Math.random()*100);
    const color=`${hue},${saturation}%,${lightness}%`;
    return color;
}

// ADD EASTER EGG
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
