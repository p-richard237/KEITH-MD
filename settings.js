/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA81V247qNhT9lcovfYApuZEL0kgNIYRwCxBCYKqqchInmFxxHCAc8e9VYKYz0jlnOn1rnqzYXnvtvdde/gayHJdogmrQ+wYKgk+QomZJ6wKBHuhXYYgIaIMAUgh6wFjslK6quWQ3W2+n5LAb9w+0NaNDtCWbmVOY66NRH0brzGCewa0NispLsP8JIJS3tmhPeYUfhqw1n7TWjoRKC25dtWWcFt5hsQq307om2/MzuDWIEBOcRXqxRykiMJmgegEx+Rp9aC2Hq3IwHXkt7rC+jExyqF6GpigsnKOmSoPtdbE8SyMvNOKv0Wf7C3bT8bt+oemENbeLEW6ZVWxo1CJb/KJQ5JpRGB2SpHzQL3GUocAMUEYxrb9c93jcF32D9Jn1ZOCo0rkQbSbKHIScsZZq1TmYHxjbJ+dEd75GvBNaUvoin5ZkNRYuHEoJdmL/fMEdPBbL6cVdO8wqzStvw3wkviBvWon/S913WuucdP2SjE6mqlbFQD1eLTOo9wuxww35UzGZt/hJnHHp7Gv0D7OVuV0nvJ248mVBDT8a1q15AVsBMzQVHQfC2LJpp8Wt/Hf6kFbkM5Y+VqAEF6KXipNNN69G1oWJX8YbYaIY6226Y4QNb7huZ0p3l8HAwpY/MxZRqL3Ydj5nursxKcJNJm06iu8JzFWWduwFn5/vGcWoNgPQY29tQFCES0ogxXnW/OO6fBvA4GQjnyB6Ly9YBmPzfMbO3mI5+6q67vFw4tWkew03yRgJQd89eAUjiGUUPYM2KEjuo7JEwQiXNCf1DJUljFAJen/cO9UkTVCaUzTGAegBjpdEhZEZRlak38vfzntIS1gUv2WIgjYISZ7OEOhRUqE2uF8Qh31uoPRFVR7wmjzUtL7GD7sS21W6XFdWhCbF9BF0jVNUUpgWoMdKXZbvyhwv39r/Ex5/tkGGLvSh46b6PNsGISYldbKqSHIYvIn8bRP6fl5l1K4zX2sWiIDeh9+IUpxFZZNZlUHi7/EJaU0eoBfCpES3NgjQCfuowQN/LY+jSYRmNoUcV9Yeb8dXojYd3OfZ40jAMoLCiOGTEiD/SYCM9yQrHHpieUVhOQmKvIdAU46HhTR3fqroqiO6E1ci7mq4lDWXkZ29LviX/Zzod1U+pIgICt6q7EE/rop1HqPsE1zTujrcaVDMZlysx2ORxGZa2sq+7scfcB8SB71v77at5UGDt+K7hqhpS9B0q4nznRp6vPK9IDLYnAbJr5Ck6JcqoThtSpHcb7Myz3KyIigyy/OK2AA0G7d/WtXECRCFOClBD2gWXwodYaCbiDuUM8Pox5GqRU0v3lr7ZhmPkYzYzuqwKjZHfY5M7kp0f7KLhnC6I+Zpa1d8IdUrN3CEF2P2/AMQ0APjM6vPc3mNN7pk7epNMeSmPJp4sF9KusCU+7GqhztGOHvj0O2s8sGcqYgzXHHrwxAdjtZ2EW3OaUcM3AgyujPVE1cZLJ+baA+JfQyWq6usHo/2ygwfYWdtcbN6QY+WLJ756TrLHN7Lupe+R7OWzh6pdQr5NFUmAWNm9l6uA5lkOwVbilK9jGxtrppJxk32r2Z2N9Pk9RHDrzbzEGSI0f1NeG3Vv7b0fTaYW/sDxusr8xP99XfzkNkxcAP3gy2el+JlpKVm38XcpJ6yDKEikuNNtrGM1QHcmqEvEkjDnKSgB8rUg6ANSF41k2tmYf5JJE2NTDV6pJ3AkqrvbvADg+GUx6kFyYsRLPdNBQxBTatG6LVaFDaF9M1cgNp8fX0Obn8Dr0o0HIcJAAA=';

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
