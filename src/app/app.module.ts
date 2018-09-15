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
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { FlyingHeroPipe } from "./flying-heroes.pipe";
import { HeroAsyncMessageComponent } from './hero-async-message/hero-async-message.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';

// Include the `PopupService` provider,
// but exclude `PopupComponent` from compilation,
// because it will be added dynamically.

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
    providers: [PopupService],
    declarations: [AppComponent, PopupComponent, HighlightDirective, UnlessDirective, HeroBirthday1Component, ExponentialPipe, FlyingHeroesComponent, FlyingHeroPipe, HeroAsyncMessageComponent, HeroFormComponent, HeroComponent, HeroListComponent],
    bootstrap: [AppComponent],
    entryComponents: [PopupComponent],
})
export class AppModule {
}