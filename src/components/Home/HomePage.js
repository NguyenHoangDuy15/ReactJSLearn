import videoHomepage from "../../assets/video-homepage.mp4";

const HomePage = () => {
  return (
    <div className="homepage-container" >
      <video autoPlay loop muted className="homepage-video" width={"50%"} height={"50%"}> 
        <source src={videoHomepage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className='title-1'>Here's a better way to ask</div>
        <div className='title-2'>abc</div>
        <div className='title-3'><button>Start</button></div>
      </div>
    </div>
  );
};
export default HomePage;
