import * as React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FormattedMessage as F } from "react-intl";

export default function Home() {
  return (
    <>
      <h1>
        <F id="h1" description="" defaultMessage="" />
      </h1>
      <p>
        <F id="p" description="" defaultMessage="" />
      </p>
    </>
  );
}
