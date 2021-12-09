import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { MnavComponent } from './main/mnav/mnav.component';
import { MlistComponent } from './main/mlist/mlist.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: ':id',
    component: MainComponent,
  },
  { path: '', redirectTo: '/1', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    MnavComponent,
    MlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
