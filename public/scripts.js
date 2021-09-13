/*const namee = document.getElementById('namee');
const emaill = document.getElementById('emaill');
const linkedin = document.getElementById('linkedin');
namee.addEventListener('blur', ()=>{
    let regex =  /^[A-Za-z]{3,}[A-Za-z. ]{1,}$/;
    let str = namee.Value;
    if(regex.test(str)){
        document.getElementById('nameerror').innerHTML = " ";
    }
    else{
        document.getElementById('nameerror').innerHTML = "*user name is invalid";
    }

})*/


//first

function validation(){
//const form = document.getElementById('form');
const namee = document.getElementById('namee').value;
const emaill = document.getElementById('emaill').value;
const linkedin = document.getElementById('linkedin').value;
const nameecheck = /^[A-Za-z]{3,}[A-Za-z. ]{1,}$/;
const emaillcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
const linkedincheck = /^[A-Za-z.]{3,30}$/;
if(nameecheck.test(namee)){
    document.getElementById('nameerror').innerHTML = " ";
    

}else{
    document.getElementById('nameerror').innerHTML = "*user name is invalid";
   
    return false;
}
if(emaillcheck.test(emaill)){
    document.getElementById('mailerror').innerHTML = " ";
  
}else{
    document.getElementById('mailerror').innerHTML = "*email is invalid";
   
    return false;
}
if(linkedincheck.test(linkedin)){
    document.getElementById('linkerror').innerHTML = " ";
  
}else{
    document.getElementById('linkerror').innerHTML = "*linkedin is invalid";
    
    return false;
}
}


//oldone

/*form.addEventListener('submit',(e) =>{
    e.preventDefault();
    checkinputs();
});
function checkinputs(){
    const nameevalue = namee.value.trim();
    const emaillvalue = emaill.value.trim();
    const linkedinvalue = linkedin.value.trim();


if(nameevalue === ''){
    setErrorForName(namee,'name cannot be blank');
} 
else{
    setSucessForName(namee);
}
if(emaillvalue === '')
{
    setErrorForMail(emaill,'email cannot be blank');
}
else{
    setSucessForMail(emaill);
}
}
function setErrorForName(input, message){
    const formMan = input.parentElement;
    const small = form.querySelector('small');
    small.innerText = message;
    form.className = 'box4__form--man error';
}
function setSucessForName(input){
    const formMan = input.parentElement;
    form.className = 'box4__form--man sucess'
}
function setErrorForMail(input, message){
    const formMail = input.parentElement;
    const small = form.querySelector('small');
    small.innerText = message;
    form.className = 'box4__form--mail error';
}
function setSucessForMail(input){
    const formMail = input.parentElement;
    form.className = 'box4__form--mail sucess'
}
console.log('heloo')*/