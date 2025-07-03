/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA71Wa2+rOBD9L/6adGvAPByp0gKB5kVCmndW+8EBQ5zwqjF5XeW/r0hatdLu9nalq80n5JgzZ2bOnOEHyHJW0j49g9YPUHB2IILWj+JcUNACVhVFlIMmCIkgoAVifzRYxYNgJa9H0oktpdg+ve6GW9iFcQ+/vnS8YRZxS4iZ8wSuTVBUm4QFXwAW51Wy7O89xT/OlJ0jFATXabWdhJvnpdHRD2wr7w9jXxHQewLXGpEwzrLYKbY0pZwkfXr2CePfoy97kD1D65yOl+sQjjxzfOq/6GZFqtP68dQ2GGsbuRFZqmt8jz4Z+UOXON5OiLnhBmHgh+tdOFzQ9iaWQ2j6scKp2ekEJ3inX7I4o2E3pJlg4vztusvtYdQ5KXz3qA7a0ezM/P4yPvqbtJDwdpIbqS8Zo3jpqnP4PeLjjK+CaEIHen+RDjqx581RkPBeZhU+5NzUFn2zY12CqBN8Ju7zd63s/0vdF1Z+6jYmKzSNj6fBTk8L52BE3cWwW43NJHJXnRGKLWlC9t+UzR6RITRUk/hssqoqNj+e0wmFQ6QVmRUPhI+sCeZ80Ff2H/SJqPhXLC8bTSrSjjt89ZC9H6g7uY9Sv8EcZy27Q22q7dTxCHIRz5/N+aXH7UDCHXE0Oixj28jC4yxe9huzMYPZMrkc+FCcKst8umW0p+duCFrStQk4jVkpOBEsz25nktwEJDxMaMCpuJUXZBNj0029yJ6poW/kxsxPiSAqZFthFYt1+3K8jJcNYxqL2RNogoLnAS1LGnZYKXJ+9mhZkpiWoPXHrVN10pymuaA9FtZyUnTNgFjXVEX7vfztuCWiJEXxW0YFaIKI56lHQUvwijbB7QUT6qoDHVvScFuXTIwl3bTltm4byHUdBdUppvegU5bSUpC0AC1JVyVVgZIsX5u/hofqQFfBmiM5tmSZuuq2kWnYpop113aha/xfPGQFWtjFqgkN3DYlzcFIQwqCuo2xhSz7ax4I/SoektO2oYRNFUuSjiwkI9u22gZUEGwjjH5SDw3+Kh6K5kLNhkjVLFWxbSy7kotULBuybjm67v6Eh3T9swkyehJ3f6mnQpGaIGK8FLOsKpKchO/m8/4nCYK8ysTknAV2/UA5aH06pkKwLC7rzKqM8GDLDtSu8wCtiCQlvTZBSA8soDUemL9eLjpP1Kn3Gh4fCPSnXsGO9WRt8+x+RZMkZGgb+YEQWX9AehQ8YN3AD4quIGgQVdewBupy3K29fudfnSZzg8bjyG07cXBh/QhPZ0E1xngoUHBzi7tFUE7D9ypvSLCvimm+p9kXuD0Ep4k440BDPJESq5ytV1HnyBITfsK9Ww9o/fhYp3Ye1ngD/0Vq64sFqLtVx/mbGloy+rsgkrsWsaQgVZEViCGU64v1eRNkpMYC/SrYkod9ldVE3rpUhwipICwpQQvYXjWvernj+BFMPe/52TJj045N8NHVdxe/u+TmgB/ni/ZLIZi9SrYzbBpkIG/X5eukj7r5Ge3H8+NY0QxWPv0DCGgBPIi8MjXcRzQ+hpPONtqnjdlztBugXSH0DOoF2QVHZ3Y54Xwb+4ds1AmVS6P3Og35y6oxpz3t5RTHPWFuOtNGclCzoG2Pn+pod3V9DtZIu6VP5fnL5pDhvTWELzNhV/bykVa9PcqKk4NzfK62Reir1SxYFOzZc0Ynl45eZ+bCTqWTmZwDfZ0stGe06ppHzz2Y8X2/3PZb8vZdwd6c/67FiNHbmn7rw0+7+TEW8Nr8hPG2+P9FetZCf4ykeQzJZhWnvdXcH/vPDOeLTX/PKrvvVT3HDZxh49Dl4FrPe5EQEeU8rT+jspDnN7HwvKrntptF+RfBbDPuvmeekFKYH17wD/YiGfdbPs+LDim3dRF8abWNapmfzaKYCCLerQWY9c/fVOD6F7BX1LsdCwAA';

const prefix = process.env.PREFIX || '.';

const author = process.env.OWNER_NAME || 'Keith';

const packname = process.env.PACKNAME || 'keith';

const dev = process.env.OWNER_NUMBER || '237680976536';

const DevKeith = dev.split(",");

const antibot = process.env.ANTIBOT || 'true';

const botname = process.env.BOTNAME || 'KEITH-MD';

const mode = process.env.MODE || 'private';

const sessionName = "session";

const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';

const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';

const timezone = process.env.TIMEZONE || 'Africa/cameroun';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  database,  
  botname, 
  mode,
  prefix,
  timezone,
  author,  
  url,
  gurl,
  antibot,
  packname,
  dev,
  DevKeith,  
  session,
};
