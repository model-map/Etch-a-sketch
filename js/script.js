createGrid(4); // Create initial grid when page loads
slider.value=0;

function createGrid(value){
    container.style['grid-template-columns']=`repeat(${value},1fr)`;
    for (i=1;i<=value**2;i++){
        const div=document.createElement('div');
        div.classList.add('gridChild');
        container.appendChild(div);
    }
    colorGrid();
}

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

// COLOR PICKER
colorPicker.addEventListener('change',()=>{
    color=colorPicker.value;
})

// COLOURING GRID ELEMENTS
function colorGrid(){
    let mouseButton=null;
    gridChildren=document.querySelectorAll('.gridChild');

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

    });
}