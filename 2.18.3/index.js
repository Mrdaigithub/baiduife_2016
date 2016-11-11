"use strict";

const DOC = document;
let $ = (dom)=> DOC.querySelector(dom);

let dataList = $('#dataList');

let toDoms = (data)=>{
    let li = document.createElement('li');
    li.innerHTML = data;
    return li;
};

$('#insertBtn').addEventListener('click',()=>{
    let inputArr = $('#textarea').value.split(/\n|,|，|`|\s+/g);
    inputArr.forEach((each)=>{
        dataList.appendChild(toDoms(each));
    })
},false);

$('#findBtn').addEventListener('click',()=>{
    let val = $('#findText').value.trim();
    let reg = new RegExp(val);
    for (let i=0, len=dataList.children.length; i<len; i++){
        console.log(reg);
        if (reg.test(dataList.children[i].innerHTML)){
            dataList.children[i].className = 'mark';
        }
    }
},false);
