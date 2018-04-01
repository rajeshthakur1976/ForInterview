"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageTitle = "Hello Angular2 Test dd!";
        this.imageWithPropertyBinding = "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    }
    AppComponent.prototype.MakeAjaxCzal = function () {
        $.ajax({ url: "", });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n         <div><h1>{{pageTitle}}</h1>\n<img [src]='imageWithPropertyBinding'/>\n<br>\n<img src={{imageWithPropertyBinding}}/>\n<br>\n<br>\n<br>\n\n<course></course>\n    </div>\n    "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map