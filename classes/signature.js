let  {privateKey,publicKey}  = require("./keyPair.js")

let jws = require ("jws");
let message =" We did everything with the Almighty"
// message = Buffer.from(message,"base64")



function signData (message, privateKey){
   return  jws.createSign({
        header:{alg:'HS256'},
        privateKey:privateKey,
        payload :message
    
    })


    
}
 


let sigMessage = signData (message,privateKey)
//console.log(sigMessage)
function verifyData ( sigMessage,publicKey){
    
    return jws.createVerify({
        
        publicKey:publicKey,
        signature:sigMessage,
        algorithm:"HS256",

    }).on("done",function(verified,obj){
        console.log(verified)

    })



}

verifyData(sigMessage,publicKey)