import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(injector: Injector, public popup: PopupService) {
        // Convert `PopupComponent` to a custom element.
        const PopupElement = createCustomElement(PopupComponent, { injector });
        // Register the custom element with the browser.
        customElements.define('popup-element', PopupElement);
    }
}