 
let signature = require ("./signature.js")
 


/* ************************************************************************ */
 //operation class
class operation {
    constructor(_sender, _receiver, _ammount, _signature) {
        this.sender = _sender;
        this.receiver = _receiver;
        this.ammount = _ammount;
        this.signature = _signature;
    }
}

function createOperation(_sender,_receiver,_ammount,_signature){
    let operation = new operation(_sender,_receiver,_ammount,_signature)
    return operation;
}


function verifyOperation(operation){
    let sender = operation.sender;
    if( operation.ammount <= sender.ammount){
        if(signature.verifyData(operation.signature,sender.publicKey))
        {
            return true;
        }

    }
    return false;

}


/* ************************************************************************ */
// hash class
const {
    createHash
  } = await import('crypto');
  

 
function toHash1 (data){
    const hash = createHash('sha256');
    hash.update(data)
    hash.digest("hex")

    return hash;

}


/* ************************************************************************ */
// transaction class
 
class transaction {
        constructor(_setOperation,_nonce) {
           
            this.setOfOperation = _setOperation;
            this.nonce=_nonce ;
            this.transactionId = toHash1(_setOperation);
        }
    }
    
function createTransaction (setOps,nonce) {
    let newTx = new transaction (setOps,nonce);
    return newTx;

}





/* ********************* block class  ******************************************** */

class block {
    constructor(_setTxs,_prevHash) {
       
        this.setOfTransactions = _setTxs;
        this.prevHash=_prevHash;
        this.blockId =toHash1(_setTxs);
    }
}


function createBlock (_setOfTxs,_prevHash){
    let newBlock = new block (_setOfTxs,_prevHash)
    return newBlock;
}




/* ************************** BLOCKCHAIN CLASS  ************************************* */
class blockchain {
    constructor() {
 
    }
}


