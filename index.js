const promiseMessage = () => {
  return new Promise((resolve, reject) => {
    resolve('Hello this is Node JS.');
  });
};

promiseMessage()
  .then((message) => console.log(message))
  .catch((error) => console.error('Error:', error));

const fs = require('fs').promises;

const createFile = async () => {
  try {
    await fs.writeFile('message.txt', 'Hello this is Node JS.');
    console.log('File created successfully.');
  } catch (error) {
    console.error('Error creating file:', error);
  }
};

createFile();
