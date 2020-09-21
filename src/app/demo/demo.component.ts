import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  host: {
    // '[class]'
  }
})
export class DemoComponent {

  @Input() type: 'core' | 'angular' | 'css';

}
