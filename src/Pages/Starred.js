import {useState,useEffect} from "react";
import { getAuth} from "firebase/auth"
import { db } from "../firebase";
import Navbar from '../Components/Navbar';
import  Offcanvas from '../Components/Offcanvas';
import '../Home.css';
import {
  collection,
  onSnapshot
} from "firebase/firestore";
export default function Starred() {
    
    const auth = getAuth();
    const [note, setNote] = useState([{id:"initial"}]);
    let noteStar=[];
    useEffect(() => 
       onSnapshot(collection(db,auth.currentUser.email),(snapshot) =>
        setNote(snapshot.docs.map((doc) => ({ ...doc.data(),id:doc.id})))
       ),
    []);


    console.log(noteStar);
    return(
        <div>
            <Navbar />
            <Offcanvas />
            <div className="dispNotes">
                {note.map((notes) => (
                     <div className="dispSingleNotes" key={notes.id}>
                      
                            <h3>{noteStar.title}</h3>
                            <p>{noteStar.note}</p>
                            

                    </div>
                 ))}
            </div>
        </div>
    );
};