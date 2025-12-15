const loginInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const submitBtn = document.getElementById("submit")

//changepassword
const currentPass = document.getElementById("currentPSW")
const newPass = document.getElementById("newPSW")
const newPassConfirm = document.getElementById("confirmPSW")
const changePSWbtn = document.getElementById("changePSW")

//sections
sectionLogin = document.getElementById("beforLogin")
sectionAfter = document.getElementById("afterLogin")

submitBtn.addEventListener("click",() => {
    const options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        "login": `${loginInput.value}`,
        "password": `${passwordInput.value}`
        }),
    };
    fetch("https://ex-kerst-2025.onrender.com/user", options)
    .then(result => result.json())
    .then(userID => {
        fetch("https://ex-kerst-2025.onrender.com/user")
        .then(result => result.json())
        .then(allUsers => {
            userToCheck = allUsers.filter(user => user.id == userID.info)
            console.log(userToCheck);
            if (userToCheck[0].login == loginInput.value && userToCheck[0].password == passwordInput.value){
                //oveschakelen
                console.log("gelukt");
                
                
                sectionLogin.style.display = "none"
                sectionAfter.style.display = "block"
            }
            else{
                console.log("niet gelukt");
                
            }
            
        })
    })
})




