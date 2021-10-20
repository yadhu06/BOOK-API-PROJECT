const books = [
    {
        ISBN: "1234Book",
        title: "The Lion King",
        pubDate: "2021-08-09",
        language: "EN",
        numPage: 250,
        author: [1,2],
        publication:[1],
        category: ["fiction", "nature", "children"]
    }
]

const author = [
    {
        id: 1,
        name: "Yadhukrishna",
        books: ["1234Book","secretbooks"]
    },
    {
        id: 2,
        name: "Ragav",
        books: ["123Book"]
    }
]

const publication = [
    {
        id:1,
        name: "Disney",
        books: ["1234Book"]
    },
  
]

module.exports = {books,author,publication};
