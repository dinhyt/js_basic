const todoList = ["Go to bed at 11pm", "Do homework at 8pm"];

function cre() {
    let cre = prompt("nhập vào phần tử mới:");
    todoList.push(cre);
    read();
}

function read() {
    if(todoList.length == 0) {
        alert("mảng rỗng");
    }
    else {
        for(let i = 0; i < todoList.length; i++){
            console.log(todoList[i]);
        }
    }
}

function update() {
    if(todoList.length === 0) {
        alert("mảng rỗng");
    }
    else {
        let index = prompt("nhập vào vị trí cần update:");
        while(index < 0 || index >= todoList.length) {
            index = prompt("vui lòng nhập vào số từ 0 đến " + todoList.length - 1);
        }
        let tmp = prompt("nhập vào nội dung mới:");
        todoList[index] = tmp;
        read();
    }
}

function del() {
    if(todoList.length === 0) {
        alert("mảng rỗng không thể xóa!");
    }
    else{
        let index = prompt("nhập vào vị trí cần xóa:");
        while(index < 0 || index >= todoList.length) {
            index = prompt("vui lòng nhập lại số từ 0 đến " + todoList.length - 1)
        }
        todoList.splice(index, 1);
        read();
    }

}

function ex5() {
    let choose;
    do{
        choose = prompt("nhập vào C để tạo, R để đọc, U để chỉnh sửa, D để xóa và không nhập để thoát");
        switch(choose) {
            case 'C': 
                {
                    cre();
                    break;
                }
            case 'R':
                {
                    read();
                    break;
                }
            case 'U':
                {
                    update();
                    break;
                }
            case 'D':
                {
                    del();
                    break;
                }
        }
    }while(choose != null);
}

ex5();