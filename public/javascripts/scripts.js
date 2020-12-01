//Custom Client side JaveScript for UI Functionality

//Delete Confirmation popup - attach to an HTML element with the class of "delete"
$('.delete').on('click', () => {
    return confirm('Are you sure you want to delete this?')
})


//compare passwords when user register
function comparePasswords() {
    var passWord1 = document.getElementById("password").value
    var passWord2 = document.getElementById("confirm").value
    var passWordMsg = document.getElementById("passWordMsg")

    if (passWord1 != passWord2) {
        passWordMsg.innerHTML = "Passwords do NOT match"
        passWordMsg.className = "text-danger"
        return false
    }
    else {
        passWordMsg.innerHTML = ""
        passWordMsg.className = ""
        return true
    }
}
