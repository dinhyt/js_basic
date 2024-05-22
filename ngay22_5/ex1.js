function isDivision() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    if(b == 0) document.getElementById('ex1').innerText="khong the chia cho so 0";
    else if (a % b == 0) document.getElementById('ex1').innerText="a chia het cho b";
    else document.getElementById('ex1').innerText="a khong chia het cho b";
}