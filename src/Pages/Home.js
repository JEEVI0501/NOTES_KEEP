import {useState,useEffect} from "react";
import { getAuth} from "firebase/auth"
import { db } from "../firebase";
import Navbar from '../Components/Navbar';
import  Offcanvas from '../Components/Offcanvas';
import '../Home.css';
import {FaTrash} from "react-icons/fa";
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { Button} from "react-bootstrap"
export default function Home() {
    
    const auth = getAuth();
    const [note, setNote] = useState([{id:"initial"}]);
    var noteStar=[];
    useEffect(() => 
       onSnapshot(collection(db,auth.currentUser.email),(snapshot) =>
        setNote(snapshot.docs.map((doc) => ({ ...doc.data(),id:doc.id})))
       ),
    []);
    console.log(noteStar);
    const handleDelete = async (id) =>{
        await deleteDoc(doc(db, auth.currentUser.email ,id));
    };

    const toggleStar = async (notes) =>{
        await updateDoc(doc(db,auth.currentUser.email ,notes.id),{starred:!notes.starred});
        
    };
    console.log("home");
    return(
        <div>
            <Navbar />
            <Offcanvas />
            <div className="dispNotes">
                {note.map((notes) => (
                     <div className="dispSingleNotes" key={notes.id}>
                      
                            <h3>{notes.title}</h3>
                            <p>{notes.notes}</p>
                            <Button className="star" onClick = {() => toggleStar(notes)} > STAR</Button>
                         <div className="del" onClick = {() => handleDelete(notes.id)}> 
                            <FaTrash size={15} />
                        </div>

                    </div>
                 ))}
            </div>
        </div>
    );
};