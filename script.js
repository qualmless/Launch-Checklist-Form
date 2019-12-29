// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   console.log("*********");


   form.addEventListener("submit", function() {
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");
      console.log("*****x****");
      console.log(pilotName);
      console.log(fuelLevel);



      // if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" ||cargoMass.value === "") {
      //    alert("All fields are required!");
      //    event.preventDefault();
      // }
      
      // else if (pilotName.value.type !== "string" || copilotName.value.type !== "string") {
      //    alert("Pilot Name and Co-Pilot Name should be strings!");
      //    alert(pilotName.value)
      //    event.preventDefault();
      // }

      // if ( (isNaN(fuelLevel)) || (isNaN(cargoMass)) ) {
      //    alert("fuel and cargo amounts should be numbers!");
      //    // console.log(fuelLevel.value)
      //    // console.log(fuelLevel)
      //    event.preventDefault();
      // }


   });

   // form.addEventListener("submit", function(event){
   //    let fuelLevel = document.querySelector("input[name=fuelLevel]");
   //    if (fuelLevel < 10000) {
   //       alert("fuel too low!");
   //       event.preventDefault();
   //    };
   // });
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
