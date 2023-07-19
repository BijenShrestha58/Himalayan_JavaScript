import PostCard from "../components/partials/card";
import { LoginForm } from "../components/common/login";
import { Nav } from "../components/common/nav";
import { useState } from "react";
    // const [results, setResults] = useState([]);
    // const getDetails = async () => {
    //     let result = await fetch(`http://localhost:5000/bookdetails/${key}`);
    //     result = await result.json();
    //     if (result) {
    //       setResults(result);
    //     }
    //   };

  
    
   {/* {getDetails.map((details, index) => (
         <>
        <ForumCard title={details.content}
         upvote={details.upvote}
          downvote={details.downvote}
          author={details.author}
          subforum={details.subforum} ></ForumCard>
        </>
   )) } */}

  

export const Home=()=>{
    const [loginIsVisible,setLoginIsVisible]=useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
      };

     const handleSubmit = () => {
    // Handle the logic for submitting the input value here
    console.log('Submitted:', inputValue);
    setInputValue('');
     }
    return(
    <>
    <Nav open={()=>{setLoginIsVisible(true)}}/>
    <div className="home">
    <div className="banner">
    <h1>Welcome to our Website!</h1>
    <p>Discover amazing content and connect with others.</p>
    </div>
    
    <div className="whats-on-your-mind">
      <textarea
        rows="3"
        placeholder="What's on your mind?"
        value={inputValue}
        onChange={handleChange}
        className="tweet-input"
      />
      <button onClick={handleSubmit} className="post-button" disabled={!inputValue.trim()}>
        Post
      </button>
    </div>


    <PostCard
        title="Amazing post title"
        upvotes={42}
        downvotes={10}
        comments={8}
      />
    <LoginForm open={loginIsVisible} close={()=>{setLoginIsVisible(false)}}/>
    </div>
    </>
    )
}
