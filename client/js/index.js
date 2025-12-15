const loginInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const submitBtn = document.getElementById("submit")

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
        "login": "els.dotjes",
        "password": "EDotjes_!884"
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
            if (userToCheck.login == loginInput.value && userToCheck.password == passwordInput.value){
                //oveschakelen
                sectionLogin.style.display = "none"
                sectionAfter.style.display = "block"
            }
        })
    })
})