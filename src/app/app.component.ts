import { DialogConfirmationComponent } from './shared/componentes/dialog-confirmation/dialog-confirmation.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig  } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private matDialog: MatDialog){}

  ngOnInit(): void {
    this.matDialog.open(DialogConfirmationComponent, {
      width: '50%'
    })
  }
  title = 'dog-adocao';
}
