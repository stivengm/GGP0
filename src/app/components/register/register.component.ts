import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = 'GGP0';
  constructor() { }

  ngOnInit() {

  }

  notificationRegister() {
    Swal.fire({
      type: 'success',
      // title: 'Se ha registrado correctamente a' + this.title,
      html: '<section class="titleNotification">Se ha registrado correctamente a <strong>' + this.title + '</strong></section>',
      showConfirmButton: false,
      timer: 2500
    })
  }

}
