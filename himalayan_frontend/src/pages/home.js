import ForumCard from "../components/partials/card";
export const Home = () => {
    // const [results, setResults] = useState([]);
    // const getDetails = async () => {
    //     let result = await fetch(`http://localhost:5000/bookdetails/${key}`);
    //     result = await result.json();
    //     if (result) {
    //       setResults(result);
    //     }
    //   };

  return (
    <div className="home">
    <ForumCard title="Hello"
         upvote={20}
          score={10}
          author="Bijen"
          numComments={20}
          subforum="Ward07" ></ForumCard>
   {/* {getDetails.map((details, index) => (
         <>
        <ForumCard title={details.content}
         upvote={details.upvote}
          downvote={details.downvote}
          author={details.author}
          subforum={details.subforum} ></ForumCard>
        </>
   )) } */}

    </div>
  );
};
