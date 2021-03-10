// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const homePageTranslations = {
    en: {
      h1: "Hello, welcome to this website!",
      p: "We hope you enjoy yourself!",
    },
    es: {
      h1: "Hola, bienvenida a este sitio web!",
      p: "¡Esperamos que lo disfrutes!",
    },

    fr: {
      h1: "Bonjour, bienvenue sur ce site!",
      p: "Nous espérons que vous vous amuserez!",
    },
  };
  res.status(200).json(homePageTranslations);
};
