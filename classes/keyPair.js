
 

 let { createDiffieHellman } = require("crypto");
 var prime_length = 530
 ;
 var diffHell = createDiffieHellman(prime_length)
 diffHell.generateKeys()
 
const keyPair={

    privateKey:"",
    publicKey:""
}

 exports.generateKey = () =>{
    keyPair.privateKey = diffHell.getPrivateKey('hex');
    keyPair.publicKey = diffHell.getPublicKey('hex')

    return keyPair;

}


 

 