document.getElementById("loadPlanetsButton").onclick = function() {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/') // Fetch planets data
    .then(response => response.json())
    .then(data => {
        let planetList = document.getElementById('planetList');
        planetList.innerHTML = '';

        // Filter and display only planets
        data.bodies.forEach(body => {
            if (body.isPlanet) {
                planetList.innerHTML += `<li>${body.englishName} - Diameter: ${body.meanRadius * 2} km</li>`;
            }
        });
    })
    .catch(error => console.error('Error fetching planets data:', error));
};
