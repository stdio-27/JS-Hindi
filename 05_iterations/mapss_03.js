const  map_1=new Map()
map_1.set("IN", "India")
map_1.set("PAK", "pakistan")
map_1.set("AUS", "Australia")
map_1.set("NZ", "Newzeland")
map_1.set("IN", "India")

//console.log(map_1)

// for (const it of map_1) {
//     console.log(it)
// }

for (const [it] of map_1) {
    console.log(it)
 }

 for (const [it, Val] of map_1) {
    console.log(it, ":-", Val)
 }

//objects  can't be itreate like this they are not itertable