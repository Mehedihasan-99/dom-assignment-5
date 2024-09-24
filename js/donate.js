// for show donate btn
document.getElementById('show-btn-donate')
    .addEventListener('click', function(){
        document.getElementById('donate-section').classList.remove('hidden');
        document.getElementById('show-btn-donate').classList.add('bg-btn-color');
        document.getElementById('transaction-history-section').classList.add('hidden');
        document.getElementById('show-btn-history').classList.remove('bg-btn-color');
    });

// for show history btn
document.getElementById('show-btn-history')
    .addEventListener('click', function(){
        document.getElementById('transaction-history-section').classList.remove('hidden');
        document.getElementById('show-btn-history').classList.add('bg-btn-color');
        document.getElementById('donate-section').classList.add('hidden');
        document.getElementById('show-btn-donate').classList.remove('bg-btn-color');
    });


// for show history btn
document.getElementById('show-btn-blog-page')
    .addEventListener('click', function(){
        console.log('clock')
        // document.getElementById('transaction-history-section').classList.remove('hidden');
        // document.getElementById('show-btn-history').classList.add('bg-btn-color');
        // document.getElementById('donate-section').classList.add('hidden');
        // document.getElementById('show-btn-donate').classList.remove('bg-btn-color');
    });