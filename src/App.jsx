import './App.css';


const Produse = [
  {
    "id":1,
    "name":"Rosie",
    "price":4,
    "photo":'https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?w=740&t=st=1726325560~exp=1726326160~hmac=4da7ae2526d213b9acfa98a78430c637a25ada3837e1b404ec12547b8d08e1bf'
  },
  {
    "id":2,
    "name":"Paine",
    "price":7,
    "photo":'https://img.freepik.com/free-psd/san-francisco-sourdough-bread-isolated-transparent-background_191095-34645.jpg?w=740&t=st=1726325538~exp=1726326138~hmac=2434b2d00a6239a02d88506bfb15882ea6e0339d18f7879b66fb157968ad93c3'
  },
  {
    "id":3,
    "name":"Carne vita",
    "price":15,
    "photo":'https://img.freepik.com/free-photo/minced-pork_1339-578.jpg?t=st=1726325504~exp=1726329104~hmac=6495d90fc46bcad04e31723c034b6364984d0b787f52d7a93c9824b99096840d&w=1380'
  },
  {
    "id":4,
    "name":"Carne pui",
    "price":14,
    "photo":'https://img.freepik.com/free-photo/high-angle-hamburger-ingredients_23-2148575454.jpg?t=st=1726325456~exp=1726329056~hmac=4f87bf94cf6948a0727829e8c6fe53b4ffd82703dcc2e037d4069fb2d097b326&w=1380'
  },
  {
    "id":5,
    "name":"Cascaval",
    "price":8,
    "photo":'https://img.freepik.com/free-photo/close-up-delicious-mature-cheese-table_23-2148430166.jpg?semt=ais_hybrid'
  },
  {
    "id":6,
    "name":"Muraturi",
    "price":13,
    "photo":'https://img.freepik.com/free-photo/opened-pickle-jar-pickle-jar_114579-88577.jpg?semt=ais_hybrid'
  },
];

function App() {
  
  const renderProduse = Produse.map(entity =>(
    <div key={entity.id} className="flex items-center gap-2 text-slate-500" >
      <img src={entity.photo} width="50" height="50"/>
      <span>{entity.name}</span>
      <span>{entity.price}</span>
    </div>
  ))

  return (
    <>
      <div>
        <h1 className="absolute top-0 left-0 text-left m-2">AI Shop</h1>
        <div className='card'>
          {renderProduse}
        </div>
      </div>
    </>
  )
}

export default App
