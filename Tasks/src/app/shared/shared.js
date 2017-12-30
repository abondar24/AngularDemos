"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatted_time_pipe_1 = require("./pipes/formatted-time.pipe");
exports.FormattedTimePipe = formatted_time_pipe_1.default;
var queued_only_pipe_1 = require("./pipes/queued-only.pipe");
exports.QueuedOnlyPipe = queued_only_pipe_1.default;
var settings_service_1 = require("./services/settings.service");
exports.SettingsService = settings_service_1.default;
var task_service_1 = require("./services/task.service");
exports.TaskService = task_service_1.default;
var SHARED_PIPES = [
    formatted_time_pipe_1.default,
    queued_only_pipe_1.default
];
exports.SHARED_PIPES = SHARED_PIPES;
var SHARED_PROVIDERS = [
    settings_service_1.default,
    task_service_1.default
];
exports.SHARED_PROVIDERS = SHARED_PROVIDERS;
