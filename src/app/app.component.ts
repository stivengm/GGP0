import { Component } from '@angular/core';
import { DataProfileService } from './data-profile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GG';

  constructor (private dataProfileService: DataProfileService) {}

  posts = {};

}
