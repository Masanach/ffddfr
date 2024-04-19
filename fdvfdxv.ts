abstract class Publisher {
    title: string 
    author: string
    pubYear: number
    copies: number

    static count: number = 0
    constructor(){
        Publisher.count++
    }
get getTitle(){
 return this.title
}
set setTitle(value: string){
    this.title = value
}
get getAuthor(){
    return this.author
}
set setAuthor(value: string){
    this.author = value
}
get getPubYear(){
 return this.pubYear
}
set setPubYear(value: number){
    this.pubYear = value
}
get getCopies(){
 return this.copies
}
set setCopies(value: number){
    this.copies = value
}
}
class Book extends Publisher implements Reception {
 pages: number
 delivery(item: Publisher){

 }
 recieve(item: Publisher){

 }
}
class Magazine extends Publisher implements Reception {
 issue: number
 delivery(item: Publisher){

 }
 recieve(item: Publisher){
    
 }
}
interface Reception {
 delivery(item: Publisher): void
 recieve(item: Publisher): void

}
class Reader extends Publisher implements Reception{
    firstName: string
    lastName: string
    items: Publisher[]
    get getFirstName(){
 return this.firstName
}
set setFirstName(value: string){
    this.firstName = value
}
get getLastName(){
 return this.lastName
}
set setLastName(value: string){
    this.lastName = value
}
    delivery(item: Publisher){
        if (this.copies == 0) return
        if (Publisher.count == this.items.length || this.copies == 0 ) return
        this.copies = this.copies - 1
    }
    recieve(item: Publisher){
        this.copies = this.copies + 1
    }
    
}
class Library {
        items: Publisher[]
        add(item:Publisher){
           this.items.push(item) 
        }
        remove(){
            this.items.pop()
        }
        
    }
