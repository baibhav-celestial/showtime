function createaccount(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById('password').value;
    const term= document.getElementById('alert').checked;
    
    if(!term){
        alert('Please accept the terms and condition')
        return
    }
    
    const newdata={
        name: name,
        email:email,
        password: password
    }
    const userdatajson = JSON.stringify(newdata)
    localStorage.setItem("newdata", userdatajson)
     alert('your account has created')
    }