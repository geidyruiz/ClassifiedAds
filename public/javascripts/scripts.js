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

//function to search in the column title in the tables
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

//Geolocation
//returns a Geolocation object that gives Web content access to the location of the device.
//navigator.geolocation.getCurrentPosition(showPosition);
let locationBtn = document.getElementById("mylocation");
let para = document.getElementById("location");
let button = document.querySelector("button");
let mapLink = document.getElementById("map-link");

mapLink.href = "";
mapLink.textContent = "";


function getLocation() {

    //success callback
    if (!navigator.geolocation) {
        para.textContent = "Geolocation is not supported by your browser";
    }
    /* success
             A callback function that takes a GeolocationPosition object as its sole input parameter.
             error Optional
             An optional callback function that takes a GeolocationPositionError object as its sole input parameter.
             */
    else {
        para.textContent = "Locating…";
        
         /*The Geolocation.getCurrentPosition() method is used to get the current position of the device.*/
        navigator.geolocation.getCurrentPosition(showPosition, errorMsg);
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    para.textContent = "";
    mapLink.textContent = "Check out the map!";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = "View The Map!";
}

function errorMsg() {
    para.textContent = "Sorry, something went wrong!";
}

button.onclick = getLocation;

