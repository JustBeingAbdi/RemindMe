import mongoose from "mongoose";
import express from "express";
import path from "path";
import ejs from "ejs"



export class Server {
    
	public async init(): Promise<void> {
        let app = express();
		
		
		
		
    app.engine("html", ejs.renderFile);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, "./../views"));
    app.use(express.static(path.join(__dirname, "./../public")));
		
		
		app.get("/", async(req, res) => {
			res.render("index");
		})
	
		
		
		
		app.listen(3000)
		console.log('Webserver is online on port 3000');
	}
}