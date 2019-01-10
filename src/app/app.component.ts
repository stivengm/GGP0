import { Component } from '@angular/core';
// import { DataProfileService } from './data-profile.service';
import { NotFundService } from './services/not-fund.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GGO0';
  isNotfound = false;

  constructor (//private dataProfileService: DataProfileService,
    private nfService: NotFundService) {
    // this.dataProfileService.getData().subscribe(data => {
      // data
      // console.log("holamundo:" + data);
    // });
  }

  ngOnInit() {
    
  }

  posts = {};

}
