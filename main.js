//crear una función con 3 parámetros.
// Es decir, recibe 3 argumentos: (list-beers, part-name-chosen, IBU-chosen). 
//La función debe: Filtrar las cervezas de la lista de cervezas con aquellos nombres 
//que incluyan la parte-nombre-elegido + cuyo IBU sea mayor que el IBU-elegido.
//Devuelve el subconjunto resultante de cervezas.


function filterBeers(listBeers,partNameChosen,ibuChosen){

let arrayCervezas = listBeers.filter(item =>item.name.includes(partNameChosen) && item.ibu > ibuChosen)

    // console.log(arrayCervezas);
return arrayCervezas
}


console.log(filterBeers(beers,"be",10));

// item.title === partNameChosen.abv  && item.ibu > ibuChosen.ibu