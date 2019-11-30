import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/beers">
            <img src="../images/beers.png" alt="" />
            <h1>All Beers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              magnam earum dolores sequi officia delectus laboriosam ab tenetur
              eos, illum, quibusdam explicabo atque blanditiis perspiciatis unde
              consequatur. Odio, neque distinctio.
            </p>
          </Link>
        </div>
        <div>
          <Link to="/random-beer">
            <img src="../images/random-beer.png" alt="" />
            <h1>Random Beer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              magnam earum dolores sequi officia delectus laboriosam ab tenetur
              eos, illum, quibusdam explicabo atque blanditiis perspiciatis unde
              consequatur. Odio, neque distinctio.
            </p>
          </Link>
        </div>
        <div>
          <Link to="/new-beer">
            <img src="../images/new-beer.png" alt="" />
            <h1>New Beer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              magnam earum dolores sequi officia delectus laboriosam ab tenetur
              eos, illum, quibusdam explicabo atque blanditiis perspiciatis unde
              consequatur. Odio, neque distinctio.
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
