fetch('data/prices.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#rental-table tbody');
        data.rentals.forEach(rental => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${rental.type}</td>
                <td>${rental.maxPersons}</td>
                <td>$${rental.halfDayReservation}</td>
                <td>$${rental.fullDayReservation}</td>
                <td>$${rental.halfDayWalkIn}</td>
                <td>$${rental.fullDayWalkIn}</td>
            `;
            tableBody.appendChild(row);
        });
    });
