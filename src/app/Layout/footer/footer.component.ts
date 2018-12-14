import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  deleteFooter = false; //Desaparecer Footer. xdd
  constructor() { }

  ngOnInit() {
    if (this.deleteFooter = true) {
      document.getElementById('navbarNav').style.display = 'none';
    }
  }

}
