import { Component } from '@angular/core';
import '@clr/core/alert/register.js';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  warning1 = true;
  warning2 = true;

}
