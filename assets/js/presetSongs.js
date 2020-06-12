/* Cleaned */
function loadSong(song) {
    switch (song) {
        case "none":
            clearSheet();
            while (newLine != 0) {
                removeRow();
            }
            break;
        case "miiTheme":
            exportBox.value = "120,4,2,0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..8.#-0..8.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..2.#-0..0.-0..0.-8.b.8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..4.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..0.-8.#.8.-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-8..0.-8..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-8..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2.#.0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;4.#.0.-0..0.-8.#.0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-8.#.0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-8.b.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-8..0.-8..0.-8..0.-0..0.-0..0.-0..0.-8..0.-8..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-8..0.-8..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-8..0.-8..0.-8..0.-0..0.-0..0.-0..0.-8..0.-8..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;"
            importSong();
            break;
        case "tetris":
            exportBox.value = "148,4,6,0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..1.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-;4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..0.-0..8.#-0..0.-0..8.#-4..0.-0..8.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-8..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.#-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..0.-0..8.#-0..0.-0..8.#-4..0.-0..8.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-8..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..8.-0..0.-8..8.-0..0.-0..8.-8..0.-0..8.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..8.-0..0.-8..8.-0..0.-0..8.-0..0.-0..8.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-8..8.-0..0.-0..8.-8..0.-0..8.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-8..0.-0..8.-0..0.-0..8.-8..0.-0..8.-0..0.-0..8.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..1.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-4..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-4..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-4..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-1.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..4.-0..0.-0..4.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..1.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..1.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..0.-0..0.-0..0.-0..8.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..0.-0..0.-0..0.-0..8.#-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..0.-0..0.-0..0.-0..8.#-0..0.-0..8.#-0..0.-0..0.-0..0.-4..0.-0..0.-4..0.-0..0.-4..0.-0..0.-1..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..0.-0..8.#-0..0.-0..8.#-0..0.-0..8.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-8..0.-0..0.-8..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-8..0.-0..0.-8..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;"
            importSong();
            break;
        case "fallinginlove":
            exportBox.value = "80,4,2,0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.b-0..0.-0..8.b-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.b-0..0.-0..8.b-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.b-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..2.-0..0.-0..8.-0..0.-0..2.-0..0.-0..8.-0..0.-0..2.-0..0.-0..8.-0..8.-0..4.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..8.-0..8.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..8.-0..4.-0..0.-0..8.-0..0.-0..0.-0..0.-0..8.-0..8.-0..8.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2.b.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-2.b.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..2.b-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;";
            importSong();
            break;
        case "epilogue":
            exportBox.value = "92,3,6,0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.#-0..0.-0..4.#-0..0.-0..0.-0..0.-0..4.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.#-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..0.-0..0.-0..4.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-8.#.0.-0..0.-0..4.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.-0..0.-0..4.-0..0.-0..0.-0..0.-0..4.-0..0.-0..4.-0..0.-0..0.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.#-0..0.-0..0.-8.#.0.-0..0.-8.#.4.#-0..0.-0..4.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..8.#-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..4.#-0..0.-0..4.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..4.#-0..0.-4..4.#-0..0.-0..0.-0..0.-0..4.#-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-8..0.-0..0.-0..0.-0..2.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..4.#-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-2.#.0.-0..0.-0..8.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..4.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..4.-0..0.-0..4.#-0..0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..8.-0..8.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-8..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-8..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..2.#-0..0.-0..0.-0..0.-8..0.-0..0.-0..4.-0..0.-0..0.-0..0.-8..4.-0..0.-0..2.#-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..4.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-2.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-4.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-8.#.0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-8.#.0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..4.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-2.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..2.-0..0.-0..0.-0..0.-0..0.-0..0.-4.#.2.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-2.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-;0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2..0.-0..0.-0..0.-0..0.-0..0.-0..0.-8..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-2.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-8.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-4.#.0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-0..0.-;";
            importSong();
            break;
    }
}
