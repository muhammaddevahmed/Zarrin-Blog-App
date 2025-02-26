
import "./FeaturedCard.css";

const OverlappingCard = () => {
  return (
    <div className="overlapping-card-container">
      <div className="image-card">
        {/* Replace with your image URL */}
        <img 
          src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Development" 
          className="image" 
        />
        <div className="info-card12">
          <p className="date">Development • 16 March 2023</p>
          <h2 className="title">AI is Impact on the Future</h2>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quis deleniti vel cupiditate nisi, accusamus laborum ratione nesciunt culpa porro, provident quos exercitationem animi. Veniam a illo voluptatem, doloribus temporibus animi nemo incidunt iste eaque quisquam nam libero atque ex.
          </p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default OverlappingCard;
