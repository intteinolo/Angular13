import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  apiURL = environment.securityApiURL;

  constructor(private http: HttpClient) { }

  httpOptionsPost = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'false',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests'
    }),
    params: new HttpParams()
  };

  buildHttpOptions() {
  }
  
  aboutOf(): Observable<any> {
    return this.http.get<any>(this.apiURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  /*
  res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.setHeader("Access-Control-Max-Age", "3600");
        res.setHeader("Access-Control-Allow-Headers", "Access-Control-Request-Headers,Authorization");
        res.addHeader("Access-Control-Expose-Headers", "xsrf-token");
  */

  login(user_email: string, user_password: string, twoFactorAuthCode: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'false',
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests, X-PINGOTHER, X-Requested-With, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization',
        'Access-Control-Expose-Headers': 'xsrf-token',
        'dataBaseId': environment.dataBaseId,
        'twoFactorAuthCode': twoFactorAuthCode
      }),
      params: new HttpParams()
        .set("user_email", user_email)
        .set("user_password", user_password)
    };
    return this.http.post<any>(this.apiURL + '/login', {}, httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  registerUser(user_email: string, firstName: string, lastName: string, mobile_number: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'false',
        'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
        'dataBaseId': environment.dataBaseId,
        'appName': environment.appName
      }),
      params: new HttpParams()
        .set("user_email", user_email)
        .set("firstName", firstName)
        .set("lastName", lastName)
        .set("mobile_number", mobile_number)
        .set("role", "USER")
    };
    return this.http.post<any>(this.apiURL + '/registerUser', {}, httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  verifyUser(token: string, user_email: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'false',
        'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
        'dataBaseId': environment.dataBaseId,
        'token': token
      }),
      params: new HttpParams()
        .set("user_email", user_email)
    };
    return this.http.post<any>(this.apiURL + '/verifyUser', {}, httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  unVerifyUser(token: string, user_email: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'false',
        'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
        'dataBaseId': environment.dataBaseId,
        'token': token
      }),
      params: new HttpParams()
        .set("user_email", user_email)
    };
    return this.http.post<any>(this.apiURL + '/unVerifyUser', {}, httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  resetUserPassword(token: string, user_email: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'false',
        'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
        'dataBaseId': environment.dataBaseId,        
        'token': token,
        'appName': environment.appName
      }),
      params: new HttpParams()
        .set("user_email", user_email)
    };
    return this.http.post<any>(this.apiURL + '/resetPassword', {}, httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  resetPassword(user_email: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'false',
        'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
        'dataBaseId': environment.dataBaseId,
        'appName': environment.appName
      }),
      params: new HttpParams()
        .set("user_email", user_email)
    };
    return this.http.post<any>(this.apiURL + '/resetPassword', {}, httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateUser(token: string, user_email: string, firstName: string, lastName: string, mobile_number: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'false',
        'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
        'dataBaseId': environment.dataBaseId,
        'token': token
      }),
      params: new HttpParams()
        .set("user_email", user_email)
        .set("firstName", firstName)
        .set("lastName", lastName)
        .set("mobile_number", mobile_number)
    };
    return this.http.post<any>(this.apiURL + '/updateUser', {}, httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getUsersList(token: string, anyString: string, pageNum: string, pageSize: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'false',
        'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
        'dataBaseId': environment.dataBaseId,
        'token': token
      }),
      params: new HttpParams()
        .set("anyString", anyString)
        .set("pageNum", pageNum)
        .set("pageSize", pageSize)
    };
    return this.http.post<any>(this.apiURL + '/getUsersList', {}, httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
}
