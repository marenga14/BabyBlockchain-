let  {privateKey,publicKey}  = require("./keyPair.js")

let jws = require ("jws");
//test message
let message =" We did everything with the Almighty"
// message = Buffer.from(message,"base64")


//sign data
function signData (message, privateKey){
   return  jws.createSign({
        header:{alg:'HS256'},
        privateKey:privateKey,
        payload :message
    
    })


    
}
 


let sigMessage = signData (message,privateKey)
//verifying the verification
function verifyData ( sigMessage,publicKey){
    
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