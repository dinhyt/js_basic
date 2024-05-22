function ex12() {
    let a = document.getElementById("aEx12").value;
    let b = document.getElementById("bEx12").value;
    let c = document.getElementById("cEx12").value;
    if(a == 0) {
        if(b == 0) {
            if(c == 0) document.getElementById("ex12").innerText="phương trình luôn luôn đúng với mọi x";
            else document.getElementById("ex12").innerText="phương trình vô nghiệm";
        } 
        else {
            document.getElementById("ex12").innerText=(-c/b);
        }
    }
    else{
        let delta = b*2-4*a*c;
        if(delta > 0) {
            let x1 = (-b-Math.sqrt(delta))/(2*a);
            let x2 = (-b+Math.sqrt(delta))/(2*a);
            document.getElementById("ex12").innerText="phương trình có 2 nghiệm phân biệt: x1="+x1+"và x2="+x2;
        }
        else if(delta == 0) {
            let x = -b/2*a;
            document.getElementById("ex12").innerText="phương trình có 1 nghiệm kép: x="+x;
        }
        else document.getElementById("ex12").innerText="phương trình không có nghiệm là số thực";
    }
}