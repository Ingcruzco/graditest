export function normalizeCurrency(amount){
    if(typeof amount === 'string'){
        amount=parseFloat(String);
    }
    return (amount/100).toFixed(2);
}