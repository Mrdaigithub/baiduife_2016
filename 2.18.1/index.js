"use strict";

const DOC = document;
let $ = (dom)=> DOC.querySelector(dom);

let dataList = $('#dataList');
$('#btns').addEventListener('click',(e)=>{
    let val = $('#text').value.trim(),
        res = undefined;
    switch (e.target.id){
        case 'unshift':
            if (!!val && /^\d*$/.test(val)){
                let numDom = DOC.createElement('li');
                numDom.innerHTML = val;
                dataList.insertBefore(numDom, dataList.children[0]);
            }
            break;
        case 'push':
            if (!!val && /^\d*$/.test(val)){
                let numDom = DOC.createElement('li');
                numDom.innerHTML = val;
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
    }
},false);

