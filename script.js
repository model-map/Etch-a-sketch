const container=document.querySelector('.container');
const slider=document.querySelector('#slider');
const slidervalue=document.querySelector('#slidervalue');
const canvasSize=[4,8,16,32,64];
createGrid(4);

slider.addEventListener('change',(e)=>{
    const value=canvasSize[parseInt(e.target.value)];
    slidervalue.textContent=`${value}x${value}`;
    console.log("value: ",value);
    destroyGrid();
    createGrid(value);
});

function destroyGrid(){
    const children=document.querySelectorAll('.gridChild');
    if (children){
        children.forEach((child)=>container.removeChild(child))};
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

