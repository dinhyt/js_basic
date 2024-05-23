function ex1(arr) {
    var tmp = [];
    for(let i = 0; i < arr.length; i++){
        tmp[arr.length - 1 - i] = arr[i];
    }
    return tmp;
}