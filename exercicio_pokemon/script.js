for (i = 1; i <= 168; i++) {
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${i}`, (response) => {
        document.getElementById("table").innerHTML +=
            `
           <tr>
              <td>${response.id}</td>
              <td>${response.name}</td>
            <td><img src="${response.sprites.front_default}" alt="${response.name}"></td>
              <td>${response.height}</td>
              <td>${response.weight}</td>
           </tr>
        
        `;
    });
}