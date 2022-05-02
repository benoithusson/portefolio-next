import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import photoIdBenoit from '../assets/images/photo-id-benoit.jpg';
import { PageContainer, Bloc, Container } from "./Index.styled";
import { Button } from "../styles/generic-styled-components";

export default function Home() {
  return (
    <>
      <PageContainer>
        <Head>
          <title>Portefolio Benoît Thiennard Husson Desmartin</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,300;0,500;0,700;1,300;1,300;1,500;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Container>
          <Bloc>
            <ul>
              <li>
                <Link href="/">
                  <>
                    <a>Lien 1</a>
                  </>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <>
                    <a>Lien 2</a>
                  </>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <>
                    <a>Lien 3</a>
                  </>
                </Link>
              </li>
            </ul>
          </Bloc>
          <Bloc alignItems="flex-start" flexGrow="1">
            <h1>Hi, I'm Benoît</h1>
            <br />
            <h3>Frontend developer</h3>
            <br />
            <p>Experience in Frontend development,<br/>UX and Motion Design.</p>
            <Button>Contact Me</Button>
          </Bloc>
          <Bloc flexGrow="4" alignItems="flex-start">
            <Image src={photoIdBenoit} width="400" height="400" />
          </Bloc>
        </Container>
      </PageContainer>
    </>
  );
}
