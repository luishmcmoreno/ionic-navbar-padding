import { Component, Input } from '@angular/core';

/**
 * Generated class for the HomeColComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-col',
  templateUrl: 'home-col.html'
})
export class HomeColComponent {

  @Input() title: string;
  @Input() color: string;
  @Input() icon: string;
  @Input() linkPage: string;

  constructor() {
  }

}
