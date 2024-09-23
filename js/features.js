// document.showSectionById(id){
    
//     document.getElementById('donate-section').classList.add('hidden');
//     document.getElementById('history-section').classList.add('hidden');

//     document.getElementById(id).classList.add('hidden');
// }

// document.getInputValueById(id){
//     const inputValue = document.getElementById(id).value;
//     const inputNumber = parseFloat(inputValue);
//     return inputNumber
// };

// input value by id 
function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber
};

//  innerText by id 
function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber
};