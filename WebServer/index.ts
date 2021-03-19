import mongoose from "mongoose";
import express from "express";
import path from "path";
import ejs from "ejs"
import srs from "secure-random-string";
import { Database } from "./../Database";



export class Server {
    
    public database: Database = new Database();
    
	public async init(): Promise<void> {
        let app = express();
		
		
		
		
    app.engine("html", ejs.renderFile);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, "./../views"));
    app.use(express.static(path.join(__dirname, "./../public")));
		
		
		app.get("/", async(req, res) => {
            if(!req.query.token){
            res.render("index2");
            } else {
                let reminders = await this.database.GetReminders(req.query.token);
                res.render("index", {
                    reminders: reminders || null
                })
            }
        });
        

        app.get("/token/generate", async(req, res) => {
            res.send(srs({length:70}));
        })
	
		
		
		
		app.listen(3000)
		console.log('Webserver is online on port 3000');
	}
}