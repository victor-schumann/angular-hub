import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnDestroy {
  @Input() element: {
    /*this is the javascript server element*/ 
    type: string;
    name: string;
    content: string;
  };

  constructor() {
    console.log('ServerElementComponent constructor was called.');
  }

  ngOnInit(): void {
    console.log('ServerElementComponent ngOnInit was called.');
  }

  ngOnDestroy(): void {
    console.log('ServerElementComponent ngOnDestroy was called.');
  }
}
