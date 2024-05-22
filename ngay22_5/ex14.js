function ex14() {
    let toggle = document.getElementById("toggleEx14").innerText;
    let ex14Td1 = parseFloat(document.getElementById("ex14Td1").value);
    
    if (isNaN(ex14Td1)) {
        alert("Vui lòng nhập giá trị hợp lệ");
        return;
    }

    if (toggle === "🔄 feet sang mét") {
        document.getElementById("ex14Td2").innerText = (ex14Td1 * 3.28084);
    } else {
        document.getElementById("ex14Td2").innerText = (ex14Td1 / 3.28084);
    }
}

function toggleConversionEx14() {
    let toggle = document.getElementById("toggleEx14").innerText;
    if (toggle === "🔄 feet sang mét") {
        document.getElementById("ex14Th1").innerText = "feet";
        document.getElementById("ex14Th2").innerText = "mét";
        document.getElementById("toggleEx14").innerText = "🔄 mét sang feet";
    } else {
        document.getElementById("ex14Th1").innerText = "mét";
        document.getElementById("ex14Th2").innerText = "feet";
        document.getElementById("toggleEx14").innerText = "🔄 feet sang mét";
    }
    document.getElementById("ex14Td1").value = "";
    document.getElementById("ex14Td2").innerText = "";
}