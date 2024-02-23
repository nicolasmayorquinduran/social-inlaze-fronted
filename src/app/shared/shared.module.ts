import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material/material.module';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [UserFormComponent],
  imports: [CommonModule, MaterialModule],
  exports: [UserFormComponent],
})
export class SharedModule {}
