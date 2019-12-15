import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  border: 2px solid darkgreen;
  background: lightgreen;
  text-align: center
  width: 300px;
`;

const Img = styled.img`
  max-width: 50%;
`;

const Span = styled.span`
  font-weight: bold;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <h2>{props.name}</h2>
      <Img src={props.image} alt={props.name} />
      <div>
        <p>
          <Span>Gender:</Span> {props.gender}
        </p>
        <p>
          <Span>Origin:</Span> {props.origin}
        </p>
        <p>
          <Span>Species:</Span> {props.species}
        </p>
        <p>
          <Span>Status:</Span> {props.status}
        </p>
      </div>
    </Card>
  );
}