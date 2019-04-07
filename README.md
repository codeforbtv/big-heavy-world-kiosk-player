# KIOSK AUDIO & IMAGE DISPLAY SOFTWARE

This software was created to allow Big Heavy World to display
a set of photographs and associated audio commentary
in a kiosk at the Vermont History Museum,
as part of an exhibit on the history of music in Vermont.

https://bigheavyworld.com/

https://www.rutlandherald.com/features/vermont_arts/vermont-music-far-wide-exhibit-recalls-heyday-of-vermont-music/article_85734479-5877-5d16-a9a1-4f11cc86fc50.html


The app is designed to run in a very specific environment
* iPad 4 https://support.apple.com/kb/sp662?locale=en_US, in landscape orientation
* Kiosk Pro Basic https://www.kioskproapp.com/
* Files uploaded using iTunes

The CSS is hard-coded to accommodate the dimensions of the iPad.

## Creating the Playlist

The playlist consists of a Javascript array of items.
Each item is an array containing:
* The name of the thumbnail file
* The name of the full-size image file
* The name of the audio file
* The name of the artist

The first row (array item) in the playlist is ignored by the software;
it is there as a guide for those editing the playlist.

An empty playlist is found in "playlist-dist.js".

## Uploading the files

The files were uploaded using iTunes,
which does not allow the creation of directories.
In order to organize the large number of files,
prefixes were used to segregate like files,
and prevent file name collisions.

After the creation of the playlist, and before uploading:
* All thumbnails were prefixed with "t "
* All full-sized images were prefixed with "i "

If you have access to a program that allows for uploading of files
to directories, you may wish to organize the files into directories,
and modify the appropriate code in script.js.

All audio files provided to me already had as their first n characters
digits which specified the order in which they were to be played.
This kept them segregated and unique.
This numbering system is not significant to the software; 
the actual order is determined by the order in the playlist.
If your exhibit includes a large number of items,
you may also wish to follow this convention.

## Program notes

The Javascript code creates the "menu" of thumbnails from the playlist.
The CSS causes the menu of thumbnails to be displayed
on the left side of the screen.

Each thumbnail has a data-index attribute
which corresponds to the offset of the files in the playlist. 

When the user taps on a thumbnail, the Javascript code uses
the data-index attribute to find the correct item to display.

The Javascript code specifies the full-size image to be displayed.
It specifies the audio file to be played,
but does not display the standard controls.
It creates custom controls,
with the name of the artist (if available) and play/pause buttons.
A progress bar appears at the top of the custom controls.
Volume control is purposefully omitted.

NOTE: The standard audio controls displayed by the Kiosk Pro Browser
included a way to select the device to be used to play the audio.
In an environment with multiple options, it may be necessary
to configure the iPad to only permit the desired option.

Upon initial load, the first item is displayed with the audio paused.

NOTE: The "Idle Time Limit" setting should be set to a large enough
value to allow the longest audio file to be played.
When the limit is reached, the Kiosk app will revert to its
initial state, even if it is in the middle of playing an audio file.

## Credits

Thanks to our sponsor Big Heavy World for the use of its space 
for Code for BTV meetings, and other in-kind donations.

Thanks to our sponsor JetBrains for making its tools available for
this and other Code for BTV projects.