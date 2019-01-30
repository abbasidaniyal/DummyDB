const fs = require('fs')

var db = JSON.parse(fs.readFileSync('./db.json').toString())
var neDB = {
    tournaments: []
}

db.tournaments.forEach(item => {
    let startDate = item.date.split(' - ')[0]
    let endDate = item.date.split(' - ')[1]
    item['startDate'] = {
        date: startDate.split(' ')[0],
        month: startDate.split(' ')[1]
    } 
    item['endDate'] = {
        date: endDate.split(' ')[0],
        month: endDate.split(' ')[1]
    }
    item['year'] = endDate.split(' ')[2]

    neDB.tournaments.push( item )
})

console.log(JSON.stringify(neDB))

fs.writeFileSync('./db.json', JSON.stringify(neDB, null, 4))