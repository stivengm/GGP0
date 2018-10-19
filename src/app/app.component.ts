import { Component } from '@angular/core';
import { DataProfileService } from './data-profile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GGO0';

  constructor (private dataProfileService: DataProfileService) {
    this.dataProfileService.getData().subscribe(data => {
      data
      // console.log(data);
    });
  }

  posts = {};

}
