const body=document.querySelector('body');
const header=document.querySelector('.header');
const mainArea=document.querySelector('.mainArea');
const footer=document.querySelector('.footer');
const container=document.querySelector('.container');
const slider=document.querySelector('#slider');
const slidervalue=document.querySelector('#slidervalue');
const canvasSize=[4,8,16,32,64];
const colorPicker=document.querySelector('[data-jscolor]');
const colorPalette=document.querySelector('.colorPalette');
let color= colorPicker.value;

/* // Body HEIGHT and WIDTH
const bodyComputedStyle=window.getComputedStyle(body);
const bodyHeight=bodyComputedStyle.getPropertyValue('height');
const bodyWidth=bodyComputedStyle.getPropertyValue('width'); */