//your JS code here. If required.
//your JS code here. If required.
function getSize(){
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let div = document.querySelector("#sizeInfo");
    div.innerHTML = `<h1> Width: ${width} and Height: ${height} </h1>`;
}