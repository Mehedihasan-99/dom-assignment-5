document.getElementById('btn-donate-feni')
    .addEventListener('click', function () {
        const donateInput = getInputValueById('input-donate-feni')

        if (isNaN(donateInput) || donateInput < 0) {
            alert('Invalid Number');
            return;
        }

        const accountBalance = getTextValueById('account-balance');

        if (accountBalance < donateInput) {
            alert('insufficient Balance');
            return;
        }
        else {
            my_modal_5.showModal();
        }

        const newAccountBalance = accountBalance - donateInput;
        document.getElementById('account-balance').innerText = newAccountBalance;

        const donation = getTextValueById('total-donate-feni');
        const newDonation = donation + donateInput;
        document.getElementById('total-donate-feni').innerText = newDonation;


        // added history 
        const dateTime = new Date();
        const div = document.createElement('div');
        div.classList.add('border', 'rounded-xl', 'p-10', 'text-center', 'text-2xl');
        div.innerHTML = `
            <p> ${donateInput} Taka is Donated for Donate for Flood at Feni, Bangladesh.</P>
            <p class="text-xl  bg-slate-300"> ${dateTime} </p>
            `


        document.getElementById('transaction-history-section').appendChild(div);
    });