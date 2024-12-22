const arrr = [
  {
    pa: "Зах зээл",
    content: "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
  },
  {
    pa: "Зах зээл",
    content: "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
  },
  {
    pa: "Зах зээл",
    content: "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
  },
  {
    pa: "Зах зээл",
    content: "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
  },
];

const WrapperImg = () => {
  return (
    <img
      src="https://dash-api.yld.mn/api/image/1cb1c205-6e96-4f15-b8e1-102bf35e0f7b"
      alt=""
    />
  );
};

const WrapperD = () => {
  return (
    <div className="wrapperRight">
      <WrapperImg />
      <div className="wrapperRightD">
        <img
          src="https://dash-api.yld.mn/api/image/5df9f347-0e55-42d0-afc2-b438ec13a97f"
          alt=""
        />
        <div className="airplaneTexts">
          <h4>Зах зээл</h4>
          {arrr.map((map) => {
            return (
              <div>
                <p>{map.content}</p>
                <h3>{map.pa}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default WrapperD;

{
  /* <p>Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ</p>
          <p>М.Хулан / 12 сарын 18, 2024</p>
          <p>Бизнес</p>
          <h5>Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ</h5>
          <p>С.Агирмаа / 12 сарын 18, 2024</p>
          <p>ЗАХ ЗЭЭЛ</p>
          <h5>Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ</h5>
          <p>М.Хулан / 12 сарын 18, 2024</p> */
}
