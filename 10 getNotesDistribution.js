/*Create a function that takes an array of students and returns an object representing their notes distribution.
Have in mind that all invalid notes should not be count in the distribution. Valid notes are: 1, 2, 3, 4, 5*/

const data = [
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3],
  },
];

const getNotesDistribution = data => {
  const validNotes = [1, 2, 3, 4, 5];
  return data.reduce((obj, {notes}) => {
    for(let item of notes){
      if(validNotes.includes(item)){
        !obj[item] ? obj[item] = 1 : ++obj[item];
      }
    }
    return obj;
  }, {})
};

console.log(getNotesDistribution(data))