import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'GGP0'
  UserName = '';
  Password = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Login() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        UserName: this.UserName,
        Password: this.Password,
      }
    };
    this.router.navigate([], navigationExtras);
    console.log("Los datos que se traen al darle Login (PRUEBA USERNAME)" + this.UserName);
    console.log("Los datos que se traen al darle Login (PRUEBA PASSWORD)" + this.Password);
  }

}
