// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', () => {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// });

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     return `rgb(${r}, ${g}, ${b})`;
// }

const btn = document.querySelector('button');
const h1 = document.querySelector('h1');


btn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    const darkColor = r + g + b;

    h1.innerText = newColor;
    document.body.style.backgroundColor = newColor;
    
    if (darkColor < 250) {
        h1.style.color = "white";
    } else {
        h1.style.color = "black"
    }
})

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     return `rgb(${r}, ${g}, ${b})`;
// }