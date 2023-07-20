import PostCard from "../components/partials/card";
import { LoginForm } from "../components/modules/login";
import { RegisterForm } from "../components/modules/register";
import { Nav } from "../components/common/nav";
import { useState, useEffect } from "react";
import axios from "axios";
import AddPost from "../components/modules/addpost";
import { PostDisplay } from "../components/modules/postdisplay";

export const Home = () => {
    const [announcements,setAnnouncements]=useState([]);
    const [forums, setForums]=useState([]);
    const localhost="192.168.54.34";
    const loadAnnouncements = async ()=>{
        const res = await axios.get(`http://${localhost}:3000/api/officialpost/all`);
        setAnnouncements(res.data);
        console.log(announcements)
    }
    useEffect(()=>{
        (async ()=>{
            await loadAnnouncements();
        })();
    },[])

    const loadForums=async()=>{
        const res= await axios.get(`http://${localhost}:3000/api/post`);
        setForums(res.data);
    }
    useEffect(()=>{
        (async ()=>{
            await loadForums();
        })();
    },[])

  return (
    <>
      <div className="home">
        <div className="banner">
          <h1>Welcome to our Website!</h1>
          <p>Discover amazing content and connect with others.</p>
          </div>
          <div className="information-section">
            <div className="news">
                <div className="title-box">
                    <div className="title">NEWS</div>
                </div>
                <div className="card">
                    {announcements.map(v,key)=>{<div className="card-title">{announcement.content}</div>}}
                    <div className="card-description">{announcements.content}</div>
                </div>
            </div>
            <div className="hot-posts">
                <div className="title-box">
                        <div className="title">HOT POSTS</div>
                </div>
                <div className="card">
                    <div className="card-title">{}</div>
                    <div className="card-description"></div>
                </div>
            </div>
          </div>
      </div>
    </>
  );
};
