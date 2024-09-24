document.getElementById('btn-donate-noakhali')
    .addEventListener('click', function(){
        const donateInput = getInputValueById('input-donate-noakhali')

        if(isNaN(donateInput)  || donateInput < 0){
            alert('Invalid Donated Amount');
            return;
        }

        const accountBalance = getTextValueById('account-balance');

        if(accountBalance < donateInput){
            alert('insufficient Balance');
            return ;
        }
        else {
            my_modal_5.showModal();
        }

        const newAccountBalance = accountBalance - donateInput;
        document.getElementById('account-balance').innerText = newAccountBalance;

        const donation = getTextValueById('total-donate-noakhali');
        const newDonation = donation + donateInput;
        document.getElementById('total-donate-noakhali').innerText = newDonation;


        // added history 
        const dateTime = new Date();
        const div = document.createElement('div');
        div.classList.add('border', 'rounded-xl', 'p-10', 'text-center', 'text-2xl');
        div.innerHTML = `
            <p> ${donateInput} Taka is Donated for Donate for Flood at Noakhali, Bangladesh.</P>
            <p class="text-xl bg-slate-200 rounded-xl"> ${dateTime} </p>
            `

        document.getElementById('transaction-history-section').appendChild(div);
});