import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc, getFirestore } from "firebase/firestore";


function Firestore({user}) {
  
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [id, setId] = useState("");
  const [modoEdicion, setModoEdicion] = useState(false);
  
  useEffect(() => {
      const obtenerDatos = async ()=>{
            const db = getFirestore();
            const datos = await getDocs(collection(db, user.uid));
            datos.forEach((documento)=>{
            const arrayData = datos.docs.map(doc => ({id: doc.id, ...doc.data()}))
            //console.log(arrayData);
            setTareas(arrayData);
          })
      }
      obtenerDatos();
  }, [user.uid]);

  const agregar = async(e)=>{
    e.preventDefault();
    
    if(!nuevaTarea.trim()){
      console.log('Esta vacio');
      return
    }
    
    try {
        const db = getFirestore();
        const guardarTarea = await addDoc(collection(db, user.uid), {
        name: nuevaTarea,
        fecha: Date.now()
      });
      
      setTareas([
        ...tareas,
        {...guardarTarea, id: guardarTarea.id}
      ])
      
      setNuevaTarea('');

    } catch (error) {
      console.log(error)
    }
    
    //console.log(nuevaTarea)
  }

  const eliminar = async (id)=>{
    try {
        const db = getFirestore();
        await deleteDoc(doc(db, user.uid, id));
      
      const arrayFiltrado = tareas.filter(item=> item.id !== id);
      setTareas(arrayFiltrado);


    } catch (error) {
      console.log(error)
      
    }
  }

  const activarEdicion = (item)=>{
    setModoEdicion(true);
    setNuevaTarea(item.name);
    setId(item.id);

  }
  const editar = async (e)=>{
    e.preventDefault();
    if(!nuevaTarea.trim()){
      console.log('vacio')
      return
    }
    try {
      /* await db.collection('tareas').doc(id).update({
        name: nuevaTarea
      }) */
      const db = getFirestore();
      const edit = doc(db, user.uid, id);
      await updateDoc(edit, {
        name: nuevaTarea
      })

      const arrayEditado = tareas.map(item =>(
        item.id === id ? {id: item.id, fecha:item.fecha, name: nuevaTarea } : item
      ));
      setTareas(arrayEditado);
      setModoEdicion(false);
      setNuevaTarea('');
      setId('');

    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="container mt-3">
      <h1>CRUD</h1>
      <br />
      <div className="row">
        <div className="col-md-6">
        <h3>Lista de tareas</h3>
          <ul className="list-group">
            {
              tareas.map(item=>(
                <li className="list-group-item" key={item.id}>
                  {item.name}
                
                    <button 
                        className="btn btn-danger btn-sm float-end"
                        onClick={()=> eliminar(item.id)}
                    >Eliminar
                    </button>
                    <button 
                        className="btn btn-warning btn-sm float-end mx-3"
                        onClick={()=> activarEdicion(item)}
                    >Editar
                    </button>
                </li>
              ))
            }

          </ul>
        </div>
        <div className="col-md-6">
          <h3>
              {
                modoEdicion ? 'Editar tarea' : 'Agregar tarea'
              }
          </h3>
          <form onSubmit={modoEdicion ? editar : agregar}>
            <input 
                type="text" 
                placeholder="Ingresar tarea"
                className="form-control mb-2"
                onChange={e => setNuevaTarea(e.target.value)}
                value={nuevaTarea}
            />
            <button
              className={ modoEdicion ? "btn btn-warning btn-block" : "btn btn-secondary btn-block"}
              type="submit"
            >
              {
                modoEdicion ? 'Editar' : 'Agregar'
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Firestore;


