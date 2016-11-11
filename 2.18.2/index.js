"use strict";

const DOC = document;
let $ = (dom)=> DOC.querySelector(dom);
let $$ = (doms)=> DOC.querySelectorAll(doms);
let j=1,
    i=0;
let dataList = $('#dataList');

let testInputVal = (val)=>{
    val = parseInt($('#text').value.trim());
    if (!!val && val>=10 && val<=100){
        return val;
    }else {
        alert('please input 10~100')
        return false;
    }
};
let bubbleSort = ()=>{
    let n = null,
        arr = $('#dataList').children;
    let timer = setTimeout(()=>{
        if (parseInt(arr[j].innerText) < parseInt(arr[j-1].innerText)){
            n = dataList.replaceChild(arr[j], arr[j-1]);
            dataList.insertBefore(n,arr[j]);
        }
        console.log(arr.length,j);
        if (j>=arr.length-1) {
            if (i<arr.length-1){
                i++;
                j=0;
                timer = null;
                bubbleSort();
            }else {
                timer = null;
                return;
            }
        }
        j++;
        timer = null;
        bubbleSort();
    },500)
};

$('#btns').addEventListener('click',(e)=>{
    let res = undefined,
        val = undefined;
    switch (e.target.id){
        case 'unshift':
            val = testInputVal($('#text').value.trim());
            if ($('#dataList').children.length >= 60){
                alert('num length is too more');
                return false;
            }
            if (val){
                let numDom = DOC.createElement('li');
                numDom.innerHTML = val;
                numDom.style.height = val*5 + 'px';
                dataList.insertBefore(numDom, dataList.children[0]);
            }
            break;
        case 'push':
            val = testInputVal($('#text').value.trim());
            if ($('#dataList').children.length >= 60){
                alert('num length is too more');
                return false;
            }
            if (val){
                let numDom = DOC.createElement('li');
                numDom.innerHTML = val;
                numDom.style.height = val*5 + 'px';
                dataList.appendChild(numDom);
            }
            break;
        case 'shift':
            if (dataList.children.length > 0){
                res = dataList.children[0].innerHTML;
                dataList.removeChild(dataList.children[0]);
                alert(res);
                return res;
            }
            return res;
            break;
        case 'pop':
            if (dataList.children.length > 0){
                res = dataList.children[dataList.children.length-1].innerHTML;
                dataList.removeChild(dataList.children[dataList.children.length-1]);
                alert(res);
                return res;
            }
            return res;
            break;
        case 'sort':
            bubbleSort();
            break;
    }
},false);
