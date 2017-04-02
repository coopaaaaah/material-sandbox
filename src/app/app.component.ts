import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from "@angular/material";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  messages = [
    {
      text: '1002',
      type: 'Sku',
      isSelected: false,
      isError: false,
      dc_number: 5024,
      last_updated: new Date('2017-02-12'),
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      text: '23022999',
      type: 'Distro',
      isSelected: false,
      isError: false,
      dc_number: 5643,
      last_updated: new Date('2017-03-12'),
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      text: 'C323022',
      type: 'ASN',
      isSelected: false,
      isError: true,
      dc_number: 5643,
      last_updated: new Date('2017-01-12'),
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }];
  selected = [];
  submitted = [];
  loading = false;

  constructor(public dialog: MdDialog) {
  }

  search() {
    this.loading = !this.loading;
  }

  openDialog(message: any) {

    let dialogRef = this.dialog.open(DialogResultExampleDialog);

    dialogRef.componentInstance.message = message;

    dialogRef.afterClosed().subscribe(result => {
      message = result;
      this.filterSelection();
    });

  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  unselectAll() {

    this.selected = [];
    this.messages.forEach(message => {
      message.isSelected = false
    });

  }

  submitSelected(selectedMessages: any) {

    this.submitted = [];
    this.loading = true;

    this.delay(1000).then(
      () => {
        this.loading = false;
        this.submitted = selectedMessages;
        this.unselectAll();
      }
    );

  }

  toggleSelection(event: any, message: any) {

    // don't judge yo, this is the length of dom elements it takes to get to the md-list-item, since i want to avoid
    // having the info button check the row but also have the entire row selectable for the user
    if (event.path.length > 13)
      return;

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
    <h1>
      <md-icon class="mat-accent" *ngIf="message.isError">error_outline</md-icon>
      {{message.type}} {{message.text}}
    </h1>
    <p>Last Updated: {{message.last_updated | date}}</p>
    <p>Message data: {{message.data}}</p>
    <span class="spacer"></span>
    <button class="mat-primary" md-button (click)="selectMessage()">Select</button>
    <button style="float: right" md-button md-dialog-close>Close</button>
  `,
  styleUrls: ['./app.component.css']
})
export class DialogResultExampleDialog {

  message: any;

  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {
  }

  selectMessage(){
    this.message.isSelected = true;
    this.dialogRef.close(this.message);
  }
}
