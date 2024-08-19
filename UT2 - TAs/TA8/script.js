const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
  {
    name: "John",
    yearOfBirth: 1985,
    yearOfDeath: 2021,
  },
  {
    name: "Alice",
    yearOfBirth: 1990,
    yearOfDeath: 1950,
  },
  {
    name: "Bob",
    yearOfBirth: 1875,
    yearOfDeath: 1930,
  },
  {
    name: "Eve",
    yearOfBirth: 1900,
    yearOfDeath: 1975,
  },
];

  
function findTheOldest(people){
  let oldest;
  let ageOldest = 0;
  for (let i=0; i<people.length; i++) {
    if (people[i].yearOfDeath-people[i].yearOfBirth >= ageOldest) {
      oldest = people[i].name;
    }
  }
  console.log(oldest);
  return oldest;
}

function onButtonClick() {
  findTheOldest(people);
}