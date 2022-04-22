const Seed = (function () {
  const generateVoteCount = () => Math.floor(Math.random() * 50 + 15);

  const products = [
    {
      id: 1,
      title: "Yellow Pail",
      description: "On-demand sand castle construction expertise.",
      url: "#",
      votes: generateVoteCount(),
      productImageUrl: require("../images/products/image-aqua.png"),
      submitterAvatarImg: require("../images/avatars/daniel.jpg"),
    },
    {
      id: 2,
      title: "Supermajority: The Fantasy Congress League",
      description:
        "Earn points when your favourite policians pass legislation.",
      url: "#",
      votes: generateVoteCount(),
      productImageUrl: require("../images/products/image-rose.png"),
      submitterAvatarImg: require("../images/avatars/kristy.png"),
    },
    {
      id: 3,
      title: "Tinfoild: Tailored tinfoild hats",
      description: "We already have your measurements and shippings address.",
      url: "#",
      votes: generateVoteCount(),
      productImageUrl: require("../images/products/image-steel.png"),
      submitterAvatarImg: require("../images/avatars/veronika.jpg"),
    },
    {
      id: 4,
      title: "Haught or Naught",
      description: "High-minded or absent-minded? You decide.",
      url: "#",
      votes: generateVoteCount(),
      productImageUrl: require("../images/products/image-yellow.png"),
      submitterAvatarImg: require("../images/avatars/molly.png"),
    },
  ];

  return { products: products };
})();

export default Seed;
