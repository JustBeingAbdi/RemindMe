import {Reminder} from "./Data/Reminders";
import mongoose from "mongoose";
import * as Config from "./../Config";


export class Database {
    public async CreateReminder(token, name, time, method): Promise<any> {
        let remindDB = new Reminder({
            id: token,
            name: name,
            time: time,
            method: method
        });
        remindDB.save();
        return remindDB;
    }
    public async GetReminders(token): Promise<any> {
        let remindDB = await Reminder.findOne({ id: token});
        if(remindDB) return remindDB;
    }
}

export class Connect {
    public async Connect(): Promise<any> {
        mongoose.connect(Config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
        });
    }
}