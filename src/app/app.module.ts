import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CloseButtonComponent } from './components/close-button/close-button.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavsTabsComponent } from './components/navs-tabs/navs-tabs.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PlaceholdersComponent } from './components/placeholders/placeholders.component';
import { PopoversComponent } from './components/popovers/popovers.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ScrollspyComponent } from './components/scrollspy/scrollspy.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AlertsComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonsComponent,
    ButtonGroupComponent,
    CardComponent,
    CarouselComponent,
    CloseButtonComponent,
    CollapseComponent,
    DropdownsComponent,
    ListGroupComponent,
    ModalComponent,
    NavbarComponent,
    NavsTabsComponent,
    OffcanvasComponent,
    PaginationComponent,
    PlaceholdersComponent,
    PopoversComponent,
    ProgressComponent,
    ScrollspyComponent,
    SpinnersComponent,
    ToastsComponent,
    TooltipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
