(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const createDomString = (arr) => {
    let badgeString = "";
    arr.forEach((badge, index) =>{
        badgeString += 
        `<div class="badge-card magictime swap col-md-3">
            <div class="image-container">
                <img src="${badge.icon_url}">
            </div>
        <div class="text-container">
            <p class="badge-name">${badge.name}</p>
            <p class="badge-date">${badge.earned_date}</p>
        </div>
        </div>`;
    });
    printToDom(badgeString); 
};

const printToDom = (str) => {
    $('#badgeHolder').html(str);
};

module.exports = {
    createDomString
};
},{}],2:[function(require,module,exports){
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
},{"./profile":4}],3:[function(require,module,exports){
"use strict"; 

require('./profile'); 
require('./events');
},{"./events":2,"./profile":4}],4:[function(require,module,exports){
"use strict"; 

const dom = require('./dom');

let profileData = {};

const callProfile = (userName) => {
    $.ajax({
        method: 'GET',
        url:`https://teamtreehouse.com/${userName}.json`})
        .done((data) => { 
        profileData = data; 
        dom.createDomString(profileData.badges);
    }).fail((error) => {
        console.log(error);
    }); 
};

const getProfileData = () => {
    return profileData; 
};


module.exports = {
    getProfileData,
    callProfile,
};

},{"./dom":1}]},{},[3]);
