function checkNumber() {
    
    let number = document.getElementById('number').value;

    if(!Number.isInteger(number)){
        alert("vui long nhap vao so nguyen");
        document.getElementById('number').innerText="";
    } else {
        if(number < 0) document.getElementById('ex3').innerText="số này nhỏ hơn 0";
        else if (number == 0) document.getElementById('ex3').innerText="đây là số 0";
        else document.getElementById('ex3').innerText="số này lớn hơn 0"
    }
}