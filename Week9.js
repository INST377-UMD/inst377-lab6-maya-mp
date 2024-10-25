
function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    } 

// setting coordinates as global variable so it can be used in second API call
const lat1 = getRandomInRange(30, 35, 3)
const long1 = getRandomInRange(-90, -100, 3)
const lat2 = getRandomInRange(30, 35, 3)
const long2 = getRandomInRange(-90, -100, 3)
const lat3 = getRandomInRange(30, 35, 3)
const long3 = getRandomInRange(-90, -100, 3)


function createMap() {
    var map = L.map('map').setView([38.98, -76], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 4,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    markerLocation1 = ([lat1, long1])
    markerLocation2 = ([lat2, long2])
    markerLocation3 = ([lat3, long3])

    var marker1 = L.marker(markerLocation1).addTo(map);
    var marker2 = L.marker(markerLocation2).addTo(map);
    var marker3 = L.marker(markerLocation3).addTo(map);

    document.getElementById('markerTextLat1').textContent = lat1
    document.getElementById('markerTextLat2').textContent = lat2
    document.getElementById('markerTextLat3').textContent = lat3
    document.getElementById('markerTextLong1').textContent = long1
    document.getElementById('markerTextLong2').textContent = long2
    document.getElementById('markerTextLong3').textContent = long3
}

function findLocality(latitude, longitude, divName) {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
        .then((res) => res.json())
        .then((resJson) => {
            const locality = resJson.locality
            document.getElementById(divName).textContent = locality
            })
        }

locality1 = findLocality(lat1, long1, 'textLocality1')
locality2 = findLocality(lat2, long2, 'textLocality2')
locality3 = findLocality(lat3, long3, 'textLocality3')

window.onload = createMap;