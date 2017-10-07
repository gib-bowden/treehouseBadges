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