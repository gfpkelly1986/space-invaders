function getNewUser(){
    let user = document.getElementById('username_input').value;
    sessionStorage.setItem('NewUser', user);
    alert(user);
}

