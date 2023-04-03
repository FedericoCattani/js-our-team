/*

- Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

- Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

- Creare l’array di oggetti con le informazioni fornite.

- Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

- Utilizzate liberamente il tipo di ciclo che preferite (for, for in o for of)

- Stampare le stesse informazioni su DOM sottoforma di stringhe.

*/


//1.
const team = [
  {
    name: 'Wayne Barret',
    pic: '',
    role: 'Founder & CEO'
  },
  {
    name: 'Angela Caroll',
    pic: '',
    role: 'Chief Editor'
  },
  {
    name: 'Walter Gordon',
    pic: '',
    role: 'Office Manager'
  },
  {
    name: 'Angela Lopez',
    pic: '',
    role: 'Social Media Manager'
  },
  {
    name: 'Scott Estrada',
    pic: '',
    role: 'Developer'
  },
  {
    name: 'Barbara Ramos',
    pic: '',
    role: 'Graphic Designer'
  }
]

const list = document.getElementById('list');

for(let key in team){
  const valore = team[key];
  console.log('valore', valore);

  list.innerHTML += `
  <li> ${key}: ${valore} </li>
 `
}