import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import {InputNumberModule} from 'primeng/inputnumber';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { TabViewModule } from 'primeng/tabview';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from "primeng/inputtext";

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { PieComponent } from './pie/pie.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

import { TableService } from './table/tableservice';
import { ConfirmationService, MessageService } from "primeng/api";
import { SidebarComponent } from './sidebar/sidebar.component';
import { LineComponent } from './line/line.component';
import { DialogComponent } from './dialog/dialog.component';
import { registerLocaleData } from "@angular/common";
import localeRu from '@angular/common/locales/ru';
import { TableByStateComponent } from './table-by-state/table-by-state.component';
import { TableByHistoricalComponent } from './table-by-historical/table-by-historical.component';
import {CalendarModule} from "primeng/calendar";

registerLocaleData(localeRu, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PieComponent,
    AutocompleteComponent,
    SidebarComponent,
    LineComponent,
    DialogComponent,
    TableByStateComponent,
    TableByHistoricalComponent
  ],
  imports: [
    AppRoutingModule,
    AutoCompleteModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    ChartModule,
    ConfirmPopupModule,
    DialogModule,
    RadioButtonModule,
    MatIconModule,
    InputNumberModule,
    HttpClientModule,
    SidebarModule,
    TableModule,
    ToastModule,
    TabViewModule,
    FormsModule,
    ToolbarModule,
    CalendarModule,
    ReactiveFormsModule,
    InputTextModule


        // CalendarModule,
        // SliderModule,
        // MultiSelectModule,
        // ContextMenuModule,
        // DropdownModule,
        // ProgressBarModule,
        // RatingModule,
        // RadioButtonModule,
        // InputNumberModule,
        // ConfirmDialogModule,
        // InputTextareaModule
  ],
  providers: [TableService, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
