/** @format */

document.addEventListener("DOMContentLoaded", function () {
  // Your code here...

  // Create a User object with the following properties:
  // - firstName = string
  // - lastName = string
  // - age = integer
  // - occupation = string
  // - address = object, with number, street and city as properties
  // - friends = array
  // - hasCar = boolean
  const user = {
    firstName: "Tina",
    lastName: "Georgescu",
    age: 29,
    occupation: "lawyer",
    address: {
      houseNumber: 3,
      street: "Pan Peninsula Square",
      city: "London",
    },
    friends: ["Seb", "Stefan"],
    hasCar: true,
  };

  console.log(user.friends[0]);

  // Using the existing HTML elements, assign each element its respective property from your new object
  // The first one has been done for you

  // BASIC
  // name
  var nameElement = document.getElementById("name");
  nameElement.innerText = `${user.firstName} ${user.lastName}`;

  // age
  const ageElement = document.getElementById("age");
  ageElement.innerText = `${user.age}`;
  // occupation

  const occupationElement = document.getElementById("occupation");
  occupationElement.innerText = `${user.occupation}`;

  // hasCar
  const hasCarElement = document.getElementById("hasCar");
  hasCarElement.innerText = `${user.hasCar}`;

  // INTERMEDIATE
  // address number
  const adrsNumberElement = document.getElementById("adrsNumber");
  adrsNumberElement.innerText = `${user.address.houseNumber}`;
  // address street
  const adrsStreetElement = document.getElementById("adrsStreet");
  adrsStreetElement.innerText = `${user.address.street}`;
  // address city
  const adrsCity = document.getElementById("adrsCity");
  adrsCity.innerText = `${user.address.city}`;

  // ADVANCED
  // loop through the friends and append each one onto the correct element

  for (let i = 0; i < user.friends.length; i++) {
    const friendsElement = document.getElementById("friends");
    let addFriend = user.friends[i];
    addFriend = document.createElement("li");
    friendsElement.append(addFriend);
    let liElement = document.querySelectorAll("li")[i];
    console.log(liElement);
    liElement.innerHTML = user.friends[i];
  }
});
