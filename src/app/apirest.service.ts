import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  listado = [];
  item : any;
  private urlAPi = 'https://jsonplaceholder.typicode.com/users'; //url 
  constructor(private httpClient: HttpClient) { }

  getUsers()
  {
    let url = this.urlAPi + "users";
    this.listado =[];
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe((data: []) => {
        resolve(data);
      data.forEach(item => { this.listado.push(item);})
    },
    error =>
    {
      console.log("Error en la comunicaicon con el server");
    });
  });
  }
  async getUser(id:string)
  {
    let url = this.urlAPi + "users/"+ id;
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe((data: any) => {
        resolve(data);
      this.item = data;
    },
    error =>
    {
      console.log("Error en la comunicaicon con el server");
    });
  });
}
}


  

