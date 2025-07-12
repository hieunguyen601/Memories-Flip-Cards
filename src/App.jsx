import './App.css';
import Image2019 from "./assets/2019.jpg";
import Image2020 from "./assets/2020.jpg";
import Image2021 from "./assets/2021.jpg";
import Image2022 from "./assets/2022.jpg";
import Image2023 from "./assets/2023.jpg";
import Image2024 from "./assets/2024.jpg";
import Image2025 from "./assets/2025.jpg";
function App() {
  return (
    <div className="year-cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <img className="image-2019" src={Image2019} alt="2019" />
            </div>
            <div className="flip-card-back">
                <h3>10/2019</h3>
                <p>Still in Vietnam</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <img className="image-2020" src={Image2020} alt="2020" />
            </div>
            <div className="flip-card-back">
                <h3>02/2020</h3>
                <p>Before I moved to the USA</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <img className="image-2021" src={Image2021} alt="2021" />
            </div>
            <div className="flip-card-back">
                <h3>09/2021</h3>
                <p>Exploring Downtown Houston</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <img className="image-2022" src={Image2022} alt="2022" />
            </div>
            <div className="flip-card-back">
                <h3>07/2022</h3>
                <p>Visited Vietnam and Malaysia</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <img className="image-2023" src={Image2023} alt="2023" />
            </div>
            <div className="flip-card-back">
                <h3>01/2023</h3>
                <p>Hanging Out in the Park</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <img className="image-2024" src={Image2024} alt="2024" />
            </div>
            <div className="flip-card-back">
                <h3>07/2024</h3>
                <p>Exploring New York City</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <img className="image-2025" src={Image2025} alt="2025" />
            </div>
            <div className="flip-card-back">
                <h3>01/2025</h3>
                <p>Visiting and Skiing in Colorado </p>
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default App
