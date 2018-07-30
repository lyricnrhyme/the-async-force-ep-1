//   1. Get a list of all the films from the SWAPI, https://swapi.co/api/films/
//       - fill in `filmList` with a new `<li>` element for each `film`
//           - fill in each film's `filmTitle` with the title of the `film`
//           - create a new `<li>` in this film's `filmPlanets` for each `planet` that appeared in this `film`
//               - fill in each `planetTitle` with the name of the `planet`

let starWars = new XMLHttpRequest();
starWars.addEventListener("load", function(req) {
    // console.log("CHARACTERS: ", req.currentTarget.response)

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