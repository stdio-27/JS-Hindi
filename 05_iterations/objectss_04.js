const myobject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    php:"python"
}
//for in loop

for (const it in myobject) {
    console.log(it)
}


console.log("now printing obejcts ")
for (const it in myobject) {
    console.log(myobject[it])
}


// accesing objects with for each loop

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userbook=books.filter( (bk)=>bk.genre==='History')

  userbook=books.filter((bk) => 
    //opened a scope that is why we cant directly get the value have to use return return key word
    { return bk.publish>=2000 }
    )
    
  console.log(userbook)

