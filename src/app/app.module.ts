import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {SliderModule} from 'primeng/slider';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import {ColorPickerModule} from 'primeng/colorpicker';
import {CalendarModule} from 'primeng/calendar';
import {ListboxModule} from 'primeng/listbox';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MenubarModule} from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import { CardModule, } from 'primeng/card';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { BuscarFiltrosComponent } from './buscar-filtros/buscar-filtros.component';
import { CasasestadosComponent } from './casasestados/casasestados.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    InicioComponent,
    LoginComponent,
    BuscarFiltrosComponent,
    CasasestadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
	SliderModule,
	RadioButtonModule,
	InputTextModule,
	ColorPickerModule,
	BrowserAnimationsModule,
	CalendarModule,
	ListboxModule,
  CheckboxModule,
  DropdownModule,
  InputTextareaModule,
  MenubarModule,
  HttpClientModule,
  CarouselModule,
  ToastModule,
  CardModule
  ],
  providers: [
	 Title
	 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
