import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const View = styled.div`
  background-color: #9292ff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Relogio = styled.h2`
  background-color: #5656bf;
  color: #9292ff;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  font-size: 36px;
`;

function format(num:number)
{
  if(num < 10)
    return `0${num}`;
  else
    return num;
}

export default () => {

  const [hora,    setHora]    = useState(9);
  const [minuto,  setMinuto]  = useState(49);
  const [segundo, setSegundo] = useState(45);

  useEffect( () => {
    const intervalo = setInterval(() => {
      setSegundo(segundo + 1);
      if(segundo >= 59)
      {
        setSegundo(0);
        setMinuto(minuto + 1);
        if(minuto >= 59)
        {
          setMinuto(0);
          setHora(hora + 1);
          if(hora >= 23)
            setHora(0);
        }
      }
    },1000);
    return () => clearInterval(intervalo);
  });

  return(
    <View>
      <Relogio> {format(hora)}:{format(minuto)}:{format(segundo)} </Relogio>
    </View>
  );
}