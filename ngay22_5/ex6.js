function ex6() {
    let a = document.getElementById("c1").value;
    let b = document.getElementById("c2").value;
    let c = document.getElementById("c3").value;
    if(a < 0 || b < 0 || c < 0){
        alert("vui long nhap 3 so lon hon 0");
        document.getElementById("c1").value="";
        document.getElementById("c2").value="";
        document.getElementById("c3").value="";
    }
    else if(a>=(b+c) || b>=(a+c) || c>=(a+b)) document.getElementById("ex6").innerText="k";
    else document.getElementById("ex6").innerText="phải";

}