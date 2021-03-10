import * as React from "react";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    fetch("api/")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);
  return (
    <IntlProvider messages={data[locale]} locale={locale}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
