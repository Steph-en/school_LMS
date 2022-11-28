var objPeople =
[
    {
        username: "ENG19A00007Y",
        password: "AitGH123"
    },
    {
        username: "ENG19A00017Y",
        password: "AitGH123"
    },
    {
        username: "ADS19A00106Y",
        password: "AitGH123"
    },
    {
        username: "ADS19A00017Y",
        password: "AitGH123"
    }
]

function getInfo()
{
    var username = document.getElementById("floatingInput").value
    var password = document.getElementById("floatingPassword").value
    var button = document.querySelector(".btn")

    // console.log("UserID: " + username + " and Password: " + password)
    
    var i;

    for (i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            
            alert(username + " is valid!!!")
            
            this.innerHTML = "<div class='loader'></div>"
            setTimeout(() => {
                this.innerHTML = "<button class='w-100 btn btn-lg btn-primary' type='button' onclick='getInfo()'><a href='/home.html'>Sign in</a></button>"
            }, 1000)
        } 
    }
    // alert("Invalid Userneme or Password")
    return
};