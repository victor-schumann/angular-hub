import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'This is a Testserver' },
  ];

  onServerAdded(serverdData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverdData.serverName,
      content: serverdData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onDestroyFirst() {
    this.serverElements.splice(0,1);
  }
}
