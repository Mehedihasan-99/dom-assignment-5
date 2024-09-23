document.getElementById('btn-donate-noakhali')
    .addEventListener('click', function(){
        // event.preventDefault();
        const donateInput = getInputValueById('input-donate-noakhali')

        if(isNaN(donateInput)){
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
        console.log(newAccountBalance)

        const donation = getTextValueById('total-donate-noakhali');
        const newDonation = donation + donateInput;
        document.getElementById('total-donate-noakhali').innerText = newDonation;

        console.log(newDonation)

        // const accountBalance = document.getElementById('account-')


});