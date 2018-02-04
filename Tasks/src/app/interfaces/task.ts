import Queueable from "./queueable";

interface Task extends Queueable{
    name: string;
    deadline: Date;
    tomatoRequired: number;
}

export default Task
