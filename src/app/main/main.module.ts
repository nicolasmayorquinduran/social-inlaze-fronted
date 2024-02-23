import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FeedComponent } from './pages/feed/feed.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MaterialModule } from '../core/material/material.module';
import { CardComponent } from './components/card/card.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FeedComponent,
    LayoutComponent,
    ProfileComponent,
    CardComponent,
    PostFormComponent,
  ],
  imports: [CommonModule, MainRoutingModule, MaterialModule, SharedModule],
})
export class MainModule {}
