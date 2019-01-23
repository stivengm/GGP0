import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
    if (this.UserName && this.Password) {
      Swal.fire({
        type: 'success',
        // title: 'Se ha registrado correctamente a' + this.title,
        html: '<section class="titleNotification">Se ha logueado correctamente a <strong>' + this.title + '</strong></section>',
        showConfirmButton: false,
        timer: 2500
      })
    }
    else {
      Swal.fire({
        type: 'error',
        // title: 'Se ha registrado correctamente a' + this.title,
        html: '<section class="titleNotification">No se ha podido ingresar a <strong>' + this.title + '</strong></section>',
        showConfirmButton: false,
        timer: 2500
      })
    }
  }

}
