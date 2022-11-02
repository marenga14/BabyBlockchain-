 /**
 * @author : Julius marenga
 * @email : marengajulius@gmail.com
 * @title : Stage 4 and Stage 5 (Baby blockchain)
 * @contents : Operation, hash, block and blockchain class
 */





let signature = require ("./signature.js")
let account = require ("./Account.js")
 


/* *************   STAGE 4     ****************************************** */
 /*operation class*/
class operation {
    constructor(_sender, _receiver, _ammount, _signature) {
        this.sender = _sender;
        this.receiver = _receiver;
        this.ammount = _ammount;
        this.signature = _signature;
    }
    
    setOfOperation = []
    createOperation(_sender,_receiver,_ammount,_signature){
        let operation = new operation(_sender,_receiver,_ammount,_signature)
        this.setOfOperation.push (operation)
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

        setOfTransactions =[]
         createTransaction (_setOps,nonce) {
            // let newOp = operation.createOperation()
            // this.setOfOperation.push(newOp)
            let newTx = new transaction (_setOps,nonce);
            this.setOfTransactions.push(newTx)
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
    constructor(_setTxs,_prevHash) { 
       
        this.setOfTransactions = _setTxs;
        this.prevHash=_prevHash;
        this.blockId =toHash1(_setTxs);
    }
    //   setOfTransactions = transaction.setOfTransactions;

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

    validateBlock (newBlock){

        //check the previous hash value ( prevHash)
        let isPrevHash = false;
        if(this.blockHistory [this.blockHistory.length-1].blockId == newBlock.prevHash){

         isPrevHash = true;

        }


        // check if the tx isn't added to the history
        let isnotAddedToHistory = false
        transaction.setOfTransactions.foreEach (tx=>{
            if(newBlock.setOfTransactions != tx){
                isnotAddedToHistory = true;
            }
        })
       

        // check operations in the transaction and return false for anyexisting invalid but continues if all are valid.

        
        let transactions = newBlock.setOfTransactions;

        transactions.foreEach(tx=>{
            let operations = tx.setOfOperation;
            operations.foreEach(op=>{
                if(!operation.verifyOperation(op)){
                    return false
                }
            })
        })

// conclusion where true is returned for valid block and viceversa
        if (isPrevHash && isnotAddedToHistory ){
            return true
        }

        return false

    }
}


 

 



