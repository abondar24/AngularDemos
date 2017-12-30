import {Queueable} from '../shared';

interface Task extends Queueable{
    name: string;
    deadline: Date;
    tomatoRequired: number;
}

export default Task