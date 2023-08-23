

document.getElementById('submitbtn').addEventListener("click", function(e){
    e.preventDefault();
const firstName=document.getElementById('firstName').value;
const lastName=document.getElementById('lastName').value;
const birthdayDate=document.getElementById('birthdayDate').value;
if(birthdayDate==""){
    alert('please fill date of birth');
    return false;
}
const emailAddress=document.getElementById('emailAddress').value;
const phoneNumber=document.getElementById('phoneNumber').value;
const elements=document.getElementsByName('inlineRadioOptions');
var checkedButton;

elements.forEach(e => {
    if (e.checked) {
        //if radio button is checked, set sort style
        checkedButton = e.value;
    }
});

console.log(firstName,lastName,birthdayDate,emailAddress,phoneNumber,checkedButton);

const user = {
    // key(db_col_name:value(text_box_variable))
    name:firstName,
    email:emailAddress,
    password:lastName,
    birthdaydate:birthdayDate,
    phonenumber:phoneNumber,
    gender:checkedButton

}

const url="http://localhost:8081/users"
const xhr=new XMLHttpRequest();
xhr.open('POST',url);
xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
xhr.setRequestHeader('Content-Type', 'application/json')

xhr.onreadystatechange=()=>{
    if (xhr.status==200 && xhr.readyState==4) {
        const response=JSON.parse(xhr.responseText);
        console.log(response);
        alert('You have been registered successfully! Please login');
        window.location.href="/login.html"
    }
}
xhr.send(JSON.stringify(user));
});

