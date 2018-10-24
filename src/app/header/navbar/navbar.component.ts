import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchKey = '';
  searchSummoner = '';

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    window.caches.delete;
  }

  searchSummonerName() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        searchKey: this.searchSummoner,
      }
    };
    this.router.navigate([], navigationExtras);
    console.log("Id:" +this.searchSummoner);
  }
}
