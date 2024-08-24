// https://rollbar.com/guides/javascript/how-to-throw-exceptions-in-javascript/

export default function RequestException(message) {
    const error = new Error(message); //Objeto error do Javascript.
    return error;
  }
  
  RequestException.prototype = Object.create(Error.prototype);