import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  messages = [
    {
      text: 'One',
      type: 'ASN',
      isSelected: false,
      isError: false,
      cols: 1,
      rows: 1
    },
    {
      text: 'One',
      type: 'Sku',
      isSelected: false,
      isError: false,
      cols: 1,
      rows: 1
    },
    {
      text: 'One',
      type: 'Distro',
      isSelected: false,
      isError: false,
      cols: 1,
      rows: 1
    }
  ];

  selected = [];

  constructor(public dialog: MdDialog){}

  openDialog(message: any) {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);

    dialogRef.componentInstance.message = message;

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  toggleHover(message: any){
    message.isHovered = !message.isHovered;
  }

  toggleSelection(message: any) {
    message.isSelected = !message.isSelected;
    this.filterSelection();
  }

  private filterSelection() {
    this.selected = this.messages.filter(
      message => message.isSelected
    );
  }
}

@Component({
  selector: 'dialog-result-example-dialog',
  template: `
    <h1>Dialog Box</h1>
    <p>{{message.type}}</p>
    <p>{{message.text}}</p>
    <button md-button md-dialog-close>close</button>
    `,
})
export class DialogResultExampleDialog {

  message: any;

  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
