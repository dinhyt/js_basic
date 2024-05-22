function ex5() {

let inputString1 = document.getElementById("toan").value;
let StringArray1 = inputString1.split(',');
let NumberArray1 = StringArray1.map(Number);
for(let i = 0; i < NumberArray1.length; i++) {
if(NumberArray1[i] < 0 || NumberArray1[i] > 10){
    alert("điểm không hợp lệ");
    location.reload;
}
}
let inputString2 = document.getElementById("van").value;
let StringArray2 = inputString2.split(',');
let NumberArray2 = StringArray2.map(Number);
for(let i = 0; i < NumberArray2.length; i++) {
if(NumberArray2[i] < 0 || NumberArray2[i] > 10){
    alert("điểm không hợp lệ");
    location.reload;
}
}

let inputString3 = document.getElementById("anh").value;
let StringArray3 = inputString3.split(',');
let NumberArray3 = StringArray3.map(Number);
for(let i = 0; i < NumberArray3.length; i++) {
if(NumberArray3[i] < 0 || NumberArray3[i] > 10){
    alert("điểm không hợp lệ");
    location.reload;
}
}

let average1 = (((NumberArray1[0]+NumberArray1[1]+NumberArray1[2])/3)+NumberArray1[3])*0.5/2+NumberArray1[4]*0.5;
let average2 = (((NumberArray2[0]+NumberArray2[1]+NumberArray2[2])/3)+NumberArray2[3])*0.5/2+NumberArray2[4]*0.5;
let average3 = (((NumberArray3[0]+NumberArray3[1]+NumberArray3[2])/3)+NumberArray3[3])*0.5/2+NumberArray3[4]*0.5;

let average4 = (average1+average2+average3)/3;

if(average1>6.5&&average2>6.5&&average3>6.5&&average4>=8) document.getElementById('ex5').innerText="giỏi";
else if(average1>6.5&&average2>6.5&&average3>6.5&&average4<8) document.getElementById('ex5').innerText="khá";
else if(average1>5&&average2>5&&average3>5&&average4>=6.5) document.getElementById('ex5').innerText="khá";
else if(average1>5&&average2>5&&average3>5&&average4<6.5) document.getElementById('ex5').innerText="trung bình";
else if(average1>4&&average2>4&&average3>4&&average4>=5) document.getElementById('ex5').innerText="trung bình";
else document.getElementById('ex5').innerText="kém";

}