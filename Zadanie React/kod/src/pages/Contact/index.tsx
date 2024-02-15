import { useState, FormEvent } from "react";
import './contact.scss';
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

export default function Contact() {
  const [isSended, setIsSended] = useState<boolean>(false);

  function formHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const imie = formData.get("imie");
    const email = formData.get('email');
    const temat = formData.get('temat');
    const tresc = formData.get('tresc');
    setIsSended(true);
    console.log('Imie: ', imie);
    console.log('email: ', email);
    console.log('Temat: ', temat);
    console.log('tresc wiadomosci: ', tresc);
  }

  return (
    <>
      <Container>
        <Heading level={1} content="Skontaktuj się z nami" />

        {isSended ? (
          <Paragraph content="Dziękujemy za wysłanie wiadomości" />
        ) 
        : 
        (
        <form onSubmit={formHandler}>
          <input type="text" name="imie" placeholder="imię" /><br/>
          <input type="email" name="email" placeholder="e-mail" /><br/>
          <input type="text" name="temat" placeholder="temat" /><br/>
          <textarea name="tresc" placeholder="treść wiadomości"></textarea><br/>
          <input type="submit" value="Wyślij wiadomość" />
        </form>
      )}

      </Container>
    </>
  );
}
