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
//       - fill in `person4HomeWorld` with the value of Person's `homeworld` (name)
    console.log("test", req.currentTarget.response)
    document.getElementById("person4Name").innerHTML = "Name: " + JSON.parse(req.currentTarget.response).name;
})

starWars.open("GET", "https://swapi.co/api/people/");
starWars.send();