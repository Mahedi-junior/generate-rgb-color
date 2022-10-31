/* 
* Project Requirements:
1. Change the background color by generating random rgb color by clicking a button

*/
// steps
// 1. create onload handler
window.onload = () => {
    main()
}
// document.addEventListener("click", function () {
//     main();
// })

function main() {
    const root = document.getElementById("root");
    const btn = document.getElementById("change-btn");
    btn.addEventListener("click", function () {
        const bgColor = generateRGBColor();
        // console.log(bgColor);
        root.style.backgroundColor = bgColor;
        const colorCode = document.getElementById("color-code");
        colorCode.innerText = '';
        const p = document.createElement("p");
        p.innerText = bgColor;
        colorCode.appendChild(p);

    })
}

// 2. random color generator function
function generateRGBColor() {
    // rgb(0, 0, 0), rgb(255, 255, 255);
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`
}
// 3. collect all necessary references
// 4. handle the click event