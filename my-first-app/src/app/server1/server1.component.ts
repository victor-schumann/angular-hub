import { Component } from "@angular/core";

@Component( {
    selector: '<app-server1',
    templateUrl: './server1.component.html'
})

export class ServerComponentOne  {
    serverId = 10;
    serverStatus = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}