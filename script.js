window.addEventListener("load", function() {
   let targetOfMission = document.getElementById("missionTarget");
   let planetIndex = Math.floor(Math.random() * 7);
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function (json) {
         targetOfMission.innerHTML = `
         
           <h2>Mission Destination</h2>
           <ol>
              <li>Name: ${json[planetIndex].name}</li>
              <li>Diameter: ${json[planetIndex].diameter}</li>
              <li>Star: ${json[planetIndex].star}</li>
              <li>Distance from Earth: ${json[planetIndex].distance}</li>
              <li>Number of Moons: ${json[planetIndex].moons}</li>
            </ol>
            <img src="${json[planetIndex].image}">`;
      });
   });

     let form = document.querySelector("form");
     form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let statusOfLaunch = document.getElementById("launchStatus");
          document.getElementById("launchStatus").style.color = "black";
      let statusOfPilot = document.getElementById("pilotStatus");
          document.getElementById("pilotStatus").innerHTML = `Pilot: ${pilotName.value} ready`;
      let statusOfCopilot = document.getElementById("copilotStatus");
          document.getElementById("copilotStatus").innerHTML = `Co-Pilot: ${copilotName.value} ready`;
      let itemsFaulty = document.getElementById("faultyItems");
          itemsFaulty.style.visibility = "hidden";
      let statusOfFuel = document.getElementById("fuelStatus");
          document.getElementById("fuelStatus").style.color = "black";
      let statusOfCargo = document.getElementById("cargoStatus");

        event.preventDefault();
      if(pilotNameInput.value === "") {
         alert("All fields required AND Names must be alphabetic and fuel and cargo Mass must be numbers");
         document.getElementById("faultyItems").innerHTML = "Pilot Not Ready";
         document.getElementById("pilotStatus").style.color = "red";
         event.preventDefault();
      } 
      else if(copilotNameInput.value === "") {
           alert("All fields required AND Names must be alphabetic and fuel and cargo Mass must be numbers");
           document.getElementById("faultyItems").copilotStatus.innerHTML = "Co-Pilot Not Ready";
           document.getElementById("copilotStatus").style.color = "red";
           event.preventDefault();
      }
      else if(isNaN(fuelInput.value) || isNaN(cargoMassInput.value))  {
           alert("All fields required AND Names must be alphabetic and fuel and cargo Mass must be numbers");
           event.preventDefault();
      }
      if(fuelInput.value < 10000 || isNaN(fuelInput.value)) {
          itemsFaulty.style.visibility = "visible";
          statusOfFuel.innerHTML = "Not enough fuel for the journey.";
          statusOfLaunch.innerHTML = "Shuttle not ready for launch.";
          document.getElementById("launchStatus").style.color = "red";
          document.getElementById("fuelStatus").style.color = "red";
      }
      else if(cargoMassInput.value > 10000) {
         itemsFaulty.style.visibility = "visible";
         statusOfCargo.innerHTML = "Too much mass for the shuttle to take off";
         statusOfLaunch.innerHTML = "Shuttle not ready for launch";
         document.getElementById("cargoStatus").style.color = "red";
         document.getElementById("launchStatus").style.color = "red";
      }else {
         itemsFaulty.style.visibility = "visible";
         itemsFaulty.style.color = "green";
         document.getElementById("fuelStatus").style.color = "green";
         statusOfLaunch.innerHTML = "shuttle is ready for launch";
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("pilotStatus").innerHTML = `Pilot: ${pilotName.value} ready`;
         document.getElementById("copilotStatus").innerHTML = `Co-Pilot: ${copilotName.value} ready`;

      }
});
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
