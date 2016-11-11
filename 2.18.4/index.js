"use strict";

const DOC = document;
let $ = (dom)=> DOC.querySelector(dom);

let noRepeat = dataArr=>new Set(dataArr);

let dealDataArr = (dataArr)=>{
    dataArr = noRepeat(dataArr);
    if (dataArr.length > 10){
        dataArr = dataArr.shift();
    }
    for (let i=0, len=dataArr.length; i<len; i++){
        dataArr[i] = dataArr[i].trim();
    }
    return dataArr;
};

let render = (dataArr, containerDom)=>{
    let htmlStr = '';
    dataArr.forEach((each)=>{
        htmlStr += `<li>${each}</li>`;
    });
    containerDom.innerHTML = htmlStr;
    return htmlStr;
};

$('#tag').addEventListener('click',()=>{
    let inputArr = $('#tagText').value.trim().split(/\n|,|，|`|\s+/g);
    render(dealDataArr(inputArr), $('#tagList'));
},false);
$('#tagList').addEventListener('mouseover',(event)=>{
    let e = window.event || event;
    if (e.target.nodeName === 'LI'){
        e.target.innerHTML = `remove ${e.target.innerHTML}`;
    }
},false);
$('#tagList').addEventListener('mouseout',(event)=>{
    let e = window.event || event;
    if (e.target.nodeName === 'LI' && /remove/.test(e.target.innerHTML)){
        e.target.innerHTML = e.target.innerHTML.slice(7);
    }
},false);
$('#tagList').addEventListener('click',(event)=>{
    let e = window.event || event;
    if (e.target.nodeName === 'LI'){
        $('#tagList').removeChild(e.target);
    }
},false);

$('#favoriteBtn').addEventListener('click',()=>{
    let inputArr = $('#favoriteText').value.trim().split(/\n|,|，|`|\s+/g);
    render(dealDataArr(inputArr), $('#favoriteList'));
},false);
$('#favoriteList').addEventListener('mouseover',(event)=>{
    let e = window.event || event;
    if (e.target.nodeName === 'LI'){
        e.target.innerHTML = `remove ${e.target.innerHTML}`;
    }
},false);
$('#favoriteList').addEventListener('mouseout',(event)=>{
    let e = window.event || event;
    if (e.target.nodeName === 'LI' && /remove/.test(e.target.innerHTML)){
        e.target.innerHTML = e.target.innerHTML.slice(7);
    }
},false);
$('#favoriteList').addEventListener('click',(event)=>{
    let e = window.event || event;
    if (e.target.nodeName === 'LI'){
        $('#favoriteList').removeChild(e.target);
    }
},false);
