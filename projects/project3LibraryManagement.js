console.log('Welcome to the library Management System!')

let library = [
    {title: "Win Book", author: 'Win', available: true},
    {title: "John Book", author: 'John', available: true},
    {title: "Ben Book", author: 'Ben', available: true},
]

function viewBooks(){
    console.log("\n Current Library Collection: ")

    library.forEach((book, index) => {
        if(book.available){
            console.log(`${index + 1}. ${book.title} by ${book.author} - ${book.available ? "available" : "Checked Out"}`)
        }
    })
}

function addBooks(){
    const title = prompt("Enter Book TItle: ")
    const author = prompt("Enter author: ")
    library.push({title, author, available: true})
    alert(`book ${title} by ${author} added to the library`)
}

function checkOutBook(){
    viewBooks()
    const bookNumber = parseInt(prompt("Enter the number of the book to checkout."), 10)

    if(bookNumber > 0 && bookNumber <= library.length){
        if(library[bookNumber - 1].available){
            library[bookNumber - 1].available = false
            console.log(`You have checked out ${library[bookNumber - 1].title}`)
        } else{
            alert("This book is already checked out!")
        }
    } else {
        alert("invalid number")
    }
}

function returnBook(){
    viewBooks()

    const bookNumber = parseInt(prompt("Enter the book number you are returning"))

    if(bookNumber > 0 && bookNumber <= library.length){
        if (!library[bookNumber - 1].available){
            library[bookNumber - 1].available = true
            console.log(`You have successfully returned ${library[bookNumber - 1].title}`)
        } else {
            alert("this book wasn't checked out")
        }
    } else {
        alert('Invalid Book Number')
    }
}

function libraryManager(){
    while(true){
        console.log("\n Library Menu:")
        console.log("1: View All Books")
        console.log("2: Add a Book")
        console.log("3: Check Out a book")
        console.log("4: Return a Book")
        console.log("5: Exit")

        const choice = prompt("Enter your choice 1-5:")
    
        switch(choice){
            case '1':
                viewBooks()
                break;
            case '2':
                addBooks()
                break;
            case '3':
                checkOutBook()
                break;
            case '4':
                returnBook()
                break;
            case '5':
                console.log("Thanks for coming to our library!")
                return;
            default:
                console.log('Invalid Choice')
        }
    }

}

libraryManager()