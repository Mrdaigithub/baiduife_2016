"use strict";

const DOC = document;
let text = DOC.querySelector('#text'),
    unshift = DOC.querySelector('#unshift'),
    push = DOC.querySelector('#push'),
    shift = DOC.querySelector('#shift'),
    pop = DOC.querySelector('#pop'),
    dataList = DOC.querySelector('#dataList');

unshift.addEventListener('click',()=>{
},false);

push.addEventListener('click',()=>{
    let val = text.value.trim();
    if (!!val && /^\d*$/.test(val)){
        let numDom = DOC.createElement('li');
        numDom.innerHTML = val;
        DOC.body.appendChild(numDom);
    }
},false);

shift.addEventListener('click',()=>{

},false);

pop.addEventListener('click',()=>{
    if (dataList.children.length > 0){
        dataList.removeChild(dataList.children[dataList.children.length-1]);
    }
},false);