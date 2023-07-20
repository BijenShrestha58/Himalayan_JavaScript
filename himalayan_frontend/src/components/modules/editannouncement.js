import { useState } from "react";

export const EditAnnouncementForm  =(props)=>{
    const submitForm=async (e)=>{
        e.preventDefault();
        await props.submitForm(props.selectedAnnouncement)
    }

    const formHandler=(e)=>{
        props.setSelectedAnnouncement({
            ...props.selectedAnnouncement,
            [e.target.name]: e.target.value
        })
    }
    return <form onSubmit={submitForm}>
        <input value={props.selectedAnnouncement._id} name="_id" placeholder="Enter id" disabled required onChange={formHandler}/>
        <input value={props.selectedAnnouncement.title} name="content" placeholder="Enter content" required onChange={formHandler}/>
        <input value={props.selectedAnnouncement.status} name="author" placeholder="Enter author" required onChange={formHandler}/>
        <button type="submit" disabled={props.selectedAnnouncement.id ===''}>Submit</button>
    </form>
}