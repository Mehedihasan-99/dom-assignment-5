document.getElementById('btn-donate-quota-movement')
    .addEventListener('click', function(){
        const donateInput = getInputValueById('input-donate-quota-movement')

        if(isNaN(donateInput)  || donateInput < 0){
            alert('Invalid Number');
            return;
        }

        const accountBalance = getTextValueById('account-balance');

        if(accountBalance < donateInput){
            alert('insufficient Balance');
            return ;
        }
        const newAccountBalance = accountBalance - donateInput;
        document.getElementById('account-balance').innerText = newAccountBalance;

        const donation = getTextValueById('total-donate-quota-movement');
        const newDonation = donation + donateInput;
        document.getElementById('total-donate-quota-movement').innerText = newDonation;

        // added history 
        const p = document.createElement('p');
        p.innerText = `Quota Movement: ${donation} Tk. Available Balance: ${newAccountBalance}`;
        
        document.getElementById('transaction-history-section').appendChild(p);
});