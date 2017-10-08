"use strict";

const moment = require('../lib/node_modules/moment/moment.js');

const createDomString = (arr) => {
    let badgeString = "";
    arr.forEach((badge, index) =>{
        badgeString += 
        `<div class="badge-card magictime tinDownIn col-md-3">
            <div class="image-container">
                <img src="${badge.icon_url}">
            </div>
        <div class="text-container">
            <p class="badge-name">Badge: ${badge.name}</p>
            <p class="badge-date">Earned: ${moment(badge.earned_date).format('LLL')}</p> 
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