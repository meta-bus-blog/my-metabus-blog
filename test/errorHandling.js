function withdraw(amount, account) {
    if( amount > account.balance){
        throw new Error('잔고 부족')
    }
    account.balance -= amount
    console.log(`현재 잔고 ${account.balance} 남음`)
}

const account =  { balance: 1000}

try{
    withdraw(2000, account)
    console.log('1')
}catch(e){
    console.log('error!!', e)
}