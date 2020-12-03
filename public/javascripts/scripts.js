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


function myFilter() {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];

        if (td) {
            txtValue = td.textContent || tdT.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
