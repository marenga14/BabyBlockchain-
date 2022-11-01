 /**
 * @author : Julius marenga
 * @email : marengajulius@gmail.com
 * @title : Stage 4 and Stage 5 (Baby blockchain)
 * @contents : Operation, hash, block and blockchain class
 */





let signature = require ("./signature.js")
 


/* *************************   STAGE 4     ****************************************** */
 /*operation class*/
class operation {
    constructor(_sender, _receiver, _ammount, _signature) {
        this.sender = _sender;
        this.receiver = _receiver;
        this.ammount = _ammount;
        this.signature = _signature;
    }
    
    
    createOperation(_sender,_receiver,_ammount,_signature){
        let operation = new operation(_sender,_receiver,_ammount,_signature)
        return operation;
    }
    
    
verifyOperation(operation){
    let sender = operation.sender;
    if( operation.ammount <= sender.ammount){
        if(signature.verifyData(operation.signature,sender.publicKey))
        {
            return true;
        }

    }
    return false;

}
}








/* *******   transaction class  ********* */

 
class transaction {
        constructor(_setOperation,_nonce) {
           
            this.setOfOperation = _setOperation;
            this.nonce=_nonce;
            this.transactionId = toHash1(_setOperation);
        }

        // setOfOperation =[]
         createTransaction (_setOps,nonce) {
            // let newOp = operation.createOperation()
            // this.setOfOperation.push(newOp)
            let newTx = new transaction (_setOps,nonce);
            return newTx;
        
        }
    }
    












/* ************************        STAGE 5         ********************************* */
 
/*hash class*/
const {
    createHash
  } = await import('crypto');
  

 
function toHash1 (data){
    const hash = createHash('sha256');
    hash.update(data)
    hash.digest("hex")

    return hash;

}


/* **** block class  ******* */

class block {
    constructor(_prevHash) { 
       
        this.setOfTransactions = _setTxs;
        this.prevHash=_prevHash;
        this.blockId =toHash1(_setTxs);
    }
 setOfTransactions = [];

    createBlock (_setOfTxs,_prevHash){
        let newBlock = new block (_setOfTxs,_prevHash)
        return newBlock;
    }
}







/* * Blockchain class  *************** */
class blockchain {

    
         coinDatabase = new Map (['address', 'balance']);
         blockHistory = [];
         faucetCoins  = 400;
         txDatabase = [];



//creating the genesis block
    initBlockchain() {

       let genesisBlock  = block.createBlock("0","0");
       this.blockHistory.push(genesisBlock);


    }

    //get 0.1 test coins and update  the balance

    getTokenFromFaucet(address){
        this.coinDatabase[address] += 0.2;
        this.faucetCoins -= 0.2;



    }

    validateBlock (){

    }
}


 

 



