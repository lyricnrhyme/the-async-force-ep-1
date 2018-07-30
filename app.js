//   1. Get a Person object from the SWAPI, https://swapi.co/api/people/14/
//       - fill in `person14Name` with the value of Person's `name`
//       - fill in `person14Species` with the value of Person's (first) `species` (name)
//   1. Get a list of all the films from the SWAPI, https://swapi.co/api/films/
//       - fill in `filmList` with a new `<li>` element for each `film`
//           - fill in each film's `filmTitle` with the title of the `film`
//           - create a new `<li>` in this film's `filmPlanets` for each `planet` that appeared in this `film`
//               - fill in each `planetTitle` with the name of the `planet`



let starWars = new XMLHttpRequest();
starWars.addEventListener("load", function(req) {
    // 1. Get a Person object from the SWAPI, https://swapi.co/api/people/4/
//       - fill in `person4Name` with the value of Person's `name`
//       - fill in `person4HomeWorld` with the value of Person's `homeworld` (name)
    console.log("CHARACTERS: ", req.currentTarget.response)

    //PERSON 4
    person4 = new XMLHttpRequest();
    person4.addEventListener("load", function(req4) {
        //NAME
        document.getElementById("person4Name").innerHTML = "Name: " + JSON.parse(req4.currentTarget.response).name;

        //HOME WORLD
        let homeWorldLink = JSON.parse(req4.currentTarget.response).homeworld;
        homeWorld = new XMLHttpRequest();
        homeWorld.addEventListener("load", function(req) {
            document.getElementById("person4HomeWorld").innerHTML = "Home Planet: " + JSON.parse(req.currentTarget.response).name;
        })
        homeWorld.open("GET", homeWorldLink);
        homeWorld.send();

    })
    person4.open("GET", "https://swapi.co/api/people/4");
    person4.send();
})

starWars.open("GET", "https://swapi.co/api/people/");
starWars.send();