import { Input, Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {

  @Input() type: 'core' | 'angular' | 'css';
  @Input() line: string;
  @Input() file: string;

}
