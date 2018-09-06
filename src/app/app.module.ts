import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { HeroBirthday1Component } from './hero-birthday1/hero-birthday1.component';
import { ExponentialPipe } from './exponential.pipe';

// Include the `PopupService` provider,
// but exclude `PopupComponent` from compilation,
// because it will be added dynamically.

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
    providers: [PopupService],
    declarations: [AppComponent, PopupComponent, HighlightDirective, UnlessDirective, HeroBirthday1Component, ExponentialPipe],
    bootstrap: [AppComponent],
    entryComponents: [PopupComponent],
})
export class AppModule {
}