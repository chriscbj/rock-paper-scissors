// iterate through people array
// check if current array item is == 'phil' or 'lola'
//  if yes, concentenate to refused with comma and space
// if not , concententate to admitted with comma and space

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here, iterate through people array
    for (let i = 0; i < people.length; i++){
        if (people[i] == 'Phil' || people[i] == 'Lola'){
            refused.textContent += `${people[i]}, `
        } else {
            admitted.textContent += `${people[i]}, `
        }
    };