// const validator = require('validator');
const yargs = require('yargs');

const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note!',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all notes!',
  handler() {
    notes.listNotes();
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read the note!',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

// execute
yargs.parse();

// console.log(yargs.argv);





/* example use librayry
  const msg = getNotes();
  const log = console.log;
  log(msg);

  // console.log(validator.isURL('http://google.ca'));

  // chalk testing
  log(chalk.green.bold.inverse('Success!'));

  const error = chalk.bold.red;
  const warning = chalk.keyword('orange');
  
  log(error('Error!'));
  log(warning('Warning!'));

  console.log(process.argv[2]);
*/