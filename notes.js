const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes); 
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }

};

const removeNotes = (title) => {
  const notes = loadNotes();

  // my solution
  // if (notes.length > 0) {  
  //   const removeIndex = notes.findIndex(note => (note.title === title))

  //   if (removeIndex >= 0) {
  //     const removedNote = notes.splice(removeIndex, 1);
  //     saveNotes(notes);
  //     console.log(`${ removedNote[0].title } is removed!`);
  //   } else {
  //     console.log('Note title not matched!');
  //   }
  // } else {
  //   console.log('There is no available notes to remove!');
  // }

  // other solution (by instructor)
  const newNotes = notes.filter(note => (note.title !== title));

  if (notes.length > newNotes.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(newNotes);
  } else {
    console.log(chalk.red.inverse('No Note found!'));
  }  
}

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse.yellow('Your notes'));
  notes.forEach((note) => console.log(note.title));
}

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);

  if (noteToRead) {
    console.log(chalk.inverse(noteToRead.title));
    console.log(noteToRead.body);
  } else {
    console.log(chalk.red('No Note found!'));
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);

  fs.writeFileSync('notes.json', dataJSON);
}

module.exports = { 
  addNotes,     // addNotes: addNotes
  removeNotes,
  listNotes,
  readNote
};