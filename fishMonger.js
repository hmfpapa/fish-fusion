const {boatInventory} = require('./fishingBoat.js')

const todaysInventory = boatInventory()
//console.log(todaysInventory)



const mongerInventory = (Inventory, chefsBudget) => {
  //create array to store fish objects after limiting the list to what the monger will buy
  let restaurantInventory = []
    
    for (const fish of Inventory){
        if 
        //limit max price of 7.5
        ((fish.price <= 7.50) && 
            //limit to quantity of at least 10
        (fish.amount >= 10) &&
        //limit max price of chefs budget
        (fish.price <= chefsBudget))
        {restaurantInventory.push(fish)}
    }
    for (const fish of restaurantInventory){
        //every fish returned should have a quantity of 10
        fish.amount = 10
    }
    return restaurantInventory
}
//invoke the function using todaysInvntory to access the boats inventory
const inv = mongerInventory(todaysInventory, 5)
console.log(inv)


module.exports = {mongerInventory}

