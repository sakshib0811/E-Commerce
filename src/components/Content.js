import React from "react";
import "./Content.css";
import img from "../images/profile.png";
import bg1 from "../images/bg1.png";
import { Button } from "@mui/material";
function Content() {
  return (
    <div>
      <div
        className="title1"
        style={{
          marginTop: "4rem",
          marginLeft: "17rem",
          display: "flex",
          lineHeight: "1.7rem",
        }}
      >
        <div className="image">
          <img src={img} alt="profile" style={{ height: "60px" }} />
        </div>
        <div
          className="tileName"
          style={{
            marginLeft: "1.5rem",
          }}
        >
          <div
            className="name"
            style={{
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            Fashion e-commerce product page interaction
          </div>
          <div
            className="subName"
            style={{
              display: "flex",
              //   justifyContent: "space-between",
              fontSize: "16px",
              color: "#3d3d4e",
              //   fontWeight: "400",
            }}
          >
            <div className="sub1">Taras Migulko &nbsp;</div>
            <span>• &nbsp;</span>
            <div className="sub2">Follow &nbsp;</div>
            <span>• &nbsp;</span>
            <div className="sub3" style={{ color: "#ea4c89" }}>
              Hire Me
            </div>
          </div>
        </div>
        <div
          className="button"
          style={{ display: "flex", marginLeft: "12rem" }}
        >
          <div className="sign" style={{ fontWeight: "bold" }}>
            <Button
              className="save"
              style={{
                backgroundColor: "#f3f3f4",
                color: "black",

                textTransform: "none",
                fontWeight: "600",
                borderRadius: "7px",
                height: "2.5rem",
              }}
            >
              Save
            </Button>
          </div>
          <div className="like">
            <Button
              style={{
                backgroundColor: "#f3f3f4",
                color: "white",
                marginLeft: "1rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                textTransform: "none",
                fontWeight: "600",
                borderRadius: "7px",
                height: "2.5rem",
                backgroundColor: "#ea4c89",
              }}
            >
              🤍 Like
            </Button>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "17rem", marginTop: "3rem" }}>
        <div className="container">
          <img src={bg1} alt="image" style={{ height: "650px" }} />
        </div>
        <div
          className="subContainer"
          style={{
            display: "flex",
            marginTop: "2rem",
            marginLeft: "20rem",
            cursor: "pointer",
          }}
        >
          <div className="first">
            <img src={bg1} alt="image" style={{ height: "50px" }} /> &nbsp;
            &nbsp;
          </div>
          <div className="first">
            <img src={bg1} alt="image" style={{ height: "50px" }} /> &nbsp;
            &nbsp;
          </div>
          <div className="first">
            <img src={bg1} alt="image" style={{ height: "50px" }} /> &nbsp;
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
