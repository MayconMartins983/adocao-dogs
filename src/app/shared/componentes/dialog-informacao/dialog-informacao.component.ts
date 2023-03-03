import { Dog } from './../../dog';
import { Component, Input, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-informacao',
  templateUrl: './dialog-informacao.component.html',
  styleUrls: ['./dialog-informacao.component.css']
})
export class DialogInformacaoComponent implements OnInit{

  @Input() dogEspecifico!: Dog

  ngOnInit(): void {
    
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: Dog) {
    this.dogEspecifico = data;
  }








}
