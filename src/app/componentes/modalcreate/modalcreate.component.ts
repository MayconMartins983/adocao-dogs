import { Dog } from '../../shared/models/dog';
import { MatDialog } from '@angular/material/dialog';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DogService } from 'src/app/services/dog.service';
import { MatRadioButton } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modalcreate',
  templateUrl: './modalcreate.component.html',
  styleUrls: ['./modalcreate.component.css'],
})
export class ModalcreateComponent {
  fileInputControl = new FormControl('', [Validators.required]);
  fotoCarregada!: FormData;
  dogForm: any;

  constructor(
    private fb: FormBuilder,
    private service: DogService,
    private router: Router,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dogForm = this.fb.group({
      nome: ['', [Validators.required]],
      raca: ['', [Validators.required]],
      idadeEmMeses: ['', [Validators.required]],
      cor: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      vacinado: ['', [Validators.required]],
      quantidadeDonos: ['', [Validators.required]],
      isAdotado: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      nomeDono: ['', [Validators.required]],
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.fotoCarregada = formData;
  }

  salvar(): void {
    const valuesForm: Dog = this.dogForm.value;
    const formData = this.fotoCarregada;
    formData.append('dog', JSON.stringify(valuesForm));

    this.service.create(formData).subscribe(() => {
      this.snackBar.open('Dog adicionado com sucesso!', 'X', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: ['show-message'],
      });
    });

    this.cancelar();
  }

  cancelar(): void {
    this.matDialog.closeAll();
  }
}
