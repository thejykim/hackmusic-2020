// Disgusting code, probably need to refactor haha

let saveButton = document.getElementById("saveButton");
let saveIcon = document.getElementById("saveIcon");

function saveLogic() {
    // First-timer (new user not signed in)
    if (oauthID == "Null") {
        promptSignIn(); // need to fix
    } else { // Logged in, about to create new song
        createSongIndex();
    }
}
//
// function loggedInAllowSave(){
//     saveButton.setAttribute("style", "cursor: allowed;");
//     saveButton.setAttribute("onclick", "createSongIndex()");
//     createDialog.innerHTML = "";
// }

function promptSignIn() {
    //saveButton.setAttribute("style", "cursor: not-allowed;");
    //saveButton.setAttribute("onclick", "");
    //saveButton.setAttribute('disabled', 'true');
    createDialog.innerHTML = `
    <div class="notification is-danger">
        Please sign in with your Google account!
    </div>
    <br>
    `;

    console.log("Prompting sign in");
}

function onloadSaveButton() {
    saveButton.innerHtml = `
    Clone
    `;

    saveIcon.innerHTML = `
    <i class="fas fa-clone"></i>
    `;

    saveButton.onclick = testOnClick();

}

function testOnClick() {
    console.log("ONCLICK CHANGED");
}
