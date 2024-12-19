const WrapperImg = () => {
  return (
    <img
      src="https://dash-api.yld.mn/api/image/90d5d4f6-1b7e-464d-9247-1c137ee7365a"
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
          src="https://dash-api.yld.mn/api/image/f64012ed-9f61-469c-934e-593a79b152d2"
          alt=""
        />
        <div className="airplaneTexts">
          <p>Зах зээл</p>
          <p>Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ</p>
          <p>М.Хулан / 12 сарын 18, 2024</p>
          <p>Бизнес</p>
          <h5>Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ</h5>
          <p>С.Агирмаа / 12 сарын 18, 2024</p>
          <p>ЗАХ ЗЭЭЛ</p>
          <h5>Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ</h5>
          <p>М.Хулан / 12 сарын 18, 2024</p>
        </div>
      </div>
    </div>
  );
};
export default WrapperD;
