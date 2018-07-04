import * as CryptoJS from "crypto-js";

class Block{
    static calculateBlockHash = (
        index:number, 
        previousHash:string, 
        timestamp:number, 
        data:string
    ):string => CryptoJS.SHA256(index+previousHash+timestamp+data).toString();

    static validateStructure = (aBlock:Block):boolean => 
        typeof aBlock.index==="number" && 
        typeof aBlock.hash==="string" && 
        typeof aBlock.previousHash==="string" && 
        typeof aBlock.data==="string" && 
        typeof aBlock.timestamp === "number";

    public index:number;
    public hash:string;
    public previousHash:string;
    public data:string;
    public timestamp:number;

    constructor(index:number,hash:string,previousHash:string,data:string,timestamp:number){
        this.index=index;
        this.hash=hash;
        this.previousHash=previousHash;
        this.data=data;
        this.timestamp=timestamp;
    }
}

const genesisBlock:Block = new Block(0,"202020","","hello",12345);

let blockchain:Block[]=[genesisBlock];

const getBlockchain = ():Block[] => blockchain;

const getLatestBlock = ():Block => blockchain[blockchain.length-1];

const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string):Block => {
    const previousBlock:Block =getLatestBlock();
    const newIndex:number = previousBlock.index + 1;
    const nextTimeStamp:number = getNewTimeStamp();
    const nextHash:string = Block.calculateBlockHash(
        newIndex,
        previousBlock.hash,
        nextTimeStamp,
        data
    );
    const newBlock:Block = new Block(
        newIndex,
        nextHash,
        previousBlock.hash,
        data,
        nextTimeStamp);

    return newBlock;
}

const isBlockValid = (candidateBlock:Block, previousBlock:Block):boolean => {
    
    return true;
}
export {}