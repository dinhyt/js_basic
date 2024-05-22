function ex13() {
    let toggle = document.getElementById("toggle").innerText;
    let ex13Td1 = parseFloat(document.getElementById("ex13Td1").value);
    
    if (isNaN(ex13Td1)) {
        alert("Vui lòng nhập giá trị hợp lệ");
        return;
    }

    if (toggle === "🔄 độ F sang độ C") {
        document.getElementById("ex13Td2").innerText = ((ex13Td1 * 1.8) + 32);
    } else {
        document.getElementById("ex13Td2").innerText = ((ex13Td1 -32) * 0.555);
    }
}

function toggleConversion() {
    let toggle = document.getElementById("toggle").innerText;
    if (toggle === "🔄 độ F sang độ C") {
        document.getElementById("ex13Th1").innerText = "độ F";
        document.getElementById("ex13Th2").innerText = "độ C";
        document.getElementById("toggle").innerText = "🔄 độ C sang độ F";
    } else {
        document.getElementById("ex13Th1").innerText = "độ C";
        document.getElementById("ex13Th2").innerText = "độ F";
        document.getElementById("toggle").innerText = "🔄 độ F sang độ C";
    }
    document.getElementById("ex13Td1").value = "";
    document.getElementById("ex13Td2").innerText = "";
}

