let signature = require ("./signature.js")
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


