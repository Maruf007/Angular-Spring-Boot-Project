import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { BlockUIModule } from 'primeng/blockui';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MegaMenuModule } from 'primeng/megamenu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChipModule } from 'primeng/chip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TreeTableModule } from 'primeng/treetable';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    exports: [
        InputTextModule,
        ButtonModule,
        PanelModule,
        MegaMenuModule,
        ToastModule,
        TableModule,
        BlockUIModule,
        BreadcrumbModule,
        ProgressSpinnerModule,
        ChipModule,
        InputSwitchModule,
        TreeTableModule,
        CalendarModule,
        DropdownModule
    ]
})
export class NgPrimeModule { }
