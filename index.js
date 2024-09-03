let myCards = [];
let usedCad = [];

let storage = JSON.parse(localStorage.getItem('myCards'))
console.log(storage)
if(storage.length > 0){
    myCards = storage
 }
console.log(storage)
function saveToLocalStoragee(){
    localStorage.setItem('myCards', JSON.stringify(myCards)) 
}

console.log(myCards)
let pinCode = {
    MTN:'555',
    Glo:'123',
    Airtel:'126',
    '9mobile':'222',
};
// console.log(Math.floor(Math.random() * 403758594896))
// console.log(amount.value)


function generateCode () {
    

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }
    
    const randomNumber = Math.floor(Math.floor(Math.random() * 1037585946));
    
    document.getElementById('generatedCode').value = randomNumber;
    let codeGenerated = document.getElementById('generatedCode').value ;
    // console.log(generatedCode)
     
    // return codeGenerated
    saveToLocalStoragee()
}


function saveCode(){
    // let generatedCode = generateCode();
    let codeGenerated  = generatedCode.value;
    
    console.log(codeGenerated)
    let Network = network.value
    let Amount = amount.value;
    console.log(Network, Amount)
    // let statuse = false;
    let pin = `*${pinCode[Network]}*${codeGenerated}#`
    console.log(pin)
    let cardInfo = {
        Network,
        Amount,
        pin,
        codeGenerated,
        statuse:false,
        date: new Date().toLocaleTimeString(),
        used:'not yet used',

    }
    saveToLocalStoragee()

    console.log(pin)
    const checkingMatching = myCards.find(names => names.codeGenerated === codeGenerated);
if(checkingMatching){
   alert('this card alredy exist')
}else{
    if(codeGenerated !== ''){
        myCards.push(cardInfo)
        saveToLocalStoragee()

        display();
    }else{
        alert('generate your code')
    }
   
}
   
saveToLocalStoragee()

}

let cardTable = document.getElementById('cardTable');
display = () => {
    // let usedDate =  new Date().toLocaleDateString();
    cardTable.innerHTML = '';
    myCards.forEach((card, i) => {
        // console.log(cardTable.innerHtml );
        cardTable.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <th>${card.Amount}</>
            <td>${card.Network}</td>
            <td>${card.codeGenerated}</td>
            <td>${card.pin}</td>

            <td>${card.statuse ? 'used' : 'not used'}</td>
            <td>${card.date}</td>
            <td>${card.used}</td>
            <td><button style="background-color:red; border:none; color: white; padding: 5px 14px; border-radius:7px " onclick="deleCard(${i})">delete</button> </td>
         </tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
         
        `
    })
    saveToLocalStoragee()
}

deleCard = (i) =>{
    myCards.splice(i, 1);
    // saveToLocalStoragee()
    display();
}

function rechargeCarde() {

  let rechargeInputt = rechargeInput.value.trim();
   console.log(rechargeInputt)
   let checkingMatching = myCards.find(card => card.pin === rechargeInputt);

   if(checkingMatching){
    //     let checkingMatchinging = usedCad.find(card => card === rechargeInputt);
    // if(checkingMatchinging){
    //     alert('this card has alredy been used')
    //     return;
    // }else{
    //     alert('you have successfully load your card') 
    //     checkingMatching.statuse = true;
    //     checkingMatching.used = true;
    //     usedCad.push(rechargeInputt)
    //     display()
    // }
    
   
    
    if(checkingMatching.statuse){
        alert('this card has alredy been used')
    }else{
        // console.log(checkingMatching)
        alert(`you have successfully load your ${checkingMatching.Network} ${checkingMatching.Amount} card`) 
            checkingMatching.statuse = true;
            checkingMatching.used =new Date().toLocaleTimeString();
            usedCad.push(rechargeInputt)
            saveToLocalStoragee()
            display()
    }
   }else{
     alert('this code dose not exist');
     return;
   }

console.log(   saveToLocalStoragee)
   saveToLocalStoragee()
   display()

}
// console.log(saveToLocalStoragee)
// saveToLocalStoragee()
display()
