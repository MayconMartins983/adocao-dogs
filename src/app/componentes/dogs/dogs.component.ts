import { Router } from '@angular/router';
import { DogService } from 'src/app/services/dog.service';
import { DialogConfirmationComponent } from './../../shared/componentes/dialog-confirmation/dialog-confirmation.component';

import { Dog } from '../../shared/models/dog';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalcreateComponent } from '../modalcreate/modalcreate.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogInformacaoComponent } from 'src/app/shared/componentes/dialog-informacao/dialog-informacao.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent implements OnInit {
  dogsNaoAdotados: any[] = [];
  dogsAdotados: any[] = [];

  constructor(
    private matDialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: DogService,
    private sanitizer: DomSanitizer,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllNaoAdotados();
    this.getAllAdotados();
  }

  adicionar(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '30%';

    this.matDialog
      .open(ModalcreateComponent)
      .afterClosed()
      .subscribe(() => {
        this.getAllNaoAdotados();
      });
  }

  getAllNaoAdotados() {
    this.service.getAllNaoAdotados().subscribe((data) => {
      this.dogsNaoAdotados = data.map((item) => {
        const bytes = 'data:image/jpg;base64, ' + item.foto;
        const imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl(bytes);
        return { ...item, imageSrc, loaded: true };
      });
    });
  }

  getAllAdotados() {
    this.service.getAllAdotados().subscribe((data) => {
      this.dogsAdotados = data.map((item) => {
        const bytes = 'data:image/jpg;base64, ' + item.foto;
        const imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl(bytes);
        return { ...item, imageSrc, loaded: true };
      });
    });
  }

  abrirInformacoes(codigo: number): void {
    this.service.findByCodigo(codigo).subscribe((dogEspecifico) => {
      this.matDialog.open(DialogInformacaoComponent, {
        data: dogEspecifico,
        width: '50%',
      });
    });
  }
}
