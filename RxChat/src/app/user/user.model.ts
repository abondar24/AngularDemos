import {uuid} from "../util/uuid.util";

export class User {
  id: string;

  constructor(public name:string,
              public avatarSrc: string){
    this.id = uuid();
  }
}
