import { AnnouncementForm } from "../components/modules/addannouncement"
import axios from "axios";
import {useState, useEffect} from "react";
import { EditAnnouncementForm } from "../components/modules/editannouncement";
export const AnnouncementPage=(props)=>{
    const localhost="192.168.54.30";
    const createAnnouncement = async(newannouncement)=>{
        try{
         const res = await axios.post(`http://${localhost}:3000/api/officialpost/news`,newannouncement);
         await loadAnnouncements();
        }catch(e){
         console.log(e);
        }
     }
     const [selectedAnnouncement, setSelectedAnnouncement] = useState({
        _id: '',
        content: '',
        author:'',
    });

    const [announcements,setAnnouncements]=useState([]);
    
    useEffect(()=>{
        (async ()=>{
            await loadAnnouncements();
        })();
    },[])

    const loadAnnouncements = async ()=>{
        const res = await axios.get(`http://${localhost}:3000/api/officialpost/all`);
        setAnnouncements(res.data);
    }
    const loadSelectedAnnouncement =async (id)=>{
        const res = await axios.get(`http://${localhost}:3000/api/officialpost`+id);
        setSelectedAnnouncement(res.data.data);
    } 
    const deleteAnnouncement = async (_id)=>{
        try{
            const res = await axios.delete(`http://${localhost}:3000/api/officialpost`+_id);
            await loadAnnouncements();
           }catch(e){
            console.log(e);
           }
    }
    const updateAnnouncement = async (_id)=>{
        try{
            const res = await axios.put(`http://${localhost}:3000/api/officialpost`+selectedAnnouncement._id, selectedAnnouncement);
            await loadAnnouncements();
            resetEditForm();
           }catch(e){
            console.log(e);
           }
    }

    const resetEditForm=()=>{
        setSelectedAnnouncement({
            _id:'',
            content:'',
            author:'',
            
        })
    }
    const[isVisible,setIsVisible]=useState(false);

    return (
    <>
        <section>
    <h1>Announcements</h1>
    <button onClick={()=>setIsVisible(true)}>Create new announcement</button>
    <AnnouncementForm submit={createAnnouncement} open={isVisible} close={()=>setIsVisible(false)}/>

    <div className={"announcements-list"}>
            <h2>Announcements List</h2>
        <div className="announcements">
            {announcements.map((v, key) => (
                <div className={"card"} key={key}>
                    <div>{v.content}</div>
                    <p>{v.author}</p>
                    <button onClick={()=>loadSelectedAnnouncement(v._id)}>Edit Announcement</button>
                    <button onClick={()=>deleteAnnouncement(v._id)}>Delete Announcement</button>
                    
                </div>
            ))}
        </div>
    </div> 
    <EditAnnouncementForm selectedAnnouncement={selectedAnnouncement} setSelectedAnnouncement={setSelectedAnnouncement} submitForm={updateAnnouncement}/>
    
</section>
    </>
    )
}