import React from 'react'
import bg from './lolbackground.jpg';
import './champion.css'
import { Tooltip } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
import Support from '../images/ClassSupport.png'
import Tank from '../images/ClassTank.png';
import Mage from '../images/ClassMage.png';
import Assassin from '../images/ClassAssassin.png';
import Marksman from '../images/ClassMarksman.png';
import Fighter from '../images/ClassFighter.png';
import Header from '../components/Header';
import { BrowserRouter as Router, Link } from "react-router-dom";

export const champsImages = {
    Tank,
    Support,
    Mage,
    Assassin,
    Marksman,
    Fighter
};

function Champion({objectchamp, id, name, tags, image}) {
    const champTags = { //hover tags
        Fighter: "Fighter",
        Mage: "Mage",
        Tank: "Tank",
        Support: "Support",
        Assassin: "Assassin",
        Marksman: "Marksman",
    };

    var myArr = [tags];

  return (
    <Link
  to={"/championinfo"}
  state={{objectchamp: objectchamp}}>
  
    <div className='champ_container'>
         <div className="champ__number">
      </div>
        <div className='champ_card'>
        <h1 className='champ_name'>{name}</h1>
        <img className='champ_img' src={image} alt="" />
        <div className="champ__type">
       
        {myArr.map((tag) => (
            <Tooltip key={tag} TransitionComponent={Zoom} title={champTags[tag]}>
              <div className="champ__type__bg">
                {Array.from(tag).map(img => 
                <img src={champsImages[img]}/>
                )}
              </div>
            </Tooltip>
          ))}
        </div>
        </div>
    </div>
    </Link>
  )
}

export default Champion