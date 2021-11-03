module.exports = {
  categories: [
    {
      name: "Manteaux",
      slug: "manteaux",
    },
    {
      name: "T-shirts",
      slug: "tshirts",
    },
    {
      name: "Pulls",
      slug: "pulls",
    },
  ],
  products: [
    {
      id: 1,
      title: "Pull NASA blanc",
      description:
        "Pull NASA Blanc en laine de chameau.",
      price: 49.99,
      slug: "pullnasa",
      status: "published",
      image: null,
      categories: [
        {
          id: 3,
        },
      ],
    },
    {
      id: 2,
      title: "T-shirt Tatie Bleu",
      description:
        "Ceci est une description",
      price: 19.99,
      slug: "tshirttatie",
      status: "published",
      image: null,
      categories: [
        {
          id: 2,
        },
      ],
    },
    {
      id: 3,
      title: "Manteau rose",
      description: "Superbe manteau",
      price: 99.99,
      slug: "manteaurose",
      status: "published",
      image: null,
      categories: [
        {
          id: 1,
        },
      ],
    },
  ],
};
