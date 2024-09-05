fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const vehicles = data.vehicles;


    function displayVehicles() {
        const container = document.getElementById('vehicleContainer')
    
        container.innerHTML = ""
        const vehicle = vehicles
        for (const key in vehicles) {
        if (vehicles.hasOwnProperty(key)) {
            const vehicle = vehicles[key]
    
            const vehicleDiv = document.createElement('div')
            vehicleDiv.classList.add('vehicle')
    
            const title = document.createElement('h2')
            title.textContent = `Vehicle: ${key}`
            vehicleDiv.appendChild(title)

            const service = document.createElement('p')
            service.textContent = `Service: ${vehicle.service}`
            vehicleDiv.appendChild(service)

            const weapon = document.createElement('p')
            weapon.textContent = `Main Armament: ${vehicle.weapon.caliber}${vehicle.weapon.unit}`
            vehicleDiv.appendChild(weapon)

            const armor = document.createElement('p')
            armor.textContent = `Front Armor: ${vehicle['front-armor'].thickness ? vehicle['front-armor'].thickness + 'mm' : 'N/A'}`
            vehicleDiv.appendChild(armor)

            const armorType = document.createElement('p') 
            armorType.textContent =`Armor Type: ${vehicle['armor-type']}`
            vehicleDiv.appendChild(armorType)

            const image = document.createElement('img')
            image.src = vehicle.image
            image.alt = `image of ${key}`
            image.classList.add('vehicle-image')
            vehicleDiv.appendChild(image)
    
            container.appendChild(vehicleDiv)
        }
        }
    }
    
    displayVehicles()
  
  
  
  
  })
  .catch(error => console.error('Error fetching JSON:', error));