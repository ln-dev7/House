import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function about() {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [age, setAge] = useState(0);

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(2003, 10, 20);

    var currentYear = today.getFullYear();
    var birthYear = birthDate.getFullYear();
    var ageInYears = currentYear - birthYear;

    if (
      birthDate.getMonth() > today.getMonth() ||
      (birthDate.getMonth() == today.getMonth() &&
        birthDate.getDate() > today.getDate())
    ) {
      setAge(ageInYears - 1);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Leonel NGOYA | About</title>
        <meta
          name="description"
          content="
    I’m a Front-end Developer & Web Integrator, I’m passionate about creating beautiful, intuitive and responsive websites.
    "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="about">
        <p>
          Hey, my name is leonel ngoya but I am much better known as LN. I am a{" "}
          {age} year old frontend developer and web integrator from Cameroon,
          I’m passionate about creating beautiful, intuitive and responsive
          websites. I also like to listen to <a href="https://open.spotify.com/playlist/2akHeWgVqLdf453oKj4lPH?si=ZdA5H7VMTm2OtjfdxFiEtg" target="_blank">music</a> and in my spare time I often
          write <a href="https://laravel.cm/user/ln-dev7" target="_blank">articles</a> about development and I also make <a href="https://www.youtube.com/c/LNDev" target="_blank">youtube videos</a>
        </p>
        <a href="#">resume</a>
        <a href="https://testimonial.to/ln-dev/all">Give me your opinion 😊</a>
      </main>
    </>
  );
}