function ex11() {
    let b = document.getElementById("bEx11").value;
    let a = document.getElementById("aEx11").value;
    if(a == 0 && b == 0) {
        alert("phương trình luôn luôn đúng với mọi x");
    }
    else if(a == 0 && b != 0) {
        alert("phương trình vô nghiệm vui lòng nhập lại giá trị a và b!");
        document.getElementById("aEx11").value="";
        document.getElementById("bEx11").value="";
    }
    document.getElementById("ex11").innerText=-b/a;
}