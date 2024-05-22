function checkAge() {
    let age = document.getElementById("age").value;
    if(!Number.isInteger(age)){
        alert("vui long nhập vào số nguyên");
        document.getElementById("age").innerText="";
    } else {
        if(age < 15) document.getElementById("ex2").innerText="chưa đủ tuổi";
        else document.getElementById("ex2").innerText="đủ tuổi";
    }
}