let  keyGen  = require("./keyPair.js")
let keyPair = keyGen.generateKey();
let publicKey = keyPair.publicKey
let privateKey = keyPair.privateKey
 let signature ={}

let jws = require ("jws");
//test message
let message =" We did everything with the Almighty"
// message = Buffer.from(message,"base64")


//sign data
signature.signData = (message, privateKey)=>{
   return  jws.createSign({
        header:{alg:'HS256'},
        privateKey:privateKey,
        payload :message
    
    })


    
}
 


let sigMessage = signData (message,privateKey)
//verifying the verification
 signature.verifyData = ( sigMessage,publicKey)=>{
    
    return jws.createVerify({
        
        publicKey:publicKey,
        signature:sigMessage,
        algorithm:"HS256",

    }).on("done",function(verified,obj){
        console.log(verified)

    })



}

//teesting the verifying function
verifyData(sigMessage,publicKey)


module.exports = signature;