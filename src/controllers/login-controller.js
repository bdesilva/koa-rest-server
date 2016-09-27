export class LoginController {
  constructor() {
    this.users = {
      Ben: 'hi',
      Ann: 'hey'
    };
  }

  authorize(body) {    
    return this.users[body.username] === body.password;
  }
}