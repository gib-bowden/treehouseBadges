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
