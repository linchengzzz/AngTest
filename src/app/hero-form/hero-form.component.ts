import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    submitted = false;

    onSubmit()
    {
        this.submitted = true;
    }

    newHero() {
    }
}
