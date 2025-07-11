// Fetch vehicles from backend and display
fetch("http://localhost:3000/api/vehicles")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("vehicle-list");
        data.forEach(vehicle => {
            const div = document.createElement("div");
            div.className = "vehicle";
            div.innerHTML = `
        <h3>${vehicle.name}</h3>
        <p>Type: ${vehicle.type.name}</p>
        <p>Price/Day: ₹${vehicle.pricePerDay}</p>
        <p>Available: ${vehicle.available ? 'Yes' : 'No'}</p>
        <a href="booking.html?vehicleId=${vehicle.id}">
        <button>Book Now</button>
        </a>
      `;
            container.appendChild(div);
        });
    });

function book(vehicleId) {
    alert("Booking for vehicle ID: " + vehicleId);
    // Later we'll connect this to a booking form
}
