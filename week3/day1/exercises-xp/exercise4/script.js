const allBooks=[
    {title: 'misheu larouts ito',
    author: 'David Grossman',
    image: URL('https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    alreadyRead: true
},
{
    title: 'teum kavanot',
    author: 'Haim Sabato',
    image: URL('https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    alreadyRead: true
}
];


//4.
const tableBooks=document.createElement('table');
const divBooks=document.querySelector('div');
divBooks.appendChild(tableBooks);
for(book of allBooks){
    let tr= document.createElement('tr')
    tableBooks.appendChild(tr);
    for(book1 in book){
        let td=document.createElement('td');
        document.querySelector('tr').appendChild(td);
        td.innerText= book.autho
    }
}
