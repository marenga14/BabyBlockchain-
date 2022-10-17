
 

 let { createDiffieHellman } = require("crypto");
 var prime_length = 530
 ;
 var diffHell = createDiffieHellman(prime_length)
 diffHell.generateKeys()
 
const keyPair={

    privateKey:"",
    publicKey:""
}

function generateKey(){
    keyPair.privateKey = diffHell.getPrivateKey('hex');
    keyPair.publicKey = diffHell.getPublicKey('hex')

}


function printKey () {
generateKey ()
    
}

 printKey ()

 module.exports = keyPair;