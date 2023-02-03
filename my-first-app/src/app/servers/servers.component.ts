import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
/*   template: `
  <app-server1></app-server1><app-server1></app-server1>`, */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowServer = false;
  serverCreationStatus = 'No server was created...'
  serverName = 'No name';

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!'
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
