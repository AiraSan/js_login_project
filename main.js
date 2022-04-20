const defaultEmail = "shinthantismygurl@gmail.com";
const defaultPass = "luvforever";


function login(e) {

    e.preventDefault();
    
    let email = e.target[0].value;
    let pass = e.target[1].value;

    if(email && pass){
        if(email === defaultEmail && pass === defaultPass) {
            document.querySelector('#success').innerHTML = `<video width="320" height="240" autoplay>
            <source src="shinthant.mp4" type="video/mp4">
            <source src="shinthant.ogg" type="video/ogg">
            Your browser does not support the video tag.
        </video>`// "Login Successfully!"
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
