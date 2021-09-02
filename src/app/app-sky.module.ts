import { CommonModule } from '@angular/common';
import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule,
} from '@skyux/indicators';

import {
  SkyFluidGridModule,
  SkyToolbarModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import {
  SkyInputBoxModule
} from '@skyux/forms';

import {
  SkyEmailValidationModule
} from '@skyux/validation';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { SkyIdModule } from '@skyux/core';
// import { FormBuilder } from '@angular/forms';
import { SkyDatepickerModule } from '@skyux/datetime';
import { SkyThemeModule } from '@skyux/theme';
import { HttpClientModule } from '@angular/common/http';
import { SkyPhoneFieldModule } from '@skyux/phone-field';
import { SkyStatusIndicatorModule } from '@skyux/indicators';
import { SkyAgGridModule } from '@skyux/ag-grid';
import { SkyDropdownModule } from "@skyux/popovers";
import { SkyDataEntryGridContextMenuComponent } from './data-entry-grid-context-menu/data-entry-grid-context-menu.component';
import { SkyDataEntryGridEditModalComponent } from './data-entry-grid-edit-modal/data-entry-grid-edit-modal.component';
import { SkyModalModule } from '@skyux/modals';
import { SkySearchModule } from '@skyux/lookup';
import { SkyGridModule } from '@skyux/grids'


@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    CommonModule,
    SkyInputBoxModule,
    SkyEmailValidationModule,
    FormsModule,
    ReactiveFormsModule,
    SkyIdModule,
    SkyDatepickerModule,
    SkyThemeModule,
    HttpClientModule,
    SkyPhoneFieldModule,
    SkyStatusIndicatorModule,
    SkyAgGridModule,
    SkyDropdownModule,
    SkyModalModule,
    SkySearchModule,
    SkyToolbarModule,
    SkyGridModule


  ],
  entryComponents: [

    SkyDataEntryGridContextMenuComponent,

    SkyDataEntryGridEditModalComponent

  ]
})
export class AppSkyModule { }
