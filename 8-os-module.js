const os = require("os")


// Info about current user
const user = os.userInfo()
console.log(user)

// the system uptime n seconds

console.log(`The system is ruuning for ${os.uptime()} seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS)