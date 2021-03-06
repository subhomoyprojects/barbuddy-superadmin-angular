import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import 'hammerjs';
// Ngb Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Mat  Module install
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
//  Mat Chip Module
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { BarlistingComponent } from './superadmin/barlisting/barlisting.component';
import { HeaderComponent } from './superadmin/header/header.component';
import { FooterComponent } from './superadmin/footer/footer.component';
import { IndexComponent } from './superadmin/index/index.component';
import { SidenavbarComponent } from './superadmin/sidenavbar/sidenavbar.component';
import { BardetailsComponent } from './superadmin/bardetails/bardetails.component';
import { ManagebarComponent } from './superadmin/managebar/managebar.component';
import { MoreinfoComponent } from './superadmin/moreinfo/moreinfo.component';
import { DrinksComponent } from './superadmin/drinks/drinks.component';
import { FoodComponent } from './superadmin/food/food.component';
import { OffersComponent } from './superadmin/offers/offers.component';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BeerComponent } from './superadmin/beer/beer.component';
import { ModalComponent } from './superadmin/modal/modal.component';
import { DrinksidenavComponent } from './superadmin/drinksidenav/drinksidenav.component';
import { DrinkmaincontentComponent } from './superadmin/drinkmaincontent/drinkmaincontent.component';
import { DrinkitemComponent } from './superadmin/drinkitem/drinkitem.component';
import { FoodEditComponent } from './superadmin/food-edit/food-edit.component';
import { OfferEditComponent } from './superadmin/offer-edit/offer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BarlistingComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    SidenavbarComponent,
    BardetailsComponent,
    ManagebarComponent,
    MoreinfoComponent,
    DrinksComponent,
    FoodComponent,
    OffersComponent,
    BeerComponent,
    ModalComponent,
    DrinksidenavComponent,
    DrinkmaincontentComponent,
    DrinkitemComponent,
    FoodEditComponent,
    OfferEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Form Module
    ReactiveFormsModule, // Form Module
    NgbModule, // Ngb Module
    BrowserAnimationsModule, // Browser Animation Module
    MatInputModule, // Metarial input module
    MatExpansionModule, // Metarial Accordine
    MatCheckboxModule, // Metarial Checkbox
    MatIconModule,  // Metarial Icon
    MatRadioModule, // Metarial Radio Button
    MatSlideToggleModule, // Metarial Accordine
    MatTabsModule, // Mat tabs
    MatFormFieldModule, // Mat Form Filed
    MatSelectModule, // Mat Select Module
    MatButtonModule, // Mat Button Module
    NgxMaterialTimepickerModule.forRoot(), // For Time Picker
    CarouselModule, // For Ngx Owl Carousel Module
    MatListModule, // Mat List Item
    MatDialogModule, // For Modal
    MatChipsModule, // For Mat Chip
    MatAutocompleteModule, // For Auto Complete
    MatDatepickerModule, // For Date Picker
    MatNativeDateModule  // For Date Picker
  ],
  exports: [
    ModalComponent
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 
}