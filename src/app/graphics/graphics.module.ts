import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraphicBarComponent } from './components/graphic-bar/graphic-bar.component';

@NgModule({
  declarations: [BarsComponent, BarsDoubleComponent, DonaComponent, DonaHttpComponent, GraphicBarComponent],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    ChartsModule
  ]
})
export class GraphicsModule { }
