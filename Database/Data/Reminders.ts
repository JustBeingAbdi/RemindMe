import {Document, Model, model, Schema} from "mongoose";


export interface IReminder extends Document {
    id:string,
    name:string,
    time:string,
    method:string
}


export const RemindSchema: Schema = new Schema({
    id: { type: String},
    name: { type: String},
    time: { type: String},
    method: { type: String, default: 'browser'},
});


export const Reminder: Model<IReminder> = model("Reminder", RemindSchema);