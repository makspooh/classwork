// // task 1
// function getAttributes() {
//     let link = document.querySelector('a');

//     console.log(link.getAttribute('href'));
//     console.log(link.getAttribute('hreflang'));
//     console.log(link.getAttribute('rel'));
//     console.log(link.getAttribute('target'));
//     console.log(link.getAttribute('type'));
// }

// // task 2
// window.onload = function() {
//     let table = document.querySelector('table');

//     for (let i = 0; i < table.rows.length; i++) {
//       let row = table.rows[i];
//       row.cells[i].style.backgroundColor = 'red';
//     }
// }

// // task 3
// function createCloneNode(block) {
//     let body = document.querySelector('body');
//     let element = document.createElement(block);
//     let p = document.createElement('p');

//     p.textContent = 'Hello';

//     element.appendChild(p);
//     body.appendChild(element);
// }
// createCloneNode('div');
// createCloneNode('span');

// // task 4
// function addChildrenTo(block, count, type) {
//     let body = document.querySelector('body');
//     let newBlock = document.createElement(block);
    
//     for (let i = count; i > 0; i--) {
//         let newType = document.createElement(type);
//         body.appendChild(newBlock);
//         newBlock.appendChild(newType);
//     }
// }
// addChildrenTo('div', 3, 'p');

// task 5
function setColor(text) {
    let body = document.querySelector('body');
    let colors = ['red', 'blue', 'green'];
    let textArray = text.split(' ');
    
    for (let i = 0; i < textArray.length; i++) {
        for (let j = 0; j < textArray[i].length; j++) {
            let span = document.createElement('span');
            let newColor = Math.round(Math.random()*(colors.length));
            
            span.textContent = textArray[i][j];
            span.style.color = colors[newColor];

            body.appendChild(span);
        }
        if (i != (textArray.length - 1)) {
            let span = document.createElement('span');
            span.textContent = ' ';
            body.appendChild(span);
        }
    }
}
setColor('Hello World');