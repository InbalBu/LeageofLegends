import React from 'react'
import {
  imagechampapi,
  imageskillapi,
  imagepassiveapi,
} from "../server/riotapi";
import { useLocation, useNavigate } from 'react-router-dom';
import champStyle from './champ.css'
import { Tooltip } from "@material-ui/core";

function ChampData() {
  const location = useLocation();
  const objectchamp = location.state.objectchamp;

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/'; 
    navigate(path);
  }

  return (  
    <div>
    <button className='btn_back' onClick={routeChange}>Go Back</button>
    <div className='app_container'> 
       <div className="info__container">
       <div className="info__image">
          <img src={`${imagechampapi}/${objectchamp.id}_0.jpg`} />
        </div>

        <div className="info__detail">
          <div className="title">{`${objectchamp.name}-${objectchamp.title}`}</div>
         
        <div className="skill__box">
            <div className="skill__item">
              <Tooltip
                key={objectchamp.passive.name}
                placement="top"
                title={
                  <div>
                    <div>{objectchamp.passive.name}</div>
                  </div>
                }
              >
                <div className="passive">
                  <img src={`${imagepassiveapi}/${objectchamp.passive.image.full}`}/>
                </div>
              </Tooltip>
            </div>

            {/* skill 1 */}
            <Tooltip
             placement="top"
             key={objectchamp.spells[0].name}
             title={
               <div>
                 <h1>{objectchamp.spells[0].name}</h1>
               </div>
             }>
            <div>
             <img src={`${imageskillapi}/${objectchamp.spells[0].image.full}`} />
             

             <div className="skill__title">
             <p>Q</p>
              </div>
            </div>
            </Tooltip>

            {/* skill 2 */}
            <Tooltip
             placement="top"
             key={objectchamp.spells[1].name}
             title={
               <div>
                 <h1>{objectchamp.spells[1].name}</h1>
               </div>
             }>
            <div>
             <img src={`${imageskillapi}/${objectchamp.spells[1].image.full}`} />

             <div className="skill__title">
             <p>W</p>
              </div>
            </div>
            </Tooltip>

             {/* skill 3 */}
             <Tooltip
             placement="top"
             key={objectchamp.spells[2].name}
             title={
               <div>
                 <h1>{objectchamp.spells[2].name}</h1>
               </div>
             }>
            <div>
             <img src={`${imageskillapi}/${objectchamp.spells[2].image.full}`} />

             <div className="skill__title">
             <p>E</p>
              </div>
            </div>
            </Tooltip>

            {/* skill 4 */}
            <Tooltip
             placement="top"
             key={objectchamp.spells[3].name}
             title={
               <div>
                 <h1>{objectchamp.spells[3].name}</h1>
               </div>
             }>
            <div>
             <img src={`${imageskillapi}/${objectchamp.spells[3].image.full}`} />

             <div className="skill__title">
             <p>R</p>
              </div>
            </div>
            </Tooltip>
            </div>
          <div className="lore__box">
            <div className="title">{`Story:`}</div>
            <div className="content">{`${objectchamp.lore}`}</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ChampData
