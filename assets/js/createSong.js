/* Cleaned */

function createSongIndex() {
    // check required fields
    if (titleField.textContent.replace(/\s+/g, '') == "") {
        createNotification("is-warning", "Put in a title!", null);
        return;
    }

    createNewSong();
    createNotification("is-success", "Song successfully added! Click this notification to visit your profile.", `profile.php`);
}

function editSongIndex(songID) {
    //check required fields
    if (titleField.textContent.replace(/\s+/g, '') == "") {
        createNotification("is-warning", "Put in a title!", null);
        return;
    }

    editSong(songID);
    createNotification("is-success", "Song successfully saved!", null);
}
