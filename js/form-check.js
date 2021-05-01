//pull in all the dom elements we will use
const form = document.getElementById('register-form');
const formUserName = document.getElementById('fusername');
const formEmail = document.getElementById('femail');
const formPassword = document.getElementById('fpswd');
const formConfirmPassword = document.getElementById('fconf-pswd');
const eyeOne = document.getElementById('icon-eye-1');
const eyeTwo = document.getElementById('icon-eye-2');

function isValidEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }else{
    return (false)
  }    
    
}

function showErrorMessage(input, message){
    // get formcontrol parent div
    const formControlParent = input.parentElement;
    //show red outline and x icon svg
    formControlParent.className="form-control error";
    // overwrite defautl error message with parameter 
    const small = formControlParent.querySelector('small');
    small.innerText = message;
    //show error message - the css will take care of this
}

function showSuccess(input){
    const formControlParent = input.parentElement;
    formControlParent.className = "form-control success";        
}

function togglePasswordType(eyeOne){
 //change the icon to 
 const formControlParent = eyeOne.parentElement;
 const input = formControlParent.querySelector('input');
 const img = formControlParent.querySelector('img');
 if(input.type === 'password'){
     //console.log("inpput is type password");
     input.type = 'text';
     img.src = "../img/iconmonstr-eye-thin.svg";
     //console.log("inpput type changed to text");
 }else if(input.type === 'text'){
     //console.log("inpput is type text");
     input.type = 'password';
     img.src = "../img/iconmonstr-eye-off-thin.svg";
    // console.log("inpput type changed to password");
 }
}

/* EVENT LISTENERS */
eyeTwo.addEventListener('click',function(e){
    e.preventDefault();
    togglePasswordType(eyeTwo);
});
eyeOne.addEventListener('click',function(e){
    e.preventDefault();
    togglePasswordType(eyeOne);
});

//add an event listener on form submit buton
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(formUserName.value === ''){
        showErrorMessage(formUserName, "Username is required");
    }else{
        showSuccess(formUserName);
    }

    if(formEmail.value === ''){
        showErrorMessage(formEmail, "Email is required");
    }else if( isValidEmail(formEmail.value) === false ){
        showErrorMessage(formEmail, "Please use a valid email");
    }else{
        showSuccess(formEmail);
    }
    
    if(formPassword.value === ''){
        showErrorMessage(formPassword, "Password is required");
    }else{
        showSuccess(formPassword);
    }

    if(formConfirmPassword.value === ''){
        showErrorMessage(formConfirmPassword, "Password is required");
    }else if(formPassword.value !== formConfirmPassword.value ){
        showErrorMessage(formConfirmPassword, "Password does not match");
    }else{
        showSuccess(formConfirmPassword);
    }

      
    console.log("submit");
    
});


