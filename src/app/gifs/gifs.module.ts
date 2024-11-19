import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPAgeComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPAgeComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPAgeComponent
  ]
})
export class GifsModule { }
