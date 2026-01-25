function servicepage(){
    const service = document.getElementById("service").value;
    const district = document.getElementById("district").value;

    if(!service || !district){
      alert("Please select both service and district");
      return;
    }

    if(service === "citizenship"){
      window.location.href = "citizenship.html";
    }
    else if(service.toLowerCase() === "nic"){
      window.location.href = "nic.html";
    }
    else{
      alert("Service page not yet available.");
    }
    
  }
