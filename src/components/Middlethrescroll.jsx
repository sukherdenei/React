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
    pa: "Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
    content: "С.Ангирмаа 12 сарын 18, 2024",
  },
  {
    pa: "Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
    content: "С.Ангирмаа 12 сарын 18, 2024",
  },
  {
    pa: "Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
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
            src="https://cdn.boost.mn/66418cbd1e1c3e2f69d331d2/creative/3c052e0e-0b02-48ed-b6bc-8d520e34348a.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241220%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241220T024806Z&X-Goog-Expires=86399&X-Goog-Signature=a6caa1ad2f8edec6f26ac2978f4d2623cd35fc5a311aa27280f9ad504a09e5df914138b25342309363cf431bebcda3bda57d8247f6979cd4bddc0981a4ca702b292fb62667ca9b02b3c5af4093b6e27c7d109f8e9dc46c65d91ee5ba67e10e41a14ba0d7289c7b9483bc479affb3c21707bd9aca1e0c02a4080d2fdfe6dc40e3570eae1541df0581a84c90903d4c4b5aee867fab01a036f888d38095f29af04c019a19af8ae9f132ab42d6dae241c57dfabc51c2eea7f52b6a6d2d160839f44765086e2baf4ebd7215ffcfa661575eff7a099ec57a044fede634d0e684aea926c148fb66a0b3235186eaac4bc7745bffdb1d245cd706d4d1120f8cf3c85f5aac&X-Goog-SignedHeaders=host"
            alt=""
          />
        </div>
        <div className="middle-th-text">
          <h5>Бизнес</h5>
          {/* <p>Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ</p>
          <p>С.Ангирмаа 12 сарын 18, 2024</p> */}
          {arr1.map((a) => {
            return (<h4>{a.pa}</h4>), (<p>{a.content}</p>);
          })}
        </div>
      </div>
    </div>
  );
};
export default MiddleScroll;
