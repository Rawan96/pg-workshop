// Add code below to connect to your database
const {Pool} = require('pg')
require('env2')('./config.env')

if(!process.env.DB_URL) throw new ERROR('No database url')

const options = {
    connectionString : process.env.DB_URL,
    ssl:true
}

module.exports = new Pool(options)