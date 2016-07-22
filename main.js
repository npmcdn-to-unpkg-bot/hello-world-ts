"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vincebloise on 6/11/16.
 */
///<reference path="./node_modules/angular2/typings/browser.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
        this.name = 'Angular 2, mo fo!!';
    }
    HelloWorldComponent = __decorate([
        core_1.Component({
            selector: 'hello-world',
            template: '<h1>Hello {{ name }}!</h1>'
        })
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());
platform_browser_dynamic_1.bootstrap(HelloWorldComponent);
//# sourceMappingURL=main.js.map