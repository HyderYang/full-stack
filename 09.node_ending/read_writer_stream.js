const fs = require('fs');
const zlib = require('zlib');

const rs = fs.createReadStream('1.png');
const gz = zlib.createGzip();
const ws = fs.createWriteStream('2.png.gz');

rs.pipe(gz).pipe(ws);

rs.on('error', (error) => {
    console.log(error);
});

rs.on('finish', () => {
   console.log('完成');
});
