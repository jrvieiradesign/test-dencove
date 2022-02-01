import { Router } from "express";
import { UrlModel } from "../db/schemas";

const routes = Router()

routes.get('/admin', async (req, res) => {
  const result = await UrlModel.find()
  res.render('index.ejs', { data: result })
});

routes.get('/user', async (req, res) => {
  const result = await UrlModel.find()
  res.render('usertemplate.ejs', { data: result })
});

routes.post('/create', async (req, res) => {
  const { url } = req.body;
  
  const result = await UrlModel.create({ url: url })

  result.save();

  res.redirect('/admin');

});

routes.delete('/delete', async (req, res) => {
    const { id } = req.body;
    await UrlModel.deleteOne({ id: id });
    
});

export default routes;