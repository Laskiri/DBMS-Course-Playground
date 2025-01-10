import raToSql from 'ra-to-sql'

let sql = raToSql.getSql("Sel[1 = 1](Instructor)")

console.log(sql)