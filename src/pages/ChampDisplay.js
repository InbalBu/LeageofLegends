import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Champion from '../components/Champion';
import { riotapi, imagechampapi } from '../server/riotapi';

function ChampDisplay() {

    const [championList, setchampionList] = useState([]);

    useEffect(() => {
        getAllChamp();
      }, []);

      const getAllChamp = async () => {
        const response = await axios
          .get(`${riotapi}/champion.json`)
          .catch((err) => console.log(err));
          console.log(Object.values(response.data.data));
          setchampionList(Object.values(response.data.data));
          getChampData(Object.values(response.data.data));
      };

      const getChampData = async (result) => {
        const champArr = [];
        
        const response = await Promise.all(
            result.map((champItems) => {
              return axios
                .get(`${riotapi}/champion/${champItems.id}.json`)
                .then((result) => {
                  champArr.push(result.data.data[champItems.id]);
                });
            })
          );
          console.log(champArr);
          setchampionList(champArr);
        };
      

  return (
    <div>
        <div>
          {championList.map((champ) => (
            <Champion
            key={champ.id}
            id={championList.findIndex((p) => p.id == champ.id) + 1}
            name={champ.name}
            image={`${imagechampapi}/${champ.id}_0.jpg`}
            tags={champ.tags}
            objectchamp={champ}
            />
          ))}
        </div>
      
    </div>
  )
}

export default ChampDisplay
