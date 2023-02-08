import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  showParagraph = false;
  secretParagraph = "This is a paragraph with information; and this information has been seen...";
  log = [];

  onDisplayParagraph() {
/*     this.recordsArray.push(this.recordsArray.length + 1); */
    this.log.push(new Date())
    this.showParagraph = !this.showParagraph;
  }

  onHideParagraph() {
    this.showParagraph = !this.showParagraph;
  }

}
