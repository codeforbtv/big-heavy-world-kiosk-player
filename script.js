// Display selected item on playlist
// i: index into playlist
// play: true=>autoplay, false=>no autoplay
// assumption: we will always be playing an .mp3 file
// See README.md for explanation of why thumbnail and full-size image files are prefixed
function setChoice(i, play) {

    var newImage = "\t\t\t<img src=\"i " + playlist[i][1] + '" data-index="' + i + "\">\n";
    console.log ("newImage:\n" + newImage);

    var autoplayText = (play ? " autoplay": "" );
    var playPauseImage = (play ? "icon-stop.svg" : "icon-play.svg");
    var artistName = ((typeof playlist[i][3] === 'undefined') ? "" : playlist[i][3]);
    // Uncomment if fifth column in playlist is used for artist info
    // var artistInfo = ((typeof playlist[i][4] === 'undefined') ? "" : playlist[i][4]);;

    // Build the HTML for the audio file, but without controls playing
    var newAudio = "\t\t<audio" + autoplayText + ">\n";
    newAudio += "\t\t\t<source src=\"" + playlist[i][2] + "\" />" + "\n";
    newAudio += "\t\t\tHouston, we have a problem!\n";
    newAudio += "\t\t</audio>\n";

    // Build custom controls
    var customAudio = "\t\t<div class=\"player\">\n";
    customAudio += "\t\t\t<div class=\"name\">\n";
    customAudio += "\t\t\t\t" + artistName + "\n";
    customAudio += "\t\t\t</div>\n";
    customAudio += "\t\t\t<div class=\"btns\">\n";
    customAudio += "\t\t\t\t<div class=\"play-pause\" onclick=\"setControls(this)\">\n";
    customAudio += "\t\t\t\t\t<img src=\"" + playPauseImage + "\">\n";
    customAudio += "\t\t\t\t</div>\n";
    customAudio += "\t\t\t</div>\n";
    customAudio += "\t\t\t<div class=\"progress\">\n";
    customAudio += "\t\t\t</div>\n";
    customAudio += "\t\t</div>\n";

    $("#image-div")[0].innerHTML = newImage;
    $("#audio-div")[0].innerHTML = newAudio + customAudio;

    var aud = $("audio")[0];
    aud.ontimeupdate = function () {
        $(".progress").css("width", aud.currentTime / aud.duration * 100 + "%");
    };
    // Uncomment if 5th column in playlist is used for info about artist.
    // $("#artist-info")[0].innerHTML = artistInfo;
}

// Event listener when user taps a thumbnail
function newChoice(element) {
    setChoice(element.dataset.index, true);
}

// Event listener when user taps on audio control
function setControls(controls) {
    console.log ("Click detected");
    var aud = $("audio")[0];
    if (aud.paused) {
        aud.play();
        controls.innerHTML = "\t\t\t\t\t<img src=\"icon-stop.svg\">\n";
    } else {
        aud.pause();
        controls.innerHTML = "\t\t\t\t\t<img src=\"icon-play.svg\">\n";
    }
}

// Initialize the page
$(document).ready(function() {

    // Use the playlist to set up the thumbnail images
    var list = "";
    playlist.forEach(function (playitem, index) {
        if (index === 0) return;  // ignore first item in list
        list += '\t\t\t<img src="t ' + playlist[index][0] + '" data-index="' + index + '" onclick="newChoice(this)">\n';
    });
    $("nav")[0].innerHTML = list;

    // Set the current item to #1, but don't start the audio
    setChoice (1, false);

    // Set up the footer
    $("footer")[0].innerHTML = copyrightText;

});




