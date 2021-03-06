import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatListModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatRippleModule,
  MatFormFieldModule,
  MatDialogModule,
  MatDatepickerModule, MatNativeDateModule,
  MatSnackBarModule, MatMenuModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatRippleModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule, MatNativeDateModule,
    MatSnackBarModule,
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatRippleModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule, MatNativeDateModule,
    MatSnackBarModule,
  ],
  providers: [MatDatepickerModule]
})
export class MaterialModule { }
