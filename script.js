
let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

function validateForm(){
    
    if(username.value == ""){
        document.getElementById("userError").innerHTML = "User Name is Empty";
        flag = 0;
    }
    else if(username.value.length < 5){
        document.getElementById("userError").innerHTML = "User Name must be 5 character long";
        flag =0;
    }
    else{
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }

    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Password is empty";
        flag=0;
    }
    else if(password.value.length < 3){
        document.getElementById("passError").innerHTML = "PassWord must be atleast 3 character long";
        flag = 0;
    }
    else if(password.value.length >10){
        document.getElementById("passError").innerHTML = "PassWord must be less than 10 character ";
        flag = 0;
    }
    // else if(password.value != '!'){
    //     document.getElementById("passError").innerHTML = "PassWord must contain one special character";
    // }
    // else if(password.value != '0,1,2,3,4,5,6,7,8,9'){
    //     document.getElementById("passError").innerHTML = "PassWord must contain one number character";
    // }
    // else if(password.value == "" && password.value.length > 8 && password.value == '!' && password.value == '0,1,2,3,4,5,6,7,8,9') {
    //     prompt('strong password');
    // }
    else{
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }

    if(flag){
        return true;
        
    }
    else{
        return false;
    }

}