import express from "express";

const app = express()

app.use(express.json());

const people = [];

app.get("/", (request, response)=>{

        return response.json({
            ok: true,
            data: people,
        })

});

/*
app.post("/create", function(req, res){
    //const data = req.body
    //destructuracion
    const {nombre, apellido} = req.body;
    return res.json(nombre);
});
*/
//error 500 del servidor
//401 y 4003
//404 no se encuentra un archivo

app.post("/create", function(req, res){

    const data = req.body;
    data.id = people.length + 1;
    people.push(req.body);

    return res.status(201).json({
        ok: true,
        data: "Create",
    })

})

//UPDATE
app.put("/update/", (req, res)=>{
    const data = req.body;
    people[data.id-1].nombre=data.nombre;
    people[data.id-1].apellido=data.apellido;

    return res.json({
        ok: true,
        data: "Update",
    })
});

//DELETE PERSON
/*
app.delete('/delete/:id', (req,res) =>{
    const data = req.params.id;
    let deletePerson;
    people.forEach((item, i) => {
      if(item.id == id){
        deletePerson = people.splice(i,i + 1);
      }
    });

*/

app.delete('/delete/:id', (req,res) =>{
    const data = req.params.id;
    const index = people.findIndex((perDelete => perDelete.id==data));
    people.splice(index,1);

    return res.json({
        ok:true,
        data: "Delete"
    })
})

app.listen(6004, () =>
 console.log(`El servidor inicio en http://localhost:6004`)
 )
