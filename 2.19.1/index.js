"use strict";

let $ = node=>document.querySelector(node),
    $$ = node=>document.querySelectorAll(node),
    stack = [];

$('#bft').addEventListener('click',()=>{
    let stack = breadthFirstTraversal($('#tree'));
    render(stack);
},false);
$('#dft').addEventListener('click',()=>{
    depthFirstTraversal($('#tree'));
    render(stack);
},false);

let clearColor = ()=>{
    for (let i=0,div=$$('div'),len=div.length; i<len; i++){
        if (div[i].style.backgroundColor){
            div[i].style.backgroundColor = '';
        }
    }
};

let render  = stack =>{
    setTimeout(()=>{
        if (!stack.length) return;
        clearColor();
        stack.shift().style.backgroundColor = '#1ad361';
        render(stack);
    },500)
};

let breadthFirstTraversal = (node)=>{
    if (!node) return;
    let que = [],
        stack = [];
    que.push(node);
    while (que.length){
        node = que.shift();
        stack.unshift(node);
        if (node.firstElementChild) que.push(node.firstElementChild);
        if (node.lastElementChild) que.push(node.lastElementChild);
    }
    return stack.reverse();
};

let depthFirstTraversal = (node)=>{
    if (!node) return;
    stack.push(node);
    depthFirstTraversal(node.firstElementChild);
    depthFirstTraversal(node.lastElementChild);
};
