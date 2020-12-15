const changeColor = document.querySelector('.changeColor');

Text.classList.add("change");

/*login validation */
function validate() {
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if (username == null || username == "") {
        alert("Please enter the username");
        return false;
    } else if  (password  == null ||  password  == "")  {                
        alert("Please enter the password.");             
        return  false;            
    }            
    alert('Login successful');
}