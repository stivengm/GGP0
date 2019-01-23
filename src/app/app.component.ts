import { Component } from '@angular/core';
import { NotFundService } from './core/services/not-fund.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GGP0';
  isNotfound = false;

  constructor (private nfService: NotFundService) {
  }

  ngOnInit() {
  }

}
