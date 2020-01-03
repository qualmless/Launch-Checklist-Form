// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
      let journeyArray = response.json().length;
      const div = document.getElementById("missionTarget");
         div.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[2].name}</li>
                  <li>Diameter: ${json[2].diameter}</li>
                  <li>Star: ${json[2].star}</li>
                  <li>Distance from Earth: ${json[2].distance}</li>
                  <li>Number of Moons: ${json[2].moons}</li>
               </ol>
               <img src="${json[2].image}">
               `
   });
});
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" ||cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      
      if ( (isNaN(fuelLevel.value)) || (isNaN(cargoMass.value)) ) {
         alert("fuel and cargo amounts should be numbers!");
         const div = document.getElementById("launchStatusCheck");
         div.innerHTML = `
         <h2 id="launchStatus" style="color:red;">Shuttle not ready for launch.</h2>
         `
         event.preventDefault();
      }

      if ( (!isNaN(pilotName.value)) || (!isNaN(copilotName.value)) ) {
         alert("Pilot Name and Co-Pilot Name should be strings!");
         const div = document.getElementById("launchStatusCheck");
         div.innerHTML = `
         <h2 id="launchStatus" style="color:red;">Shuttle not ready for launch.</h2>
         `
         event.preventDefault();
      }
      
      else {

         if((fuelLevel.value < 10000) && (cargoMass.value > 10000)){
            alert("Not enough fuel for journey.");
            
            const div = document.getElementById("launchStatusCheck");
               div.innerHTML = `
               <h2 id="launchStatus" style="color:red;">Shuttle Not Ready to Launch.</h2>
               <div  id="faultyItems" style="visibility: visible">
                  <ol id="launchList">
                     <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
                     <li id="copilotStatus">Co-Pilot ${copilotName.value} is ready for launch.</li>
                     <li id="fuelStatus">Fuel is too low for launch.</li>
                     <li id="cargoStatus">Cargo mass is too heavy for launch.</li>
                  </ol>
               
                  `
                  event.preventDefault();
            } //End of 1st condition of launch
         else if((fuelLevel.value > 10000) && (cargoMass.value < 10000)){
            alert("Shuttle Is Ready to Launch.");
            // launchReady = true;
                  
            const div = document.getElementById("launchStatusCheck");
               div.innerHTML = `
               <h2 id="launchStatus" style="color:green;">Shuttle ready to launch.</h2>
               <div id="faultyItems" style="visibility: visible">
                  <ol id="launchList">
                     <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
                     <li id="copilotStatus">Co-Pilot ${copilotName.value} is ready for launch.</li>
                     <li id="fuelStatus">Fuel is sufficient for launch.</li>
                     <li id="cargoStatus">Cargo mass is sufficient for launch.</li>
                  </ol>
               `
               event.preventDefault();
            }//End of 2nd condition

            
         else if((fuelLevel.value > 10000) && (cargoMass.value > 10000)){
            alert("Cargo too heavy to launch.");
            const div = document.getElementById("launchStatusCheck");
               div.innerHTML = `
               <h2 id="launchStatus" style="color:red;">Shuttle not ready to launch.</h2>
               <div id="faultyItems" style="visibility: visible">
                  <ol id="launchList">
                     <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
                     <li id="copilotStatus">Co-Pilot ${copilotName.value} is ready for launch.</li>
                     <li id="fuelStatus">Fuel is sufficient for launch.</li>
                     <li id="cargoStatus">Cargo mass too heavy for launch.</li>
                  </ol>
               `
               event.preventDefault();
            }//End of 3rd condition


         else if((fuelLevel.value < 10000) && (cargoMass.value < 10000)){
            alert("Shuttle not ready to launch.");
               const div = document.getElementById("launchStatusCheck");
                  div.innerHTML = `
                     <h2 id="launchStatus" style="color:red;">Shuttle not ready to launch.</h2>
                     <div id="faultyItems" style="visibility: visible">
                        <ol id="launchList">
                           <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
                           <li id="copilotStatus">Co-Pilot ${copilotName.value} is ready for launch.</li>
                           <li id="fuelStatus">Fuel is too low for launch.</li>
                           <li id="cargoStatus">Cargo mass is sufficient for launch.</li>
                        </ol>
                  `
               event.preventDefault();
            }//End of 4th condition
      }
   });
});