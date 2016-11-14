"use strict";

let $ = node=>document.querySelector(node),
    $$ = node=>document.querySelectorAll(node),
    root = $('#root'),
    text = $('#text'),
    stack = [],
    checkedDom = null,
    intervalTime = 500;


let clearColor = ()=> {
    for (let i = 0, div = $$('div'), len = div.length; i < len; i++) {
        if (div[i].style.backgroundColor) {
            div[i].style.backgroundColor = '';
        }
    }
};

let render = (stack, keyword = null, callback = null) => {
    setTimeout(()=> {
        clearColor();
        if (!stack.length) {
            stack = [];
            if (callback) callback();
            return;
        }
        let currDom = stack.shift();
        currDom.style.backgroundColor = '#1ad361';
        if (currDom.firstChild.nodeValue.trim() === keyword) {
            return true;
        }
        render(stack, keyword, callback);
    }, intervalTime)
};

/**
 * 多叉树广度优先遍历
 * @param node
 */
let breadthFirstTraversal = (node)=> {
    let arr = [];
    arr.push(node);
    while (arr.length) {
        node = arr.shift();
        stack.push(node);
        if (node) {
            for (let i = 0, len = node.children.length; i < len; i++) {
                arr.push(node.children[i]);
            }
        }
    }
};

/**
 * 多叉树深度优先遍历
 * @param node
 */
let depthFirstTraversal = (node)=> {
    if (!node || node.children === 0) return;
    stack.push(node);
    for (let i = 0, len = node.children.length; i < len; i++) {
        depthFirstTraversal(node.children[i]);
    }
};


$('.btn-group').addEventListener('click', (e)=> {
    switch (e.target.id) {
        case 'bft':
            if (stack) stack = [];
            breadthFirstTraversal(root);
            render(stack);
            break;
        case 'dft':
            depthFirstTraversal(root);
            render(stack);
            break;
        case 'bff':
            breadthFirstTraversal(root);
            render(stack, text.value.trim(), ()=> {
                alert('not found');
            });
            break;
        case 'dff':
            depthFirstTraversal(root);
            render(stack, text.value.trim(), ()=> {
                alert('not found');
            });
            break;
        case 'rmBtn':
            if (!checkedDom) throw new Error('to check a dom!!');
            checkedDom.parentNode.removeChild(checkedDom);
            break;
        case 'addBtn':
            if (!checkedDom) throw new Error('to check a dom!!');
            let div = document.createElement('div');
            div.innerHTML = text.value.trim();
            checkedDom.appendChild(div);
            break;
    }
}, false);

root.addEventListener('click', (e)=> {
    checkedDom = e.target;
    clearColor();
    e.target.style.backgroundColor = '#ffce44';
}, false);