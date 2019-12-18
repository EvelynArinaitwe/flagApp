//import uuidv4 from 'uuid/v4';
const express = require('express')
//const Joi = require('joi')
const app = express()
const port = 3000

let redflag=[
    {id : 1, name : "fraud", geo : "370"},
    {id : 2, name : "embezzlememt", geo : "600"},
    {id : 3, name : "tribalism", geo : "380"}
];

let intervention = {
    1 : {id : 1, name : "floods", geo : "0"},
    2 : {id : 2, name : "bad roads", geo : "100"},
    3 : {id : 3, name : "tsunami", geo : "70"}


};

app.get('/redflags', (req, res) => {res.send(redflag);});

app.get('/redflags/:id', (req, res) => {
    return res.send(redflag[req.params.id]);
  });

app.get('/interventions', (req, res) => {res.send(intervention);});

app.get('/interventions/:id', (req, res) => {
    return res.send(intervention[req.params.id]);
  });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/redflags', (req, res) => {
    const id = 4;
    const flg = {
      id,
      name: req.body.name,
      geo : req.body.geo
    };
    redflag[id] = flg;
    return res.send(flg);
  });

  app.delete('/interventions/:id', (req, res) => {
    const {
      [req.params.id]: interv,
      ...otherInterv
    } = intervention;
    intervention = otherInterv;
    return res.send(intervention);
  });

  app.put('/redflags/:id', (req, res) => {
    const flg = redflag.find(c=> c.id === parseInt(req.params.id));
      flg.name = req.body.name;
      flg.geo = req.body.geo;
      return res.send(flg);
  });
  

app.listen(port, () => console.log(`Flag app listening on port ${port}!`))