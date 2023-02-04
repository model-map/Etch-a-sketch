const container=document.querySelector('.container');
const slider=document.querySelector('#slider');
const slidervalue=document.querySelector('#slidervalue');
const canvasSize=[4,8,16,32,64];

slider.addEventListener('change',(e)=>{
    const value=canvasSize[parseInt(e.target.value)];
    slidervalue.textContent=`${value}x${value}`;
    
});
