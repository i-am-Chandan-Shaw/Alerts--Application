import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertModalComponent } from './alert-modal/alert-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Alerts';

  constructor(public alertDialogBox: MatDialog) { }
  ngOnInit(): void {

  }


  public openAlertDialogBox() {

    this.alertDialogBox.open(AlertModalComponent, {
      panelClass: 'custom-dialog-container',
      height: '500px',
      width: '1100px',
    });
  }

}
