import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ProfileComponent } from '../../components/profile/profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchSummoner = '';

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  searchSummonerName() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        searchKey: this.searchSummoner,
      }
    };
    this.router.navigate([], navigationExtras);
    console.log("Username: " + this.searchSummoner);
  }
}
