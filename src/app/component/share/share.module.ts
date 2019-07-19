import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

/* PRIMENG se istancian acá para dejar el app.modulo limpio */

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { CommonModule } from '@angular/common';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {SpinnerModule} from 'primeng/spinner';

@NgModule({
  imports: [
    RouterModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule,
    CommonModule,
    CheckboxModule,
    ToastModule,
    DynamicDialogModule,
    InputTextareaModule,
    CalendarModule,
    SpinnerModule
  ],
  exports: [
    RouterModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule,
    CommonModule,
    CheckboxModule,
    ToastModule,
    DynamicDialogModule,
    InputTextareaModule,
    CalendarModule,
    SpinnerModule
  ],
declarations: [
// ContentHeaderComponent,
// BreadcrumbComponent
]
})
export class SharedModule { }
