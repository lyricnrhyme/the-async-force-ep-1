let starWars = new XMLHttpRequest();
starWars.addEventListener("load", function() {
    //PERSON 4
    person4 = new XMLHttpRequest();
    person4.addEventListener("load", function(req4) {
        //NAME
        document.getElementById("person4Name").innerHTML = "Name: " + JSON.parse(req4.currentTarget.response).name;
        //HOME WORLD
        let homeWorldLink = JSON.parse(req4.currentTarget.response).homeworld;
        homeWorld4 = new XMLHttpRequest();
        homeWorld4.addEventListener("load", function(req) {
            document.getElementById("person4HomeWorld").innerHTML = "Home Planet: " + JSON.parse(req.currentTarget.response).name;
        })
        homeWorld4.open("GET", homeWorldLink);
        homeWorld4.send();
    })
    person4.open("GET", "https://swapi.co/api/people/4");
    person4.send();
    
    //PERSON 14
    person14 = new XMLHttpRequest();
    person14.addEventListener("load", function(req14) {
        //NAME
        document.getElementById("person14Name").innerHTML = "Name: " + JSON.parse(req14.currentTarget.response).name;
        //SPECIES
        let speciesLink = JSON.parse(req14.currentTarget.response).species;
        species14 = new XMLHttpRequest();
        species14.addEventListener("load", function(req) {
            document.getElementById("person14Species").innerHTML = "Species: " + JSON.parse(req.currentTarget.response).name;
        })
        species14.open("GET", speciesLink);
        species14.send();
    })
    person14.open("GET", "https://swapi.co/api/people/14");
    person14.send();
})
starWars.open("GET", "https://swapi.co/api/people/");
starWars.send();

//FILMS
let swFilms = new XMLHttpRequest();
swFilms.addEventListener("load", function(req) {
    for (let i=0; i<JSON.parse(req.currentTarget.response).results.length; i++) {
        let filmTitle = document.createElement("li");
        filmTitle.className = "filmTitle";
        filmTitle.innerHTML = "Episode: " + JSON.parse(req.currentTarget.response).results[i].title;
        document.body.appendChild(filmTitle);

        let filmPlanets = document.createElement("ul");
        filmPlanets.className = "filmPlanets";
        filmPlanets.innerHTML = "Planets: "
        filmTitle.appendChild(filmPlanets);

        for (let j=0; j<JSON.parse(req.currentTarget.response).results[i].planets.length; j++) {            
            let planetsLink = JSON.parse(req.currentTarget.response).results[i].planets[j];
            planet = new XMLHttpRequest();
            planet.addEventListener("load", function(req) {
                let planetName = document.createElement("li");
                planetName.className = "planetName";
                planetName.innerHTML = JSON.parse(req.currentTarget.response).name;
                filmPlanets.appendChild(planetName);
            })
            planet.open("GET", planetsLink);
            planet.send();
        }
    }
})
swFilms.open("GET", "https://swapi.co/api/films/");
swFilms.send();