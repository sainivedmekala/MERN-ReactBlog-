import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://i.ibb.co/Zhr0pLv/men-hipster-fashion-hair-beards-hat-sunglasses-18591-6172.jpg"
          alt=""
        />
        <p> 
          <br/>MERN PROJECT
          <br/>Its a BLOG project done under the guideness of 
          Mrs.Anuradha Mam

        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CONTRIBUTORS</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <p>
        <li>M. SAI NIVED</li>
        <li>C. SRI CHARAN</li>
        <li>M. NAGENDRA PRASAD</li>
        <li>V. AKSHAY</li>
        <li>MD. NOMAAN</li>
      </p>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <l className="sidebarIcon fab fa-facebook-square" href="https://www.facebook.com/login/"></l>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
