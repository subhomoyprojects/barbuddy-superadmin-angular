import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Ngb Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Mat Input Module install
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { BarlistingComponent } from './superadmin/barlisting/barlisting.component';
import { HeaderComponent } from './superadmin/header/header.component';
import { FooterComponent } from './superadmin/footer/footer.component';
import { IndexComponent } from './superadmin/index/index.component';
import { SidenavbarComponent } from './superadmin/sidenavbar/sidenavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarlistingComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    SidenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, // Ngb Module
    BrowserAnimationsModule, // Browser Animation Module
    MatInputModule, // Metarial input module
    MatExpansionModule, // Metarial Accordine
    MatCheckboxModule  // Metarial Checkbox
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
