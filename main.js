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

    customerList.appendChild(cardElement)

}


// {/* <div>
//       <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
//         <img src="" alt=""  class="br-100 h3 w3 dib"/>
//         <h1 class="f4">first name last name</h1>
//         <p class="lh-copy measure center f6 black-70">email</p>
//         <hr class="mw3 bb bw1 b--black-10">
//         <p class="lh-copy measure center f6 black-70">street number street name</p>
//         <p class="lh-copy measure center f6 black-70">street number street name</p>
//         <p class="lh-copy measure center f6 black-70">city state zipcode</p>
//         <p class="lh-copy measure center f6 black-70">
//           <p>DOB:</p>
//           date
//         </p>
//         <p class="lh-copy measure center f6 black-70">
//           <p>Customer Since:</p>
//           registration date
//         </p>
//       </article>
//     </div> */}