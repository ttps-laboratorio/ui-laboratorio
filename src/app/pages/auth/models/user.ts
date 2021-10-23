export class User {
  authorities: string[];
  id: number;
  mail: string;
  name: string;
  lastName: string;
  username: string;
  issuedAt: number;
  expireAt: number;

  constructor(json){
      this.username = json.username;
      this.authorities = [];
      json.authorities.forEach(element => {
          let authority: string = (typeof element === "string")?element:element.authority;
          this.authorities.push(authority);
      });
      this.expireAt = json.exp;
      this.issuedAt = json.iat;
  }

  public validToken():boolean {
      console.log("exp: "+this.expireAt);
      console.log("time: "+new Date().getTime());
      return this.expireAt <= new Date().getTime();
  }

  public canActivate(permission: string): boolean {
      return this.authorities.includes(permission);
  }
}
