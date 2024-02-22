import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FeedComponent } from './pages/feed/feed.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MaterialModule } from '../core/material/material.module';

@NgModule({
  declarations: [FeedComponent, LayoutComponent, ProfileComponent],
  imports: [CommonModule, MainRoutingModule, MaterialModule],
})
export class MainModule {}
