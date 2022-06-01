console.log(customers)

const customerList = document.querySelector('#customers')

for (let customer of customers) {
    //make the container that will hold the customer card
    let customerElement = document.createElement('div')
    customerElement.classList.add('customer')
    
    //make the customer card. call it an article to match the tachyons style
    let cardElement = document.createElement('article')
    cardElement.classList.add("mw5", "center", "bg-white", "br3", "pa3", "pa4-ns", "mv3", "ba", "b--black-10")

    //add image 
    let imageElement = document.createElement('img')
    imageElement.src = customer.picture.medium
    imageElement.alt = 'picture of the customer'
    imageElement.classList.add("br-100", "h3", "w3", "dib")
    cardElement.appendChild(imageElement)

    //add name, capitalize first letter of first and last names
    let nameElement = document.createElement('h1')
    nameElement.classList.add('f4')
    nameElement.innerText = `${customer.name.first.charAt(0).toUpperCase(customer.name.first) + customer.name.first.slice(1)} ${customer.name.last.charAt(0).toUpperCase(customer.name.last) + customer.name.last.slice(1)}`
    cardElement.appendChild(nameElement)

    //email
    let emailElement = document.createElement('div')
    emailElement.classList.add("lh-copy", "measure", "center", "f6", "black-30")
    emailElement.innerText = `${customer.email}`
    cardElement.appendChild(emailElement)
   
   //address line 1 
   let addressOneElement = document.createElement('div')
   addressOneElement.classList.add("lh-copy", "measure", "center", "f6", "black-70")
   addressOneElement.innerText = `${customer.location.street.number} ${customer.location.street.name}`
   cardElement.appendChild(addressOneElement)

   //address line 2
   let addressTwoElement = document.createElement('div')
   addressTwoElement.classList.add("lh-copy", "measure", "center", "f6", "black-70")
   let stateAbbr = (nameToAbbr(customer.location.state))
   addressTwoElement.innerText = `${customer.location.city}, ${stateAbbr} ${customer.location.postcode}`
   console.log(addressTwoElement.innerText)
   cardElement.appendChild(addressTwoElement)
   
   //DOB
   let birthdateElement = document.createElement('p')
   birthdateElement.classList.add("lh-copy", "measure", "center", "f6", "black-70")
    dobFormat = moment(customer.dob.date).format("MMM Do, YYYY")
   birthdateElement.innerText = `DOB: ${dobFormat}`
   cardElement.appendChild(birthdateElement)

   //customer since 
   let registrationDateElement = document.createElement('p')
   registrationDateElement.classList.add("lh-copy", "measure", "center", "f6", "black-70")
   registrationDateElement.innerText = `Customer since: ${moment(customer.registered.date).format("MMM Do, YYYY")}`
   cardElement.appendChild(registrationDateElement)

   //make the card show up on the page
    customerList.appendChild(cardElement)
}
