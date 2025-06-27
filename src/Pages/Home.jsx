import Banner from "../Components/Banner";
import Expert from "../Components/Expert";
import NewPlants from "../Components/NewPlants";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import TopPlantCareMistakes from "../Components/TopPlantCareMistakes";
import BeginnerFriendlyPlants from "../Components/BeginnerFriendlyPlants";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [homeLoading, setHomeLoading] = useState(true);
  useEffect(() => {
    document.title = "PlantPal || Home";
    fetch(`${import.meta.env.VITE_baseURL}/plants/recent`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setHomeLoading(false);
      })
      .catch((err) => {
        setHomeLoading(false);
      });
  }, []);
  return (
    <>
      {homeLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          <Banner></Banner>
            <NewPlants allData={allData}></NewPlants>
            <TopPlantCareMistakes></TopPlantCareMistakes>
            <BeginnerFriendlyPlants></BeginnerFriendlyPlants>
          <Expert></Expert>
        </div>
      )}
    </>
  );
};

export default Home;
