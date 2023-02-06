const logoButton=document.getElementById('logo');
const header=document.querySelector('.header');
const topbar=document.querySelector('.topbar');
const footer=document.querySelector('.footer');
const gridBoxes=document.querySelectorAll('.gridChild');
const githubLink=document.getElementById('githubLink');
const githubLogo=document.getElementById('githubLogo');
const sliderText=document.getElementById('slidervalue');

let colormode='light';
logoButton.addEventListener("click",()=>{
    if (colormode=='dark'){ // LIGHT MODE SETTINGS
        colormode='light';
        body.style['background-color']='#F1ECE4';
        body.style['color']='#000';
        header.style['background-color']='#dfd2c0';
        footer.style['background-color']='#dfd2c0';
        topbar.style['background-color']='#C1A885';
/*         container.style['border']=`1px solid #00000075`;
        footer.style['color']=`#000`;
        gridBoxes.forEach((box)=>{
            box.style['border']=`1px solid #00000075`;
        }) */
        header.style['border']=`1px solid #00000050`;
        footer.style['border']=`1px solid #00000050`;
        topbar.style['border-bottom']=`1px solid #00000050`;
        githubLink.style['color']=`#000`;
        sliderText.style['color']=`#000`;
        githubLogo.style['filter']="invert(0)";
    }
    else{ // DARK MODE SETTINGS
        colormode='dark';

        body.style['background-color']='#141518';
        body.style['color']='#fff';

        header.style['background-color']='#333';
        footer.style['background-color']='#333';
        topbar.style['background-color']='#222';

        topbar.style['color']='#fff';
        footer.style['color']=`#fff`;
    /*         container.style['border']=`1px solid #ffffff75`;
            gridBoxes.forEach((box)=>{
                box.style['border']=`1px solid #00000075`;
            }) */
        githubLink.style['color']=`#fff`;
        githubLogo.style['filter']="invert(1)";
        sliderText.style['color']=`#fff`;
    }

})