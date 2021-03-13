import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card";
import actions from "../../redux/unsplash/actions";
import "./style.scss";

function Home() {
  const [keyword, setKeyword] = useState("");
  // const [pins, setPins] = useState([]);
  const dispatch = useDispatch();
  const unsplash = useSelector(state => state.Unsplash);

  const { loading, data, pins, error } = unsplash;
  /**
   *
   */
  const searchPhotos = (e) => {
    e.preventDefault();

    dispatch({ type: actions.SET_KEYWORD, payload: { keyword } });
  };

  const addPin = (id) => {
    dispatch({ type: actions.ADD_PIN, payload: { id: id } });
  }

  const unPin = (id) => {
    dispatch({ type: actions.UN_PIN, payload: { id: id } });
  }

  return (
    <div className="container">
      <form className="form" onSubmit={searchPhotos}>
        <input
          type="text"
          name="keyword"
          className="keyword"
          placeholder={`Search keyword`}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      
      
      {pins.length > 0 &&
        <h1>Pinned</h1>
      }
      <div className="pinned-card-list">
        {pins.map((dat) => (
          <Card
            key={dat.id}
            cardData={dat}
            onClick={id => unPin(id)}
            pin={true}
          />
        ))}{" "}
      </div>
      <h1>Search Result</h1>
      <div className="card-list">
        {data.map((dat) => (
          <Card
            key={dat.id}
            cardData={dat}
            onClick={id => addPin(id)}
            pin={false}
          />
        ))}{" "}
      </div>
    </div>
  );
}

export default Home;
