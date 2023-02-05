const container=document.querySelector('.container');
const slider=document.querySelector('#slider');
const slidervalue=document.querySelector('#slidervalue');
const canvasSize=[4,8,16,32,64];

createGrid(4);
slider.value=0;

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

// COLOR PICKER

const colorPicker=document.querySelector('[data-jscolor]');
let color= colorPicker.value;

colorPicker.addEventListener('change',()=>{
    color=colorPicker.value;
})

// COLOURING GRID ELEMENTS
const body=document.querySelector('body');

function colorGrid(){
    let mouseButton=null;
    gridChildren=document.querySelectorAll('.gridChild');
    gridChildren.forEach((child)=>{
    
        child.addEventListener('mousedown',(e)=>{
            mouseButton=e.button;
            colorPixel(child,mouseButton);
        });

        child.addEventListener('mouseup',(e)=>{
            mouseButton=null;
        });

        child.addEventListener('mouseover',(e)=>{
            child.style['cursor']="cell";
            if (mouseButton!=null) colorPixel(child,mouseButton);
        });


        function colorPixel(child,mouseButton){
            switch(mouseButton){
                case null:
                    break;
                case 0:
                    child.classList.add("gridChild--colored");
                    child.style['background-color']=`${color}`;
                    break;
    
                case 2:
                    child.classList.remove("gridChild--colored");
                    child.style['background-color']=`${body.style['background-color']}`;
                    break;
            }
        }

        child.addEventListener('mouseup',()=>trigger=false);

    });
}

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
