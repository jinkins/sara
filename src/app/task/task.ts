export class Task {

    private id: string;
    private title: string;
    private description?: string;
    private priority: number;
    private deadline?: Date;

    constructor(i: string, t: string, d: string, p: number, dl: Date) {
        this.id = i;
        this.title = t;
        this.description = d;
        this.priority = p;
        this.deadline = dl;
    }

    getDeadline(): Date {
        return this.deadline;
    }

    getPriority():number {
        return this.priority;
    }

    diffDays(d: Date): number {
        let timeDiff: number = this.deadline.getTime() - d.getTime();
        let diffDays: number = Math.floor(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    }

    deadlineStatusStyle(): string { // return the style class to apply regarding the deadline status
        let daysLeft = this.deadlineDaysLeft();

        if (daysLeft < 0) {
            return "label label-danger";
        }
        else if (daysLeft < 2) {
            return "label label-warning";
        }

        else if (daysLeft < 8) {
            return "label label-info";
        }

        return "label label-success";

    }

    deadlineDaysLeft(): number { // return a number regading the number of days left before the deadline
        let today: Date = new Date();
        return this.diffDays(today);
    }

    deadlineDaysLeftText(t: Task): string { // return a text regading the number of days left before the deadline
        let daysLeft = this.deadlineDaysLeft();
        if (daysLeft < 0) {
            return "Overdue"
        }
        else if (daysLeft == 0) {
            return "Due today";
        }

        else if (daysLeft == 1) {
            return "Due tomorrow";
        }

        else if (daysLeft > 1) {
            return "Due in " + daysLeft + "days";
        }

        
    }
}
