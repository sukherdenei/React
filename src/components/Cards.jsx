import Card from "./Card";

const news = [
  {
    title: "Казакстаны хөгжлийн нууц",
    content:
      "Товчоор бол уг хороо Үндэсний баялгийн сангийн Хуримтлалын сангаар дамжуулан иргэдийг орон сууцжуулах зорилтыг бодит болгох үүрэг хүлээсэн. ",
    imageSrc:
      "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
  },
  {
    title: "Казакстаны хөгжлийн нууц",
    content:
      "Хаа нэгтээ “Монгол ардчилсан замаар алхсан гучхан жилийн түүхтэй, дөнгөж төлөвших зам дээрээ яваа” ",
    imageSrc:
      "https://dash-api.yld.mn/api/image/2d83d835-062d-4a85-a4c0-c7b3887f278d",
  },
  {
    title: "Казакстаны хөгжлийн нууц",
    content:
      "Ариг банкны зарласан ₮100 саяын эзэн болох хадгаламжийн урамшуулалт аяны супер азтан тодроход 1 сар хүрэхгүй хугацаа үлдлээ.     ",
    imageSrc:
      "https://dash-api.yld.mn/api/image/c00b3bc3-2340-49f4-84d3-a274bd10893f",
  },
  {
    title: "Казакстаны хөгжлийн нууц",
    content:
      "Гадаад өр өнгөрсөн жилийн мөн үеэс 7.2% өсөж $35.6 тэрбумд хүрээдэх лээ. Өр л нэмэгдээд байх юм гаднаас орж ирж байгаа хөрөнгө оруулалт яав, ийв?     ",
    imageSrc:
      "https://dash-api.yld.mn/api/image/466e9012-492b-43c9-9449-aa118031efa9",
  },
  {
    title: "Казакстаны хөгжлийн нууц",
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
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/757aa5b9-0e51-440e-96c4-a159059bc841.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241219%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241219T043912Z&X-Goog-Expires=86399&X-Goog-Signature=29b0e15cfd0e7a3c799ea81c0b31086336a10ee69c8205fc8a4b4a3a91c94bbd872b2a6eeeddc454e3aebd675bfa3fe87d8dfc52b8b482dbcfcb15f7fa24b90259945de525900cf53a340630800b959ef615461ec7b36aaa40a3727913d5fd390f2902901fb04b23d8a040c910dc67e933187eedae47d3cbd3ccc1c68d14501a022b8233902afd8792f2494691cbb222d64fa682a8ca0592dda4c44bc4640c4b3860e65764a69e0d1f694a0d97c339713dc89833e33e8332521a4ef13cf73ce17b1a474cd1ab4ad8d1895847ad9716a47566afb47a4366ccdfd1cf37620f8d2cf959eec5069c6ac8ba31f70dee431f249a41077fdf33dd2ea733bf7df961a5d3&X-Goog-SignedHeaders=host"
            alt=""
          />
        </div>
        <div className="cards-rigth-bottom">
          {" "}
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/4393e679-2224-4da3-967f-1dfe64500f90.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241219%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241219T043912Z&X-Goog-Expires=86399&X-Goog-Signature=68520a68462318b1db9e0885163f224166664b373f21eb0a2f10e779f046a6ec9cb7ba076b9f7546a8e8371a894b7fe8e18c20d7a0ff6dfac3f5d3b485ddce6addc2a5ec0236ef4083a44d4563d482c474e23145cf53136839ef2b4c2e3eb3792ff889ab1bfcef119e40db66e75055e87eaeca25692efa114f92d1302001912b93a1048f501bad3be16bb839a45d632441873bdcb39639e026e621a3c60827aab61909cbad17858e8018715d01d085bde5bbb95c8771fcb643002a9ca14cd44a27dd91748e56ddc7c236d546892136c5ad1b1c6cf401ba6fecd2bd085118e50051fdc61c1679b14f2f56ef9ff2958624c09a52542242161ded886870d0a356dc&X-Goog-SignedHeaders=host"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Cards;
