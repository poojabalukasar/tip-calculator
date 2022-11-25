const calculateTip = () => {
    let amount = document.getElementById("bill_amount").value;

    let tipPercentage = document.getElementById("tip_percentage").value;
      
    
    // If user not provide correct input

     if(amount === '' ||amount === 0 || amount < 0){
        document.getElementById("billEmpty").innerHTML = "Please Enter the Valid Bill Amount";
        return;
     }
     

    if(tipPercentage === ''|| tipPercentage === 0 || tipPercentage < 0){
    document.getElementById("tipEmpty").innerHTML ="Please Enter Tip";
     return;
    }

    let totalTip = amount * (tipPercentage / 100);

    let numPeople = document.getElementById("numPeople").value;

     if(numPeople === 0 || numPeople === '' || numPeople < 0){
      document.getElementById("zeroPeople").innerHTML = "Enter the Valid Number";
        return;
    }

    let tipPerPerson = totalTip / numPeople;

    let toatlBill = parseInt(totalTip) + parseInt(amount);

   
    document.getElementById("tip_amount").innerHTML = tipPerPerson;

    document.getElementById("total_bill").innerHTML = toatlBill;

}

// Reset the all input fields

 const btn = document.getElementById("resetBtn");
 btn.addEventListener('click',function reset(){

    const bill_amount = document.getElementById("bill_amount");
    bill_amount.value = '';

    const billEmpty = document.getElementById("billEmpty");
    billEmpty.innerHTML = '';

    const tip_percentage = document.getElementById("tip_percentage");
    tip_percentage.value = '';

    const tipEmpty = document.getElementById("tipEmpty");
    tipEmpty.innerHTML = '';

    const numPeople = document.getElementById("numPeople");
    numPeople.value = '';

    const zeroPeople = document.getElementById("zeroPeople");
    zeroPeople.innerHTML = '';

    const tip_amount = document.getElementById("tip_amount");
    tip_amount.innerText = '0.00';

   const total_bill =  document.getElementById("total_bill");
   total_bill.innerText = '0.00';

 });




