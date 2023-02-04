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
    if (children){
        children.forEach((child)=>container.removeChild(child))
    };
}

function createGrid(value){
    for (i=1;i<=value**2;i++){
        const div=document.createElement('div');
        div.classList.add("gridChild");
        container.appendChild(div);
        container.style['grid-template-columns']=`repeat(${value},1fr)`;
    }
}

// COLOURING GRID ELEMENTS
const body=document.querySelector('body');
const gridChildren=document.querySelectorAll('.gridChild');

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

function colorRandomise(){
    const hue=Math.floor(Math.random()*360);
    const saturation=Math.floor(Math.random()*100);
    const lightness=Math.floor(Math.random()*100);
    const color=`${hue},${saturation}%,${lightness}%`;
    return color;
}