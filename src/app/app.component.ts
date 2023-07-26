import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit, AfterViewInit } from '@angular/core';
import { AngularMessageBoxComponent } from 'ng-message-box';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    if (this.componentContainer) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AngularMessageBoxComponent);
      this.componentContainer.clear();
      const componentRef = this.componentContainer.createComponent(componentFactory);
      // Assuming the MessageBoxComponent has an input property named 'message'
      componentRef.instance.successMessage$ = 'Hello, this is a dynamic message!';
    }

  }




  // Assuming the MessageBoxComponent has an output event named 'close'
  // componentRef.instance.close.subscribe(() => {
  //   // Handle the close event here
  // });

}
