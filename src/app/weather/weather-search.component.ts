import { Component } from '@angular/core';
import { WeatherItem } from './weather-item';

@Component({
    selector: 'my-weather-search',
    template: `
        <section class="weather-search">
            <form #weatherSearchForm="ngForm" (ngSubmit)="onSubmit(weatherSearchForm)">
                <label for="city">City</label>
                <input text="text" id="city" required name="city" ngModel>
                <button type="submit">Add City</button>
            </form>
            <div>
                <span class="info">City found:</span>City Name
            </div>
        </section>
    `
})

export class WeatherSearchComponent {
    onSubmit(value: any) {
        console.log("My form was submitted");
        console.log(value);
    }
}
