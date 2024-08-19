const books = [
    {
      title: 'Ensayo Sobre La Ceguera',
      author: 'José Saramago'
    },
    {
      title: 'Cuentos de Amor, de Locura y de Muerte',
      author: 'Horacio Quiroga'
    },
    {
      title: 'El Hombre Ilustrado',
      author: 'Ray Bradbury'
    },
    {
      title: 'El Hombre en Busca de Sentido',
      author: 'Viktor Frankl'
    },
    {
      title: 'El Aleph',
      author: 'Jorge Luis Borges'
    }
  ]
  
function getTheTitles(books){
  let titles = books.map(book => book.title)
  console.log(titles);
  return titles;
}

function onButtonClick() {
    getTheTitles(books);
}