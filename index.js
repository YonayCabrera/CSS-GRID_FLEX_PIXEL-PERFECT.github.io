function initMap() {
    let map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 27.986870, lng: -15.393679},
        zoom: 17
    });
}

function firstToggleOfDropDown(){
    document.getElementById("first-dropdown").classList.toggle('openDropDown');
}

function secondToggleOfDropDown(){
    document.getElementById("second-dropdown").classList.toggle('openDropDown');
}

function thirdToggleOfDropDown(){
    document.getElementById("third-dropdown").classList.toggle('openDropDown');
}