"use strict";

const profile = require('./profile');


//Show badges on the page

$('#showButton').click(() => {
    let userName = $('#userNameInput').val();
    if (userName) {
        profile.callProfile(userName);
    }      
});


$('#clearButton').click(() => {
    $('#badgeHolder').empty();
});


$('body').on('click','.badge-card img', (e) => {
    if (e.target.classList.contains("perspectiveLeft")) { 
        $(e.target).removeClass("magictime perspectiveLeft"); 
        $(e.target).addClass("magictime perspectiveLeftReturn"); 
    } else if (e.target.classList.contains("perspectiveLeftReturn")) {
        $(e.target).removeClass("magictime perspectiveLeftReturn"); 
        $(e.target).addClass("magictime perspectiveLeft");
    } else {
        $(e.target).addClass("magictime perspectiveLeft");
    }   
});

module.exports = {}; 