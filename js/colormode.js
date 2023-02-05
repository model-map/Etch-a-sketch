const logoButton=document.getElementById('logo');
const header=document.querySelector('.header');
const topbar=document.querySelector('.topbar');
const footer=document.querySelector('.footer');

let colormode='dark';
logoButton.addEventListener("click",()=>{
    if (colormode=='light'){
        colormode='dark';
        body.style['background-color']='#141518';
        body.style['color']='#fff';
        header.style['background-color']='#333';
        footer.style['background-color']='#333';
        topbar.style['background-color']='#222';
        topbar.style['color']='#fff';
    }
    else{
        colormode='light';
        body.style['background-color']='#D6C5AE';
        body.style['color']='#000';
        header.style['background-color']='#dfd2c0';
        footer.style['background-color']='#dfd2c0';
        topbar.style['background-color']='#C1A885';
    }
})