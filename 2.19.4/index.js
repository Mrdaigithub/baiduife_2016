"use strict";

const DOC = document;

let $ = node => DOC.querySelector(node),
    $$ = nodes => DOC.querySelectorAll(nodes);

let root = $('#root'),
    text = $('#text'),
    checked = null,
    addInput = $('#addInput');

let hasClass = (node, toFindClassName) => {
    let classNames = node.className.split(' ');
    for (let i = 0, len = classNames.length; i < len; ++i) {
        if (classNames[i] === toFindClassName) return true
    }
    return false;
};
let rmClass = (nodes, toRmClassName) => {
    for (let i=0,len=nodes.length; i<len; i++){
        let classNames = nodes[i].className.split(' ');
        for (let j = 0, len = classNames.length; j < len; ++j) {
            if (classNames[j] === toRmClassName) {
                classNames[j] = '';
            }
        }
        nodes[i].className = classNames.join('');
    }
};
let addClass = (node, toAddClassName) => {
    node.className += ` ${toAddClassName}`;
    return node.className;
};

$('.form').addEventListener('click',e=>{
    if (e.target.id === 'rmBtn') {
        if (!checked) {
            console.error('to checked a tree dom');
            return false;
        }
        checked.parentNode.removeChild(checked);
    }
    if (e.target.id === 'addBtn' && addInput.value.trim() !== ''){
        if (!checked) {
            console.error('to checked a tree dom');
            return false;
        }
        if (checked.children.length <= 1) checked.appendChild(document.createElement('ul'));
        let li = document.createElement('li');
        li.className = 'item';
        li.innerHTML = `<header>
                <span class="expand">+</span>
                <span class="title">${addInput.value.trim()}</span>
            </header>`;
        checked.querySelector('ul').appendChild(li);
    }
},false);

root.addEventListener('click', e=> {
    if (e.target.parentNode.parentNode.className === 'item'){
        checked = e.target.parentNode.parentNode;
        rmClass($$('.title'),'checked');
        addClass(checked.querySelector('.title'),'checked');
    }
}, false);

