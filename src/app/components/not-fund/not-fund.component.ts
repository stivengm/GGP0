import { Component, OnInit } from '@angular/core';
import { NotFundService } from '../../services/not-fund.service';

@Component({
  selector: 'app-not-fund',
  templateUrl: './not-fund.component.html',
  styleUrls: ['./not-fund.component.scss']
})
export class NotFundComponent implements OnInit {

  deleteNavBar = false;

  urlNotFound: any;
  constructor(private nfService: NotFundService) { }

  ngOnInit() {
    // this.nfService.emit(true);
    this.urlNotFound = window.location
    this.deleteNavBar = true;
    document.getElementById("body").style.backgroundImage = 'none';
    document.getElementById("footer").style.display = 'none';
    document.getElementById("navbarNav").style.display = 'none';
  }

  // ngOnDestroy() {
  //   this.nfService.emit(false);
  // }

}
