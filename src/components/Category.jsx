import { Link } from "react-router-dom";
import "../App.css"
const Category = (props)=>{
return(
<>
<ul className={"list-group "+props.classStyle}  >
  <li className="list-group-item d-flex justify-content-between align-items-center">
  <Link className="link-hover" to="/">Fruits and vegetables </Link>
    <span className="badge badge-primary badge-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  <Link className="link-hover" to="/">FoodGrains, Oils, and Masala </Link>
    <span className="badge badge-primary badge-pill">2</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  <Link className="link-hover" to="/">Bakery, Cakes, and Dairy </Link>
    <span className="badge badge-primary badge-pill">1</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  <Link className="link-hover" to="/">Beverages </Link>
    <span className="badge badge-primary badge-pill">6</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  <Link className="link-hover" to="/">Snacks and Branded Foods </Link>
    <span className="badge badge-primary badge-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  <Link className="link-hover" to="/">Beuaty and Hygine </Link>
    <span className="badge badge-primary badge-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  <Link className="link-hover" to="/">Cleaning and Household </Link>
    <span className="badge badge-primary badge-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  <Link className="link-hover" to="/">Kitchen, Garden and Pets </Link>
    <span className="badge badge-primary badge-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  <Link className="link-hover" to="/">Eggs, Meats and Fish </Link>
    <span className="badge badge-primary badge-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  <Link className="link-hover" to="/">Baby care</Link>
    <span className="badge badge-primary badge-pill">14</span>
  </li>
</ul>
</>
    );

}

export default Category;