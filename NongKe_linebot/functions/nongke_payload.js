function getCards(menu) {

  let items = menu.map((item) => {
    return {
      action: {
        label: item.label,
        text: item.text,
        type: item.type
      },
      imageUrl: item.image
    };
  });

  return {
    type: "template",
    altText: "List of menu",
    template: {
      type: "image_carousel",
      columns: items
    },
  };
}

module.exports = {
  getCards,
};