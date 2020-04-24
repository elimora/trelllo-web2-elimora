/*Aca almacenare en un objeto todas las FUNCIONES que estan 
*relacionadas con las notas o actividades. Se creara un objeto 
llamado notesCtrl, dentro del cuan se almacenaran las notas.
**/
const notesCtrl={}

const Note =require('../models/Note')

notesCtrl.getNotes= async(req,res)=>{
    const notes= await Note.find()//devuelve  un arrego con las notas d la DB [{},{},{}]
    res.json(notes)               
}

notesCtrl.createNotes= async (req,res)=>{
    //console.log(req.body)//repesenta los datos enviados por el cliente
    const {title,content,date,author}=req.body //mediante esta funcion obtengo estos campos del body
    const newNote= new Note({
        title:title,
        content:content,
        date:date,
        author:author
    })
    await newNote.save()//afectar la base de datos tardara algun tiempo (await)
    res.json({
        message:'Mensage guardado'
    })
}

notesCtrl.upDateNotes=async (req,res)=>{
    //console.log(req.params.id,req.body)
    const{title,content,author}=req.body
    await Note.findOneAndUpdate(req.params.id,{
        title:title,
        author:author,
        content:content
    })
    res.json({
        message:'PUT acatualizada '
    })
}

notesCtrl.deleteNotes= async(req, res)=>{
    await Note.findByIdAndDelete(req.params.id)
    res.json({
        message:'DELETRE request'
    })        
}

notesCtrl.getNote= async (req,res)=>{
  // console.log(req.params.id) mostraria por consola el id que necesito para buscar en la DB
  const note= await Note.findById(req.params.id)//devuelve una unica nota
  res.json(note)
}


module.exports=notesCtrl