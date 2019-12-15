import React, { useEffect, useState, } from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import Axios from "axios";


const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 20px;
`;

export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const filterList = name => {
      const filteredList = characters.filter(character =>
        character.name.includes(name)
      );
      setFilteredCharacters(filteredList);
    };
    filterList(props.nameToSearch);
    }, [props.nameToSearch, characters]);
  
    useEffect(() => {
    const getData = () => {
      Axios.get("https://rickandmortyapi.com/api/character/")
        .then(res => {
          setCharacters(res.data.results);
        })
        .catch(err => {
          console.log("Error", err);
        });
    };
      getData();
    }, []);
  
    if (filteredCharacters.length > 0) {
      return (
        <Container>
          {filteredCharacters.map(character => {
            return (
              <CharacterCard
                key={character.id}
                gender={character.gender}
                image={character.image}
                name={character.name}
                origin={character.origin.name}
                species={character.species}
                status={character.status}
              />
            );
          })}
        </Container>
      );
    }
  
    return (
      <Container>
        {characters.map(character => {
          return (
            <CharacterCard
              key={character.id}
              gender={character.gender}
              image={character.image}
              name={character.name}
              origin={character.origin.name}
              species={character.species}
              status={character.status}
            />
          );
        })}
      </Container>
    );
  }