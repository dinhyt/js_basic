function ex9() {
    let height = parseFloat(document.getElementById("height").value);

    if(height < 0) {
        alert("vui lòng nhập vào số lớn hơn 0");
        document.getElementById("height").innerText="";
    }
    let width = parseFloat(document.getElementById("width").value);
    if(width < 0) {
        alert("vui lòng nhập vào số lớn hơn 0");
        document.getElementById("width").innerText="";
    }
    if(height > 0 && width > 0) {
        let result = height*width;
        document.getElementById("ex9").innerText=result;
    }

}