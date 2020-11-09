import React, { useEffect, useState } from "react";
import axios from "axios";

const Poke = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [move, setMove] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [front_default, setFrontDefault] = useState();

    useEffect(() => {
        async function getData() {
            const res = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${num}`
            );
            console.log(res.data);
            setName(res.data.name);
            setMove(res.data.moves.length);
            setWeight(res.data.weight);
            setHeight(res.data.height);
            setFrontDefault(res.data.sprites.other.dream_world.front_default);
        }
        getData();
    });

  return (
    <>
        <div className="container">
            <select 
                value={num} 
                onChange={(event) =>{
                setNum(event.target.value);
            }}
            >
                <option selected=""  hidden>Choose Evolution</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
            </select>
            
            <div className="card">
                <img src={front_default} alt="image" height="200"/>
                <div className="content">
                <h2>{name}</h2>
                <h3>{move}<small><span style={{color:"grey"}}> moves</span></small></h3>
                <h3>{weight}<small><span style={{color:"grey"}}> lbs</span></small></h3>
                <h3>{height}<small><span style={{color:"grey"}}> ft</span></small></h3>
                </div>
            </div>
    </div>
    </>
  );
}

export default Poke;
