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
        <img
          src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/757aa5b9-0e51-440e-96c4-a159059bc841.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241219%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241219T010907Z&X-Goog-Expires=86399&X-Goog-Signature=81b537c86496ebb0290ab2e5695ba21257b2dc2c2ebb7c7621f435c0c7e24082ebefff0f7aa5ba3c4cb469c70993bd0a8a5fcc41f5cf62546381d06ef0ce39baa79a41691e2783c8a92d745b5d401020298179fce05883d342910220b64c6a5930c53c0a43f212723c7cf19f84e1856cfa19ef7d61b69c3ce28e540b2bc3b8d08c15ebad47c37fc72945fdfe4d1cf9e7ceb49fe81eda0f8debcf3a68c44e2767ff1e5d13627f0cd3718608901b89fc06ce179204debe018cbb4d40d7ea26679c56d5ac29a9b48602c748a3e91ddb577e5ad8930a06ea21a80170df3f3707509edd15360283f9cd1c1b9b3b4795a53941c763f5aebaf326f2e5eb53da89948440&X-Goog-SignedHeaders=host"
          alt=""
        />
        <img
          src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/4393e679-2224-4da3-967f-1dfe64500f90.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241219%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241219T010907Z&X-Goog-Expires=86399&X-Goog-Signature=0742abb1e99d2cc4caedf7c8fa01d16b58dabe4e13eff85c2a40acae4deeef81c776fafb55f6df6b6c0975a461bab7111461e69bcd58caa798c32809e369a8cc6bed69c9d3a8f050bcb8b976693f3b67ee2ec747764845e9035b7f66b22c517b61e595afc76429f50ec0c92cd99d999fe7a077cb406b724ab09bf253f81584cd644d13606ccb97246f1270a3e18cee584bc52a873f2236d9580ea9da48fc422c9dfae1ea68c1a8693a17e5e46dcdea33d166aaf43bb018817e946e3cc46dca9ccd86f5c12f36313415beed0ca103f68239cbf023a0b6a5825cabcfda42bb13fce011136bd97fcad77e985ead9b645a5d9be40b3cfff23664842316ca3bd7988a&X-Goog-SignedHeaders=host"
          alt=""
        />

        {/* <img
        src="https://dash-api.yld.mn/api/image/cfd29a6b-73f6-4daf-ad3a-5c431949aedc"
        alt=""
      /> */}
        {/* <div className="cards-childs">
        <p>УЛС ТӨР</p>
        <h4>Утааны асуудлыг "Яндангүй бүс" гаргаж шийдэх юм гэнэ</h4>
        <p>С.Ангирмаа / 12 сарын 19 , 2024 </p>
      </div> */}
      </div>
    </div>
  );
};
export default Cards;
