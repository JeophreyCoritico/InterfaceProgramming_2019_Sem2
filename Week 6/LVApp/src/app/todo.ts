export class todo {
    title: string;
    completed: boolean;

    createdDate: Date;
    completedDate: Date;

    constructor(title: string, completed: boolean){
        this.title = title;
        this.completed = completed;

        this.createdDate = new Date();
        if(completed){
            this.completedDate = new Date();
        }
    }
}