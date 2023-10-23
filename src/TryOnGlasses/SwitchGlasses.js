import React, { Component } from "react";
import { data } from "./Data";

export default class SwitchGlasses extends Component {
  renderDesc = () => {
    return data.map((glass, index) => {
      return (
        <div key={index}>
          <img
            src={glass.url}
            alt=""
            style={{
              width: "60%",
              position: "absolute",
              top: "60px",
              left: "61px",
            }}
          />
          <div
            style={{ position: "absolute", bottom: "0" }}
            className="text-start fw-bold"
          >
            <p className="mb-1">Name: {glass.name}</p>
            <p className="mb-1">Price: {glass.price}</p>
            <p className="mb-1">Description: {glass.desc}</p>
          </div>
        </div>
      );
    });
  };
  state = {
    version: 0,
  };
  changeVersion = (version) => {
    this.setState({ version: version });
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center gap-5">
          <div
            className="col-6"
            style={{
              backgroundImage: "url(./glassesImage/model.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
            }}
          ></div>
          <div
            className="col-6"
            style={{
              backgroundImage: "url(./glassesImage/model.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
              position: "relative",
            }}
          >
            {this.renderDesc()[this.state.version]}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div
            className="d-flex justify-content-center align-item-center flex-wrap border border-success"
            style={{
              gridColumnGap: "150px",
              gridRowGap: "50px",
              width: "90%",
              marginTop: "100px",
              padding: "20px",
            }}
          >
            <h1>Try it:</h1>

            <a
              className="btn"
              style={{
                backgroundImage: "url(./glassesImage/g1.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100px",
                height: "50px",
              }}
              onClick={() => {
                this.changeVersion(0);
              }}
            ></a>
            <a
              className="btn"
              style={{
                backgroundImage: "url(./glassesImage/g2.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100px",
                height: "50px",
              }}
              onClick={() => {
                this.changeVersion(1);
              }}
            ></a>
            <a
              className="btn"
              style={{
                backgroundImage: "url(./glassesImage/g3.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100px",
                height: "50px",
              }}
              onClick={() => {
                this.changeVersion(2);
              }}
            ></a>
            <a
              className="btn"
              style={{
                backgroundImage: "url(./glassesImage/g4.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100px",
                height: "50px",
              }}
              onClick={() => {
                this.changeVersion(3);
              }}
            ></a>
            <a
              className="btn "
              style={{
                backgroundImage: "url(./glassesImage/g5.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100px",
                height: "50px",
              }}
              onClick={() => {
                this.changeVersion(4);
              }}
            ></a>
            <a
              className="btn"
              style={{
                backgroundImage: "url(./glassesImage/g6.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100px",
                height: "50px",
              }}
              onClick={() => {
                this.changeVersion(5);
              }}
            ></a>
            <a
              className="btn"
              style={{
                backgroundImage: "url(./glassesImage/g7.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100px",
                height: "50px",
              }}
              onClick={() => {
                this.changeVersion(6);
              }}
            ></a>
            <a
              className="btn"
              style={{
                backgroundImage: "url(./glassesImage/g8.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100px",
                height: "50px",
              }}
              onClick={() => {
                this.changeVersion(7);
              }}
            ></a>
            <a
              className="btn"
              style={{
                backgroundImage: "url(./glassesImage/g9.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100px",
                height: "50px",
              }}
              onClick={() => {
                this.changeVersion(8);
              }}
            ></a>
          </div>
        </div>
      </div>
    );
  }
}
