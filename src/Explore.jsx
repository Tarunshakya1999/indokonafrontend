import React from "react";
import { Link } from "react-router-dom";

export default function ExploreBusinessForms() {
  return (
    <>
      <div className="container">
        <div className="row">
            <h1 className="text-center text-primary "> All Business Forms</h1>
          <div className="col-md-6 gap-2">
            <ul>
              <li>
                <Link to="/msmeform" className="btn btn-primary">
                  MSME Form
                </Link>
              </li>
              <li>
                <Link to="/" className="btn btn-secondary">
                  Demo Link
                </Link>
              </li>
              <li>
                <Link to="/" className="btn btn-success">
                  Demo Link
                </Link>
              </li>
              <li>
                <Link to="/" className="btn btn-warning">
                  Demo Link
                </Link>
              </li>
              <li>
                <Link to="/" className="btn btn-danger">
                  Demo Link
                </Link>
              </li>
              <li>
                <Link to="/" className="btn btn-info">
                  Demo Link
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>
                <Link to="/msmeform" className="btn btn-primary">
                  MSME Form
                </Link>
              </li>
              <li>
                <Link to="/" className="btn btn-secondary">
                  Demo Link
                </Link>
              </li>
              <li>
                <Link to="/" className="btn btn-success">
                  Demo Link
                </Link>
              </li>
              <li>
                <Link to="/" className="btn btn-warning">
                  Demo Link
                </Link>
              </li>
              <li>
                <Link to="/" className="btn btn-danger">
                  Demo Link
                </Link>
              </li>
              <li>
                <Link to="/" className="btn btn-info">
                  Demo Link
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
