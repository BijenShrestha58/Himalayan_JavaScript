import { useState } from "react";
import DialogBox from "../common/dialogbox";

export const AnnouncementForm  =(props)=>{
    const [announcement,setAnnouncement] = useState({ wardNumber:'', content: '', author:''});
    const submitForm=async (e)=>{
        e.preventDefault();
        await props.submit(announcement)
    }

    const formHandler=(e)=>{
        setAnnouncement({
            ...announcement,
            [e.target.name]: e.target.value
        })
    }
    return (
    <>
    {props.open &&
    <DialogBox open={props.open} close={props.close}>
    <form onSubmit={submitForm}>
        <input name="content" placeholder="Enter content" required onChange={formHandler}/>
        <input name="author" placeholder="Enter author" required onChange={formHandler}/>
        <button type="submit">Submit</button>
    </form>
    </DialogBox>
    }
    </>
    )
}