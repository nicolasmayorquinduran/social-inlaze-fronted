import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [LoaderComponent],
})
export class CoreModule {}
