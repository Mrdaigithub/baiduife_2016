"use strict";

const DOC = document;

let $ = node => DOC.querySelector(node),
    $$ = nodes => DOC.querySelectorAll(nodes);

let root = $('#root'),
    text = $('#text');

let hasClass = (node, toFindClassName) => {
    let classNames = node.className.split(' ');
    for (let i=0,len=classNames.length; i<len; ++i){
        if (classNames[i] === toFindClassName) return true
    }
    return false;
};

root.addEventListener('click',e=>{
    if (hasClass(e.target, 'rmBtn')) e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    if (hasClass(e.target, 'addBtn')){
        let val = text.value.trim();
        if (val === '') {
            console.error('write anything to the input bar');
            return false;
        }
        if (e.target.parentNode.parentNode.getElementsByTagName('ul').length === 0){
            let ul = document.createElement('ul');
            e.target.parentNode.parentNode.appendChild(ul);
        }
        let li = document.createElement('li');
        li.className = 'item';
        li.innerHTML = `<div>${val} <div class="deal"><span class="btn btn-success addBtn">+</span><span class="btn btn-danger rmBtn">x</span></div></div>`;
        console.log(e.target.parentNode.parentNode.getElementsByTagName('ul'));
        e.target.parentNode.parentNode.getElementsByTagName('ul')[0].appendChild(li);
    }
},false);

root.addEventListener('mouseover',e=>{
    if (e.target === $('.item > div')){
        console.log(e.target);
    }
},false);
