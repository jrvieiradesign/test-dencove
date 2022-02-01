import express from "express";
import { connect } from "mongoose";
import routes from './routes';
import path from "path";
import bodyParser from "body-parser";

export async function run():Promise<void> {
  await connect('mongodb+srv://DbUser:DbUser@cluster0.qcsd4.mongodb.net/test-dencove?retryWrites=true&w=majority')
}

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.set( "views", path.join( __dirname, "views" ) );
app.set('view engine', 'ejs');

app.use(routes);

run().catch(err => console.log(err));

app.listen(3333, () => {
  console.log('Server started on port 3333! 🏆');
});