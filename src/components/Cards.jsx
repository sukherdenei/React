import Card from "./Card";

const news = [
  {
    content:
      "Товчоор бол уг хороо Үндэсний баялгийн сангийн Хуримтлалын сангаар дамжуулан иргэдийг орон сууцжуулах зорилтыг бодит болгох үүрэг хүлээсэн. ",
    imageSrc:
      "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
  },
  {
    content:
      "Хаа нэгтээ “Монгол ардчилсан замаар алхсан гучхан жилийн түүхтэй, дөнгөж төлөвших зам дээрээ яваа” ",
    imageSrc:
      "https://dash-api.yld.mn/api/image/2d83d835-062d-4a85-a4c0-c7b3887f278d",
  },
  {
    content:
      "Ариг банкны зарласан ₮100 саяын эзэн болох хадгаламжийн урамшуулалт аяны супер азтан тодроход 1 сар хүрэхгүй хугацаа үлдлээ.     ",
    imageSrc:
      "https://dash-api.yld.mn/api/image/c00b3bc3-2340-49f4-84d3-a274bd10893f",
  },
  {
    content:
      "Гадаад өр өнгөрсөн жилийн мөн үеэс 7.2% өсөж $35.6 тэрбумд хүрээдэх лээ. Өр л нэмэгдээд байх юм гаднаас орж ирж байгаа хөрөнгө оруулалт яав, ийв?     ",
    imageSrc:
      "https://dash-api.yld.mn/api/image/466e9012-492b-43c9-9449-aa118031efa9",
  },
  {
    content:
      "Гадаад өр өнгөрсөн жилийн мөн үеэс 7.2% өсөж $35.6 тэрбумд хүрээдэх лээ. Өр л нэмэгдээд байх юм гаднаас орж ирж байгаа хөрөнгө оруулалт яав, ийв?     ",
    imageSrc:
      "https://dash-api.yld.mn/api/image/6bdb8f4f-f124-421c-995b-863f69858179",
  },
];

const Cards = () => {
  return (
    <div className="cards-parent">
      <div className="cardsT">
        {news.map((medee) => {
          return (
            <Card
              title={medee.title}
              content={medee.content}
              image={medee.imageSrc}
            />
          );
        })}
      </div>
      <div className="cards-right">
        <div className="cards-rigth-top">
          {" "}
          <img
            src="https://dash-api.yld.mn/api/image/0c6b12aa-f5d8-4f5d-89a9-e4dc40bb29d1"
            alt=""
          />
        </div>
        <div className="cards-rigth-bottom">
          {" "}
          <img
            src="https://static01.nyt.com/athletic/uploads/wp/2024/08/10182331/GettyImages-2165749866-scaled.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Cards;
