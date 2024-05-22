function ex10() {
    let side1 = document.getElementById("side1").value;
    let side2 = document.getElementById("side2").value;
    if(side1 < 0) {
        alert("vui lòng nhập vào số lớn hơn 0");
        document.getElementById("side1").innerText="";
    }
    if(side2 < 0) {
        alert("vui lòng nhập vào số lớn hơn 0");
        document.getElementById("side2").innerText="";
    }
    if(side1 > 0 && side2 > 0){
        let result = side1*side2/2;
        document.getElementById("ex10").innerText=result;
    }

}