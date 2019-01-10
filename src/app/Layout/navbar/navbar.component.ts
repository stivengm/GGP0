import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ProfileComponent } from '../../components/profile/profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  noNavbar = false; //Desaparecer Navbar. xdd
  // searchKey = '';
  searchSummoner = '';

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    window.caches.delete;
    // if (this.noNavbar = true) {
    //   document.getElementById('navbarNav').style.display = 'none';
    // }
  }

  searchSummonerName() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        searchKey: this.searchSummoner,
      }
    };
    this.router.navigate([], navigationExtras);
    console.log("Username:" +this.searchSummoner);
  }
}
