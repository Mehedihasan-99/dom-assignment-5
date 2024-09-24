document.getElementById('btn-donate-noakhali')
    .addEventListener('click', function(){
        const donateInput = getInputValueById('input-donate-noakhali')

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

        const donation = getTextValueById('total-donate-noakhali');
        const newDonation = donation + donateInput;
        document.getElementById('total-donate-noakhali').innerText = newDonation;

        // added history 
        const p = document.createElement('p');
        p.innerText = `${donateInput} Taka is Donated for Donate for Flood at Noakhali, Bangladesh.`;
        
        document.getElementById('transaction-history-section').appendChild(p);
});