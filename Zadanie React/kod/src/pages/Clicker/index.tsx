import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { useState } from "react";

export default function Clicker() {
  const [x, setX] = useState<number>(0)

  const buttonClickHandler = () =>{
    setX(x+1)
  }
  return (
  <>
    <Container>
      <Heading level={1} content="Poklikaj mnie"/>
      <Paragraph content={`Kliknięto ${x} raz(y)`}/>
      <Button text="Kliknij mnie" onClick={buttonClickHandler}/>
    </Container>
  </>
  );
}