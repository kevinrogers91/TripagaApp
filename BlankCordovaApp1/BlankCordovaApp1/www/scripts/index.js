﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    var dataTitle;

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);

        //Handle selecting logout by presenting confirmation dialog box
        document.getElementById('logout').addEventListener('click', function () {
            var flag = confirm("Are you sure you want to logout?");

            if (flag)
                location.replace('index.html');

        });

        //html code generator for code display
        var app = document.getElementById('app');

        var dataNodes = 2;
        var dataEntries = 2;
        var HTML = '';
        
        dataTitle = [ 'Water Pressure Gauge', 'Oil Flow Rate'];
        var dataType = ['Pressure', 'Moving Volume'];
        var dataAmount = ['123456 lbs/in^2','123445 in^3/sec'];

        HTML = '<table id="dataNode"> ';
        for (var i = 0; i < dataNodes; i++) {
            HTML += '<tr> <th id="title"> ' + dataTitle[i] + ' </th><th id="star"><img src="../common/EmptyStar.png" alt="Favorite Star" height="18px" class="favorite"></th></tr>';
            for (var c = 0; c < dataEntries; c++) {
                HTML += '<tr> <td> ' + dataType[c] + ' </td> <td id="dataAmount"> ' + dataAmount[c] + ' </td> </tr>';
            }
        }
        app.innerHTML = HTML + ' </table>';

        //Handle selecting favorites
        var favorites = document.getElementsByClassName('favorite');
        for (var k = 0; k < dataNodes; k++) {
            (function () {
                var favoriteStar = favorites[k];
                var dataNodeName = dataTitle[k];
                favorites[k].addEventListener('click', function () { favoriteItem(favoriteStar, dataNodeName); });
            }());
        }

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    //function toggles favorite's stars
    //TODO: add flag to indicate a foavorited item and have it display on the favorites tab  
    function favoriteItem(favorite, title) {
        if (favorite.src == "http://localhost:4400/common/EmptyStar.png") {
            favorite.src = "http://localhost:4400/common/FilledStar.png";
            //alert(title + ' has been favorited');
        }
        else {
            favorite.src = "http://localhost:4400/common/EmptyStar.png";
            //alert(title + ' has been unfavorited');
        }
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();