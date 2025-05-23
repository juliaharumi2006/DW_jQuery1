// for(let id=1;id<=168;id++){
//     $.getJSON("https://pokeapi.co/api/v2/pokemon/${id}"{

//     })
// }

for (i = 1; i <= 168; i++) {
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${i}`, (response) =>{
        document.getElementById("table").innerHTML +=
        `
           <tr>
              <td>${response.id}</td>
              <td>${response.name}</td>
              <td>${response.sprite}</td>
              <td>${response.height}</td>
              <td>${response.peso}</td>
           </tr>

              

        `
    });
};

