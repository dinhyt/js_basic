function checkBiggest() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let n3 = document.getElementById('n3').value;
    let max = Math.max(n1, n2, n3);
    document.getElementById('ex4').innerText="max trong các số trên là " + max;
}