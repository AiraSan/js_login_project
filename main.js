const defaultEmail = "zarmani@gmail.com";
const defaultPass = "zarmani123";


function login(e) {

    e.preventDefault();
    
    let email = e.target[0].value;
    let pass = e.target[1].value;

    if(email && pass){
        if(email === defaultEmail && pass === defaultPass) {
            document.querySelector('#success').innerHTML = `<img src="mayloe.jpeg" alt="" width=100%>`// "Login Successfully!"
            document.querySelector('.container').style.display = 'none';
        } 
        else if (email === defaultEmail && pass !== defaultPass) {
            document.querySelector('#error').innerHTML = "Wrong Password"
        } 
        else if (email !== defaultEmail && pass === defaultPass) {
            document.querySelector('#error').innerHTML = "Wrong Email"
        }
    } 
    else {
        document.querySelector('#error').innerHTML = "Please fill out of the fields!"
    }
}
