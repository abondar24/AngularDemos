"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../shared/shared");
var TimerWidgetComponent = (function () {
    function TimerWidgetComponent(settingsService) {
        this.settingsService = settingsService;
        this.buttonLabelsMap = settingsService.labelsMap.timer;
    }
    TimerWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetTomato();
        setInterval(function () { return _this.tick(); }, 1000);
    };
    TimerWidgetComponent.prototype.resetTomato = function () {
        this.isPaused = true;
        this.minutes = this.settingsService.timerMinutes - 1;
        this.seconds = 59;
        this.buttonLabelKey = 'start';
    };
    TimerWidgetComponent.prototype.tick = function () {
        if (!this.isPaused) {
            this.buttonLabelKey = 'pause';
            if (--this.seconds < 0) {
                this.seconds = 59;
                if (--this.minutes < 0) {
                    this.resetTomato();
                }
            }
        }
    };
    TimerWidgetComponent.prototype.togglePause = function () {
        this.isPaused = !this.isPaused;
        if (this.minutes < this.settingsService.timerMinutes || this.seconds < 59) {
            this.buttonLabelKey = this.isPaused ? 'resume' : 'pause';
        }
    };
    return TimerWidgetComponent;
}());
TimerWidgetComponent = __decorate([
    core_1.Component({
        selector: 'tomato-timer-widget',
        template: "\n        <div class=\"text-center\">\n            <img src=\"/app/shared/assets/img/tomato.png\" alt=\"Tomato\">\n            <h1>{{minutes}}:{{seconds | number: '2.0'}}</h1>\n            <p>\n                <button (click)=\"togglePause\" class=\"btn btn-danger\">\n                    {{ buttonLabelKey | i18nSelect: buttonLabelsMap }}\n                </button>\n            </p>\n        </div>"
    }),
    __metadata("design:paramtypes", [shared_1.SettingsService])
], TimerWidgetComponent);
exports.default = TimerWidgetComponent;
