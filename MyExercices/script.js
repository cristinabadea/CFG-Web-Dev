/** @format */

// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "User 1", // isn't working like that, we don't have a name so it didn't save our user properly. Even if we use JSON.stringify won't work,
//   }), // we will need headers in order to tell FETCH that we are going to pass JSON. So we are going to pass an object and set the Content-Type to
// }) // application/json and it will work
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data));

//another video

function fetchData() {
  fetch("https://reqres.in/api/users").then((response) => {
    const data = response.json();
    console.log(data);
  }); // we will get a PROMISE
}

fetchData();
