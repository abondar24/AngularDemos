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
var task_icons_component_1 = require("./task-icons.component");
var task_tooltip_directive_1 = require("./task-tooltip.directive");
var shared_1 = require("../shared/shared");
var TasksComponent = (function () {
    function TasksComponent(tasksService, settingsService) {
        this.tasksService = tasksService;
        this.settingsService = settingsService;
        this.tasks = [];
        this.tasks = this.tasksService.taskStore;
        this.today = new Date();
        this.queueHeaderMapping = settingsService.pluralsMap.tasks;
        this.timerMinutes = settingsService.timerMinutes;
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.updateQueuedTomatoes();
    };
    TasksComponent.prototype.toggleTask = function (task) {
        task.queued = !task.queued;
        this.updateQueuedTomatoes();
    };
    TasksComponent.prototype.updateQueuedTomatoes = function () {
        this.queuedTomatoes = this.tasks
            .filter(function (task) { return task.queued; })
            .reduce(function (tomatoes, queuedTask) {
            return tomatoes + queuedTask.tomatoRequired;
        }, 0);
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    core_1.Component({
        selector: 'tomato-tasks',
        entryComponents: [task_icons_component_1.default, task_tooltip_directive_1.default, shared_1.SHARED_PIPES],
        styleUrls: ['/app/tasks/tasks.component.css'],
        templateUrl: '/app/tasks/tasks.component.html'
    }),
    __metadata("design:paramtypes", [shared_1.TaskService,
        shared_1.SettingsService])
], TasksComponent);
exports.default = TasksComponent;
