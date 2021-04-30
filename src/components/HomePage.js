import './HomePage.css';
import {Link} from "react-router-dom";


function Home(){


  return(
    <div className="Home" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/DogBg.png')`}}>
      <main>
        <h1 className="Title">Welcome!</h1>
        <div>
          <Link className="Button" to="/List">See the dogs</Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
