import { Component } from '@angular/core';
import { classMOdel } from './classModel';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bragaCLI';

  classes:classMOdel;
  view:number;

  constructor(private moviesDataService: DataService) { }

  ngOnInit() {
    this.view=0;
    this.classes = this.moviesDataService.getlasses()
  }

  setview(view1){
    this.view=view1;
  }
   
}
