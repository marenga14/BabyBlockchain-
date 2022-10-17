
let  keyGen  = require("./keyPair.js")
let signature = require ("./signature.js")
let allAccounts = []

let account = {
    accountID: "",
    wallet: [],
    balance: 0,

 

 genAccount: ()=>{
    let keyPair = keyGen.generateKey();
    account = {
        accountID: keyPair.publicKey,
        wallet:[keyPair],
        balance:0
    }
allAccounts.push (account);
},

addKeyPairToWallet: (accountID)=>{
    allAccounts.forEach(account=>{
if(account.accountID == accountID){
    account.wallet.push (keyGen.generateKey())
}
    })
},


updateBalance:  (balance)=>{
    account.balance +=balance;

},


createPaymentOp: (account,ammount,keyIndex)=>{



},

getBalance: ()=>{
    return account.balance;
    
},


printBalance:()=>{
    console.log(getBalance())

},

signData :(data,keyIndex)=>{
    let keyPair = account.wallet[keyIndex]
    signature.signData(data,keyPair.privateKey)

}

}

module.exports = account;