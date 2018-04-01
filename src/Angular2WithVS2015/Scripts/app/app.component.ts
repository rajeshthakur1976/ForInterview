
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
         <div><h1>{{pageTitle}}</h1>
<img [src]='imageWithPropertyBinding'/>
<br>
<img src={{imageWithPropertyBinding}}/>
<br>
<br>
<br>

<course></course>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = "Hello Angular2 Test dd!";
    imageWithPropertyBinding: string = "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

    MakeAjaxCzal(): void {
        $.ajax({ url: "", })
    }
}
