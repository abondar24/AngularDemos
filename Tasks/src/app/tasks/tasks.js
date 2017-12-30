"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tasks_component_1 = require("./tasks.component");
exports.TasksComponent = tasks_component_1.default;
var task_tooltip_directive_1 = require("./task-tooltip.directive");
exports.TaskTooltipDirective = task_tooltip_directive_1.default;
var TASK_DIRECTIVES = [
    tasks_component_1.default,
    task_tooltip_directive_1.default
];
exports.TASK_DIRECTIVES = TASK_DIRECTIVES;
