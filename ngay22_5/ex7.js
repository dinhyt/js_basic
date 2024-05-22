function ex7() {
    let a = document.getElementById("ageEx7").value;
    if(Number.isInteger(a)){
        alert("vui lòng nhập vào số nguyên");
        document.getElementById("ageEx7").innerText="";
    }
    if(a > 0 && a < 120) document.getElementById("ex7").innerText="phải tuổi";
    else document.getElementById("ex7").innerText="không phải tuổi "
}