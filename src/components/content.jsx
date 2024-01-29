import SingleItem from "./SingleItem";

const Content = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <div class="container text-center d-flex align-items-center justify-content-center ">
      <div class="row">
        {productsArr.map((item) => (
          <div className="col-5 card-holder align-items-center d-flex justify-content-center">
            <SingleItem
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
            ></SingleItem>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Content;
