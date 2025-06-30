/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61V246rNhT9lcovfUimwy1cIo1UIJCQCxDIveoDAXNJwBDbJGGO8u8VyUzPVKedTqXyZGF77bX3Xnv5G0BlRuAENqD/DVQ4OwcUtkvaVBD0gVbHMcSgC6KABqAPioEY61OYlrudtPHPG38xMR3T7bh0LPrh3FSObrxfb7QNK7yAWxdU9T7Pwk8AzVHmaLKlGdX8KAgcdOfarI7ZeFXZmjvyjs4IGgcjm50HsxdwaxGDDGcoMaoUFhAH+QQ2bpDhr9FfT3XqeNFJUkujJyzqUO2km6uoGbGxklDSoZdiD418IiLyNfpbZzmmhG22+BBnr5rGrLzVdT047uRO2RzXkqLsx2mjoCAlD/okSxCMrAgimtHmy3UXJhyadIbs+mrbu3S/DS7R83k23u2z5yFkk1HkJ8/NuSd4+Rfrntrjk7NY+MWlg7fwMKATTzLOK2OfC3QkOAtxhobnzryH/b8Qd/G7Vo7/pe6Z7RZEsxbDyYkXkbWhm1redU7ViDfOuFdFtYeIiOzegVt+jb7BY0Yi43i7thQRwgT7aS3Go1OCJiQSOs3iWJjsFYed9Qf6Aa3xZyzlULzG60I6xkUJy51oadfDdegm5qHUp+yrgJ7HrHeyRPNYbE6C5ITXpZ/LDc/FuyjmTqm+FU0yvBIfZfBcNzTlV2NVfblndISNFYE+e+sCDJOMUBzQrET3f2wXBNHZhyGG9F5d4MIrs1O3S1Muds/McW4vl1NmH/iGYFbELHuep/HjmeIK9uUFdEGFyxASAqNRRmiJmxkkJEggAf3f7o1qc8awKCkcZxHoA46XRIWRGUZWpF/JL5c0oCSoql8QpKALYlwWMwj6FNewC+4XBrysMKosaqImqoYkcZIomeqA5RleY1RZazMsHkEXWQEJDYoK9Fmpx8iMwvLyrfv/8JB5WddNwRBEjhck3RiYPUNWe7LKagYjytLnPATu9nsXIHilDxm3xefZLogzTOgS1VVeBtG7xt83gzAsa0T9BoV6u4AY9D/8hpRmKCFtZjUKcJhmZ6i3eYB+HOQE3roggucshC0eiEYOL+3GC5/hJIOdO08zNBQvbQfTEr0diTiO7+3hU68nsU+CpOyfAlGJnsKQDWIIWYVlQtCW4+Eg7Z1/npLEUZGSl1tkJulESzJ2fkA+r0489S7KhxIhhtF7lfdBeKyrRXmE6BNcz12RHRpNL9Thd3Gu6NvNyCXhNc6XH3AfCgf9b99dWy+jFm8+MueKPjRA2602zg9q6PPij4JAQXsa5D8HuIA/1TnNCgi6IL/fZmWe5WRFUGSW5xWxBWg3bn+2qo0TQRpkOQF9oDs8EZ6FgTHeM9LMGg61ZaLqiQq+t/bdMR4jmbDP3sGrVifDhhb3io1wsk3MYLrF1nnj13wlNd46Wgq74ezlb0BAH2BuZWRpTuBrqqANO9BrDinh1ESdqcOez+KGeaV5xY1Uw4k6F350ofnGdy25Xh4X086rpHdCHTeqY8yWw0yOSXKB4mD+0kZ7SOxjMOSz0slmd5uZHtp5Y8VeEdGFZRx9vtybTgjXC3mbOI593seDy4a3CXcVsede4GpivIbhtWfVr7rUQb6tpNMlWTRuOLg8vOzupfnbG5a92cxDkHEG70/CW6v+taXfZ4O5dT9gvD0y/6A/bWvHzJYJVkE62GQ2Ea8jvbC0dcZNminLYCpC+bhCK2foHcCtHfoqD2hc4gL0ASn2AegCXNbt5FooLj+JpKuJpSaPtPOAUPW7G/yNwXC9xykXl9UoIGlbgaGgFnUr9EatKp8G9N1cgNp+mmGD2x95AV51hgkAAA==';

const prefix = process.env.PREFIX || '.';

const author = process.env.OWNER_NAME || 'Keith';

const packname = process.env.PACKNAME || 'keith';

const dev = process.env.OWNER_NUMBER || '237690800897';

const DevKeith = dev.split(",");

const antibot = process.env.ANTIBOT || 'true';

const botname = process.env.BOTNAME || 'KEITH-MD';

const mode = process.env.MODE || 'private';

const sessionName = "session";

const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';

const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';

const timezone = process.env.TIMEZONE || 'Africa/Nairobi';

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
