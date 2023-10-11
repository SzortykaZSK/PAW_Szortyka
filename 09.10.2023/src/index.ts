import * as fs from 'fs';

import { Readable } from 'stream';


async function * generate() {
  for(let i =0; i<20; i++){
    yield Math.floor(Math.random()* (2137 - (-420) + 1)) + (-420);;
  }
}
const readable = Readable.from(generate());

async function witeToFile(){
const writeableStream = fs.createWriteStream('random-'+Date.now().toString()+'.txt');
console.log('utworzono plik i strumien');
  
  readable.on('data', (chunk:Buffer)=>{
    writeableStream.write(chunk.toString()+'\n');
  })
}

witeToFile();
