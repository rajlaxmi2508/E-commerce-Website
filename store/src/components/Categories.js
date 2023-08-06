import './Categories.css'
import { categories } from "../data";
import { Link } from 'react-router-dom';


const Categories = () => {
  return (   
    <div className="contain">
      {categories.map(item => (
        <div className="cont" key={item.id}>
          <img src={item.img} alt="img" />
          <div className="info">
            <div className="Title">{item.title}</div>
            <Link to={`/products/${item.cat}`}>
              <button className="bttn">SHOP NOW</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;