var solarSystem = [
    { name: "Mercury", ringSystem: false, moons: [] },
    { name: "Venus", ringSystem: false, moons: [] },
    { name: "Earth", ringSystem: false, moons: ["The Moon"] },
    { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
    { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
    { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
    { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

console.log(solarSystem[4].moons);

console.log(solarSystem[7].moons[1]);

solarSystem[1].moons.push("Endor");
console.log(solarSystem[1].moons);

solarSystem.push({
  name: "Pluto",
  ringSystem: false,
  moons: ["Caron"]
});

 console.log(solarSystem
 );

console.log("opopopopopopopopopopopopopopopopopopo");

solarSystem.sort(function(a, b)) {
  return a.value - b.value;
}
