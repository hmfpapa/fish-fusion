const {mongerInventory} = require('./fishMonger.js')
const {boatInventory} = require('./fishingBoat.js')

//access boat inventory to input as parameter for monger
let inv = boatInventory()
//invoke monger inventory using boat inventory & chefs budget as parameters
let mongerInv = mongerInventory (inv, 7)

//build HTML version of menu
//input chef budget which is included as a parameter in the mongerInventory function
//don't need amount of fish 
//insert fish name into menu following the "soup, sandwich, grilled" format

const fishMenu = (dailyMongerInventory) => {
   let menuHTML = ""
    for (const fish of dailyMongerInventory){
     menuHTML += `<h1> Menu </h1> \n
     <article class = "menu"> \n
     \t <h2> ${fish.species} </h2> \n
     \t <section class = "menu_item">${fish.species} Soup</section> \n
     \t <section class = "menu_item">${fish.species} Sandwich</section> \n
     \t <section class = "menu_item">Grilled ${fish.species}</section> \n
     </article>`
    }
    return menuHTML
}

let fishMenuHTML = fishMenu(mongerInv)
console.log(fishMenuHTML)