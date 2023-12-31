let addbtn=document.getElementById('gede');
let bookdetail=document.querySelector('form');
let plusbtn=document.getElementById('submit');
mylibrary=[]
function render(){
    let bookelement=document.getElementById("container");
    bookelement.innerHTML = '';
    for(i=0; i<mylibrary.length; i++){
        let book=mylibrary[i];
        let bookelement1=document.createElement('div');
        bookelement1.innerHTML=`<h1>${book.title}</h1>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>${book.read?"read":"not read"}</p>`;
        bookelement.appendChild(bookelement1);
    }
}
plusbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    updateTObook();
    render();

})
addbtn.addEventListener('click',displaydig);
function updateTObook(){
    let title=bookdetail.title.value;
    let author=bookdetail.author.value;
    let pages=bookdetail.pages.value;
    let read=bookdetail.read.checked;
    let bookvalue=new Bookinfo(title,author,pages,read);
    mylibrary.push(bookvalue);
    console.log('obj added')

}

function displaydig(){
    bookdetail.classList.remove('display');
    console.log('gede')
}

class Bookinfo {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
    