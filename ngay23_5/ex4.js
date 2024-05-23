function ex4() {
    let arr = document.getElementById("ex4In").value;
    let stringArray = arr.split(',');
    let array = stringArray.map(Number);
    let tmp = array[0];
    for(let i = 1; i < array.length; i++) {
        if(tmp < array[i]) tmp = array[i];
    }
    document.getElementById("ex4").innerText=tmp;
}