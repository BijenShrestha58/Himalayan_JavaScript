import { useState } from "react";
import DialogBox from "../common/dialogbox";

export const AnnouncementForm  =(props)=>{
    const [announcement,setAnnouncement] = useState({ wardNumber:'', content: '', author:''});
    const submitForm=async (e)=>{
        e.preventDefault();
        // console.log(localuserId)
        await props.submit(announcement)
    }
    const localWardNumber=localStorage.getItem('wardNumber');
    const localUserId=localStorage.getItem('userId')
    console.log(localUserId)
    console.log(localWardNumber)
    const formHandler=(e)=>{
        setAnnouncement({
            ...announcement,
            [e.target.name]: e.target.value,
            wardNumber: localStorage.getItem('wardNumber'),
            author: localStorage.getItem('userId')
            // [wardNumber]:localwardNumber,
            // [author]:localuserId
            
        })
    }
    return (
    <>
    {props.open &&
    <DialogBox open={props.open} close={props.close}>
    <form onSubmit={submitForm}>
        <input name="content" placeholder="Enter content" required onChange={formHandler}/>
        {/* <input name="author" placeholder="Enter author" required onChange={formHandler}/> */}
        <button type="submit">Submit</button>
    </form>
    </DialogBox>
    }
    </>
    )
}