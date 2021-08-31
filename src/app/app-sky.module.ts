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
  SkyFluidGridModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import{
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
import {  SkyPhoneFieldModule } from '@skyux/phone-field';
import {   SkyStatusIndicatorModule } from '@skyux/indicators';

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
    SkyStatusIndicatorModule
  ]

})
export class AppSkyModule { }
