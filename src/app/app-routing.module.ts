import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { LayoutComponent } from './main/layout/layout.component';
import { RegistrationComponent } from './auth/pages/registration/registration.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { MainRoutingModule } from './main/main-routing.module';
import { FeedComponent } from './main/pages/feed/feed.component';
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
