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
var TaskService = (function () {
    function TaskService() {
        this.taskStore = [];
        var tasks = [
            {
                name: "Code  HTML table",
                deadline: "Mar 26 2017",
                tomatoRequired: 1
            },
            {
                name: "Fix Bugs",
                deadline: "Mar 29 2017",
                tomatoRequired: 2
            },
            {
                name: "Buy a burger",
                deadline: "Mar 31 2017",
                tomatoRequired: 1
            },
            {
                name: "Special task ",
                deadline: "Apr 3 2017",
                tomatoRequired: 3
            }
        ];
        this.taskStore = tasks.map(function (task) {
            return {
                name: task.name,
                deadline: new Date(task.deadline),
                queued: false,
                tomatoRequired: task.tomatoRequired
            };
        });
    }
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TaskService);
exports.default = TaskService;
