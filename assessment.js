const nft=[];

function mintNFT(name, eyecolor, haircolor, country) {
    const metadata = {
        "name": name,
        "eyecolor": eyecolor,
        "haircolor": haircolor,
        "country": country
      };
      nft.push(metadata);
}

function listNFTs(){
    for(i=0;i<nft.length;i++){
    console.log(nft[i]);
}}

function getTotalSupply(){
    return nft.length;
}

mintNFT("Mehak","brown","black","India");
listNFTs();
const result= getTotalSupply();
console.log(result);