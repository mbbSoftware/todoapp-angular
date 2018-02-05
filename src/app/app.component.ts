import {Component, ViewContainerRef} from '@angular/core';
/*
@Component({
  selector: 'app-root',
  //template: '<router-outlet></router-outlet>'
})*/

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public title = 'app works!';

  public constructor(private viewContainerRef: ViewContainerRef) {}

}
