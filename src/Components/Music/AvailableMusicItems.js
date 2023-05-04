// import albumb1 from "../Assets/Album 1.png";
// import albumb2 from "../Assets/Album 2.png";
// import albumb3 from "../Assets/Album 3.png";
// import albumb4 from "../Assets/Album 4.png";

import MusicItem from "./MusicItem";
import { Row, Col } from "react-bootstrap";

const DUMMY_ITEMS = [
  {
    id: "a1",
    title: "Colors",
    price: 100,
    image: (
      <img
        src={"https://prasadyash2411.github.io/ecom-website/img/Album%201.png"}
      />
    ),
  },
  {
    id: "a2",
    title: "Black and white Colors",
    price: 50,
    image: (
      <img
        src={"https://prasadyash2411.github.io/ecom-website/img/Album%202.png"}
      />
    ),
  },
  {
    id: "a3",
    title: "Yellow and Black Colors",
    price: 70,
    image: (
      <img
        src={"https://prasadyash2411.github.io/ecom-website/img/Album%203.png"}
      />
    ),
  },
  {
    id: "a4",
    title: "Blue Color",
    price: 100,
    image: (
      <img
        src={"https://prasadyash2411.github.io/ecom-website/img/Album%204.png"}
      />
    ),
  },
];

function AvailableMusicItems() {
  const musicList = DUMMY_ITEMS.map((music) => (
    <Col key={music.id} xs={12} sm={6} md={4} lg={3}>
      <MusicItem
        id={music.id}
        title={music.title}
        price={music.price}
        image={music.image}
      />
    </Col>
  ));

  return (
    <section>
      <Row>{musicList}</Row>
    </section>
  );
}

export default AvailableMusicItems;
