export class LoginForm {
  correoElectronico: string;
  password:          string;

  constructor(email : string, password : string) {

    this.correoElectronico = email;
    this.password = password;
  }

}
