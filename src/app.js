import {HttpClient} from 'aurelia-fetch-client';
import {datatable} from '../node_modules/datatables.net/js/jquery.dataTables'

export class App {
  constructor() {
    
    this.message = 'Hello World!';
    let httpClient = new HttpClient();
    let xx =  httpClient.fetch('fakedata.json')// httpClient.fetch('http://localhost:54445/api/People') //
	            .then(response => response.json())
              .then(data => {    
                console.log('data => ',data);
                 this.mydata = data.fields;
              });
  };
}
  