import jwt_decode from 'jwt-decode';

export class JwtDecoder {

    private _token: any = null;
    private _decoded: any;
  
    constructor() {
      this.updateToken();
    }
  
    get token() {
      return this._token;
    }
  
    get decoded() {
      return this._decoded;
    }
  
    /*
    getDecodedAccessToken(token?: string): any {
      try{
        if (token) {
          this._token = token;
        }
        return jwt_decode(this.token);
      }
      catch(Error){
          return null;
      }
    }
    */

    setToken(token: string) {
      localStorage.setItem("token", token);
      this.updateToken();
    }
  
    deleteToken() {
      localStorage.removeItem("token");
      this._token = null;
      //window.alert("Token: " + this._token); 
    }
  
    updateToken() {
      this._token = localStorage.getItem("token");     
      if (this._token != null) {
        this._decoded = jwt_decode(this.token);
      } else {
        this._decoded = null;
      }
    }
  
  }
  