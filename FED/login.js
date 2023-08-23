document.getElementById('submittbtn').addEventListener("click", function(e){
    e.preventDefault();
const uname=document.getElementById('uname').value;
const pswwd=document.getElementById('pswwd').value;

//console.log(uname,pswwd);
const user = {
    // key(db_col_name:value(text_box_variable))
    email:uname,
    password:pswwd,

}
const url = "http://localhost:8081/login"
const xhr = new XMLHttpRequest();
xhr.open('POST', url);

xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
xhr.setRequestHeader('Content-Type', 'application/json')

xhr.onreadystatechange = () => {
    if (xhr.status == 200 && xhr.readyState == 4) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        if(response==null){
            alert('NOT VALID!')
        }
        else{
            sessionStorage.setItem("SessionName",response.email);
            sessionStorage.setItem("SessionCName",response.name);
            sessionStorage.setItem("Sessionphonenumber",response.phoneNumber);
            sessionStorage.setItem("Sessionbirthdaydate",response.birthdayDate);
            sessionStorage.setItem("Sessiongender",response.gender);
           
           const sessemail =  sessionStorage.getItem("SessionName")
           if(sessemail != "")
           {
                //document.getElementById("loginmyaccount").innerHTML = '<a class="nav-btn mr-2" href="myaccount.html"><button class="btn btn-sm btn-info">My Account </button> </a>';
           }else{
            //document.getElementById("loginmyaccount").innerHTML ='<a class="nav-btn mr-2" href="login.html"><button class="btn btn-sm btn-info">Login </button></a><a class="nav-btn" href="signup.html"><button class="btn btn-sm btn-success">Signup</button></a>';
           }
           console.log(sessemail);
            window.location.href = "http://127.0.0.1:5500/index.html"
        }
        

    }
}
xhr.send(JSON.stringify(user));

});