
// bill input, tip input, number of people div, and per person total div

let billinput = document.getElementById('billTotalInput')
let tipinput = document.getElementById('tipInput')
let noofpeople = document.getElementById('numberOfPeople')
let perPersonTotal = document.getElementById('perPersonTotal')



// Get number of people from number of people div
let peoplewegot = Number(noofpeople.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let billgot = Number(billinput.value)

  // get the tip from user & convert it into a percentage (divide by 100)
  let tippercentage = Number(tipinput.value) / 100

  // get the total tip amount
  let totaltip = billgot * tippercentage

  // calculate the total (tip amount + bill)
  let totalexpense = billgot + totaltip

  // calculate the per person total (total divided by number of people)
  let spiltbill = totalexpense / peoplewegot

  // update the perPersonTotal on DOM & show it to user
  perPersonTotal.innerText = `$${spiltbill.toFixed(2)}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  peoplewegot += 1

  // update the DOM with the new number of people
  noofpeople.innerText = peoplewegot


  // calculate the bill based on the new number of people
  calculateBill()

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (peoplewegot <= 1) {
    alert('Hey! You cannot have less than one person')
    return
  }

  // decrement the amount of people
  peoplewegot = peoplewegot-1

  // update the DOM with the new number of people
  noofpeople.innerText = peoplewegot


  // calculate the bill based on the new number of people
  
  calculateBill()

}