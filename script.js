// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   // console.log("*********");


   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" ||cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      
      if ( (isNaN(fuelLevel)) || (isNaN(cargoMass)) ) {
         alert("fuel and cargo amounts should be numbers!");
         event.preventDefault();
      }

      if ( (!isNaN(pilotName.value)) || (!isNaN(copilotName.value)) ) {
         alert("Pilot Name and Co-Pilot Name should be strings!");
         event.preventDefault();
      }

      if((fuelLevel.value < 10000) && (cargoMass.value > 10000)){
         alert("Not enough fuel for journey.");
         
         const div = document.getElementById("launchStatusCheck");
            div.innerHTML = `
            <h2 id="launchStatus" style="color:red;">Shuttle Not Ready for Launch</h2>
            <div  id="faultyItems" style="visibility: visible">
                <ol>
                    <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
                    <li id="copilotStatus">Co-Pilot ${coPilotName.value} is ready for launch.</li>
                    <li id="fuelStatus">Fuel is too low for launch.</li>
                    <li id="cargoStatus">Cargo mass is too heavy for launch.</li>
                </ol>
                `
                event.preventDefault();
         } //End of 1st condition of launch
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
