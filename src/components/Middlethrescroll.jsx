const arr = [
  {
    pa: "Thu 10 dec 2024 12:12:00",
    content: "Өсөн нэмэгдэх Монголын лити",
  },
  {
    pa: "Thu 10 dec 2024 12:12:00",
    content: "Өсөн нэмэгдэх Монголын лити",
  },
  {
    pa: "Thu 10 dec 2024 12:12:00",
    content: "Өсөн нэмэгдэх Монголын лити",
  },
  {
    pa: "Thu 10 dec 2024 12:12:00",
    content: "Өсөн нэмэгдэх Монголын лити",
  },
  {
    pa: "Thu 10 dec 2024 12:12:00",
    content: "Өсөн нэмэгдэх Монголын лити",
  },
  {
    pa: "Thu 10 dec 2024 12:12:00",
    content: "Өсөн нэмэгдэх Монголын лити",
  },
  {
    pa: "Thu 10 dec 2024 12:12:00",
    content: "Өсөн нэмэгдэх Монголын лити",
  },
  {
    pa: "Thu 10 dec 2024 12:12:00",
    content: "Өсөн нэмэгдэх Монголын лити",
  },
  {
    pa: "Thu 10 dec 2024 12:12:00",
    content: "Өсөн нэмэгдэх Монголын лити",
  },
];
const arr1 = [
  {
    h3: "Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
    content: "С.Ангирмаа 12 сарын 18, 2024",
  },
  {
    h3: "Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
    content: "С.Ангирмаа 12 сарын 18, 2024",
  },
  {
    h3: "Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
    content: "С.Ангирмаа 12 сарын 18, 2024",
  },
];

const MiddleScroll = () => {
  return (
    <div className="middle-th-scroll">
      <div className="middle-one">
        <h3>Товхимлууд</h3>
        {arr.map((item) => {
          return (
            <div>
              <p>{item.pa}</p>
              <h4>{item.content}</h4>
            </div>
          );
        })}
      </div>
      <div className="middle-two">
        <img
          src="https://dash-api.yld.mn/api/image/28b2bfc0-03b5-41d1-befc-0b4e483c81f8"
          alt=""
        />
        <h5>Monkondi брэнд Just Chocolate-г зах зээлд нэвтрүүллээ</h5>
      </div>
      <div className="middle-three">
        <div className="middle-th-img">
          <img
            src="https://dash-api.yld.mn/api/image/5df9f347-0e55-42d0-afc2-b438ec13a97f"
            alt=""
          />
        </div>
        <div className="middle-th-text">
          <h5>Зах зээл</h5>
          {arr1.map((a) => {
            return (
              <div>
                <p>{a.h3}</p>
                <h3>{a.h3}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MiddleScroll;
