// The following two functions operate in songs.php
function toggleDelete() {
    deleteButton.innerHTML = "Confirm Delete?";
    deleteButton.classList.add("is-light");
    deleteButton.setAttribute("onclick", "callDelete()");
}

function callDelete() {
    deleteSong(globalSongID);
    deleteButton.innerHTML = "Song Deleted!";
    deleteButton.setAttribute("disabled", "true");
    window.setTimeout(function() {
        window.location.href = "profile.php";
    }, 3000);
}

// The following three functions operate in profile.php (displaySongs.js)
function toggleProfileDelete(songID) {
    profileDeleteButton = document.getElementById(songID);
    profileDeleteButton.innerHTML = "Confirm Delete?";
    profileDeleteButton.classList.add("is-light");
    songToDelete = songID;
    profileDeleteButton.setAttribute("onclick", "callProfileDelete()");
}

function toggleRecentDelete(songID) {
    profileDeleteButton = document.getElementById(songID);
    profileDeleteButton.innerHTML = "Confirm Delete?";
    profileDeleteButton.classList.add("is-light");
    songToDelete = songID.substr(1); // to only account for characters after the 'R'
    profileDeleteButton.setAttribute("onclick", "callProfileDelete()");
}

function callProfileDelete() {
    profileDeleteButton.innerHTML = "Song Deleted!";
    profileDeleteButton.setAttribute("disabled", "true");
    deleteSong(songToDelete);
    window.setTimeout(function() {
        window.location.href = "profile.php";
    }, 3000);
}
