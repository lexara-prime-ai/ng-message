import { Component, AfterViewInit } from '@angular/core';
import { AngularMessageBoxService } from 'ng-message-box';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private ms: AngularMessageBoxService) { }

  ngAfterViewInit() {
    setTimeout(() => { this.ms.SHOW_SUCCESS_MESSAGE("My message..."); }, 2000);
  }

}
