const promiseMessage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello this is Node JS.');
    }, 1000);
  });
};

promiseMessage()
  .then((message) => console.log(message))
  .catch((error) => console.error('Error:', error));
