const WrapperImg = () => {
  return (
    <img
      src="https://dash-api.yld.mn/api/image/90d5d4f6-1b7e-464d-9247-1c137ee7365a"
      alt=""
    />
  );
};
const WrapperTexts = [
  "Зах зээл",
  "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
  "М.Хулан / 12 сарын 18, 2024",
];

const WrapperD = () => {
  return (
    <div className="wrapperRight">
      <WrapperImg />
      <div className="wrapperRightD">
        <img
          src="https://dash-api.yld.mn/api/image/f64012ed-9f61-469c-934e-593a79b152d2"
          alt=""
        />
        {WrapperTexts.map((a) => {
          return [WrapperTexts];
        })}
        {/* <div className="wrapperTexts">"xxx", "xxx", "xxx",</div> */}
      </div>
    </div>
  );
};
export default WrapperD;
