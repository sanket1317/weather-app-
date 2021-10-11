import React, { useState, useEffect } from "react";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d83b913db32b945abcb101b8a85d637b`;
      const response = await fetch(url);
      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);
  return (
    <>
      <div align="center">
        <input
          type="search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <h2>{search}</h2>
            <h1> {city.temp}°Cel</h1>
            <h3>
              Min : {city.temp.min}°Cel | Max : {city.temp_min}°Cel
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
