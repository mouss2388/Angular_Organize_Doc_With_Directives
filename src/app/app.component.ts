import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StructDocwithDirectives';


  appareils = [
    {
      name: 'Iphone',
      status: false
    },
    {
      name: 'Xbox One',
      status: true
    },
    
  ];

}
