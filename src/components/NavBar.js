import React from "react";
import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

function NavBar() {
  const navbarItems = [
    {
      id: 1,
      text: "Inspiration",
    },
    {
      id: 2,
      text: "Find Work",
    },
    {
      id: 3,
      text: "Learn Design",
    },
    {
      id: 4,
      text: "Go Pro",
    },
    {
      id: 5,
      text: "design Files",
    },
    {
      id: 6,
      text: "Hire Designers",
    },
  ];
  return (
    <div className="main">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // fontWeight: "bold",
          lineHeight: "2rem",
        }}
      >
        <div className="title">Qoohoo</div>
        <ul className="navbar-list">
          {navbarItems.map((item) => {
            return (
              <li className="list-items-style" key={item.id}>
                {" "}
                {item.text}{" "}
              </li>
            );
          })}
        </ul>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "20rem",
            marginRight: "8rem",
          }}
        >
          <SearchIcon
            style={{
              marginTop: "1.7rem",
              marginLeft: "9rem",
              color: "#6e6e72",
              fontSize: "2rem",
              marginRight: "1rem",
            }}
          />
          <h4
            style={{
              // marginRight: "0rem",
              fontWeight: "500",
              cursor: "pointer",
              // paddingLeft: "0.5rem",
              // marginRight: "3rem",
              minWidth: "fit-content",
              fontSize: "20px",
              color: "#6e6e72",
            }}
          >
            Sign in
          </h4>
          <div className="btn" style={{ width: "10rem" }}>
            <Button
              // variant="contained"
              style={{
                height: "2.5rem",
                marginTop: "1.5rem",
                opacity: "initial",
                marginLeft: "2rem",
                width: "max-content",
                textTransform: "none",
                fontSize: "16px",
                borderRadius: "7px",
                backgroundColor: "#ea4c89",
                color: "white",
              }}
            >
              Share my work
            </Button>
          </div>
        </div>
      </div>
      <hr
        style={{
          backgroundColor: "rgb(228 228 233)",
          height: "1px",
          border: "none",
        }}
      />
    </div>
  );
}

export default NavBar;
