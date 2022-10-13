# BabyBlockchain
## Certificate management System `(CMS)`

### Overview
Create the blockchain system that will be used to issue the certificates from issuers with intergrity, 
also store them in the blockchain to protect them tempering;



### How it works / product feartures
```
1. Issuer signs the document with to produce the digital signature.
2. Issuer select the public key of the receiver and provide the ownership of the certificate by encripting it with the public key.
3. Receiver owner can claim the ownership of the certificate with his/her private key.
4. Verifier / anyone who wants to verify the certificate uses the digital signature and the certificate to check it's intergrity.

 ```

### Potential of the product
The cerificate Management can be used with the `Digital Identity system` to verify the documents and attachements before issuing the identities to people.


### Users of the system
> The issuer account that signs the document and produce the digital signature as well
   as encripting the document with the public key of the certificate owner.
   
   ##### Issuer could be :-
      Academic institution, 
      Government institutions eg tax certificate issuer 
      
 > The Receiver ( owner ) of the document, has the the mandate to decript the document using the private key and own the document.
 > Verifier, any one who wants to verify the intergrity of the document from the digital signature.

### Security concerns 

The important security concern is about the `issuers`, hence all the issuers are only authorised one with authorised addresses that will be pre-registered initially before everything starts.
