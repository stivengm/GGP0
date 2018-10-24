import { Component, OnInit } from '@angular/core';
import { NotFundService } from '../../services/not-fund.service';

@Component({
  selector: 'app-not-fund',
  templateUrl: './not-fund.component.html',
  styleUrls: ['./not-fund.component.css']
})
export class NotFundComponent implements OnInit {

  deleteNavBar = false;

  urlNotFound: any;
  constructor(private nfService: NotFundService) { }

  ngOnInit() {
    // this.nfService.emit(true);
    this.urlNotFound = window.location
    this.deleteNavBar = true;
  }

  // ngOnDestroy() {
  //   this.nfService.emit(false);
  // }

}
