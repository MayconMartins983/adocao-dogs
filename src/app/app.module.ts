import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { DogsComponent } from './componentes/dogs/dogs.component';
import {MatChipsModule } from '@angular/material/chips';
import { ModalcreateComponent } from './componentes/modalcreate/modalcreate.component';
import { DialogConfirmationComponent } from './shared/componentes/dialog-confirmation/dialog-confirmation.component';
import { DialogInformacaoComponent } from './shared/componentes/dialog-informacao/dialog-informacao.component';
import { TransformCondicaoPipe } from './shared/pipes/transform-condicao.pipe';
import { SobreComponent } from './componentes/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    DogsComponent,
    ModalcreateComponent,
    DialogConfirmationComponent,
    DialogInformacaoComponent,
    TransformCondicaoPipe,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatChipsModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
