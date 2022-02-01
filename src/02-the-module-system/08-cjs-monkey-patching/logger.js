class Logger {
  constructor(name) {
    this.count = 0;
    this.name = name;
  }

  log(message) {
    this.count++;
    console.log('[' + this.name + ']' + message);
    console.log('[' + this.name + ']' + this.count);
  }
}

module.exports = new Logger('DEFAULT');
module.exports.Logger = Logger;
