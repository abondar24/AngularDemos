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
var TaskTooltipDirective = (function () {
    function TaskTooltipDirective(el) {
        this.el = el;
    }
    TaskTooltipDirective.prototype.onMouseOver = function () {
        if (!this.defaultTooltipText && this.taskTooltip) {
            this.defaultTooltipText = this.taskTooltip.innerText;
        }
        this.taskTooltip.innerText = this.task.name;
    };
    TaskTooltipDirective.prototype.onMouseOut = function () {
        if (this.taskTooltip) {
            this.taskTooltip.innerText = this.defaultTooltipText;
        }
    };
    return TaskTooltipDirective;
}());
__decorate([
    core_1.Input('task'),
    __metadata("design:type", Object)
], TaskTooltipDirective.prototype, "task", void 0);
__decorate([
    core_1.Input('task'),
    __metadata("design:type", Object)
], TaskTooltipDirective.prototype, "taskTooltip", void 0);
__decorate([
    core_1.HostListener('mouseover'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskTooltipDirective.prototype, "onMouseOver", null);
__decorate([
    core_1.HostListener('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskTooltipDirective.prototype, "onMouseOut", null);
TaskTooltipDirective = __decorate([
    core_1.Directive({
        selector: '[task]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], TaskTooltipDirective);
exports.default = TaskTooltipDirective;
