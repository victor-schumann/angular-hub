import { Component } from "@angular/core";

@Component( {
    selector: '<app-server1',
    templateUrl: './server1.component.html'
})

export class ServerComponentOne  {
    serverId = 10;
    serverStatus = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.33 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'lightgreen' : 'orangered';
    }
}