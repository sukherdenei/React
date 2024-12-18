import "./style.css";
import Title from "./components/Card";

// const Container = [
//   {
//     title: "naruto",
//     imgSrc:
//       "https://www.shutterstock.com/image-photo/neon-avatar-vectorstyle-image-naruto-600w-2515582615.jpg",
//   },
//   {
//     title: "uchiho",
//     imgSrc:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomhSSKHv0jxPftO0PuTMWwr1kJg-8gzO4XQ&s",
//   },
//   {
//     title: "sasuke",
//     imgSrc:
//       "https://preview.redd.it/sasuke-question-v0-7h9w662le45b1.jpg?width=640&crop=smart&auto=webp&s=c217c131d7debf500c72606a5a0a7e03aa593a4a",
//   },
// ];

// const App = () => {
//   return (
//     <div className="Containers">
//       {Container.map((a) => {
//         return <Card title={a.title} img={a.imgSrc} />;
//       })}
//     </div>
//   );
// };
// export default App;
const NewsList = [
  {
    title:
      "Хуримтлалын сангийн орлого өсөж ипотекийн зээлийн санхүүжилтыг нэмнэ",
    imgSrc:
      "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    tag: "Зах зээл",
    pa: "С.Ангирмаа",
  },
  {
    title:
      "Хуримтлалын сангийн орлого өсөж ипотекийн зээлийн санхүүжилтыг нэмнэ",
    imgSrc:
      "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    tag: "Зах зээл",
    pa: "С.Ангирмаа",
  },
  {
    title:
      "Хуримтлалын сангийн орлого өсөж ипотекийн зээлийн санхүүжилтыг нэмнэ",
    imgSrc:
      "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    tag: "Зах зээл",
    pa: "С.Ангирмаа",
  },
];

const App = () => {
  return (
    <div className="bigboss">
      <div className="News">
        {/* <img src="https://lemonpress.mn/assets/subscribe-cover.png" alt="" /> */}
        <p>NEWSLETTER</p>
        <h2>Хөрөнгө оруулалт, бизнесийн тоймыг 5 минутанд</h2>
        <button className="mail">
          <input type="text" />
        </button>
        <p>
          Таны шийдвэр гаргалтад зайлшгүй хэрэгтэй мэдээллийг агуулсан мэйл
          товхимлыг ажлын өдөр бүр өглөө 07:00 цагт үнэгүй илгээнэ
        </p>
      </div>
      <div className="container">
        <div className="medee">
          {NewsList.map((a) => {
            return (
              <Title title={a.title} img={a.imgSrc} tag={a.tag} p={a.pa} />
            );
          })}
        </div>

        <div className="kpop">
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/757aa5b9-0e51-440e-96c4-a159059bc841.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241218%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241218T013357Z&X-Goog-Expires=86399&X-Goog-Signature=8ef701e1130385abcd8985be4aa0dff11cdc1e982f51308544f0a18e60770c427aa4270702db2bace9621d68df5ed144db722b6a317a02c94c08b397c68b81b29546368b516dc6c5d8580a6d7de5ceb2fb44d6992231c943fac2f4b067699e92fed9d60f4668d932fafacc21ed95f9f03bb12bd30bf75a48cf821359f6b0f8748f8f143b5faf61068829a077e4ddb7b07ec977fe8680d8821bc8b4f66587a0f6e6b035d2569b132c33bc2f8d1740328fd98780ab87ec44685e2ebd000b556ca5717174a5378c8152d158806959cd6831bd888e0407ea6b799f05e91277efb7f0f3d576860107d059fdcda1357f6a81947c3754e45127f9ffe3066798e655126c&X-Goog-SignedHeaders=host"
            alt=""
          />
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/4393e679-2224-4da3-967f-1dfe64500f90.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241218%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241218T013357Z&X-Goog-Expires=86399&X-Goog-Signature=170631a14827f7497209aa155dc8637497c577b58837d7166021af84be1d7e4edc5a8fd2800779077259ec37e8613eb3d3a44fb4de71230e69ce45a8d4f485feb706cdc4b92274608bc27fcbc16bcaeab49293e1f323567a27d36221e7fd4b1d17cc84714c1b7166064e261ee7deb2b1e4249cfc2aab0db3f35b771f9b6a6fb00eac07c30c9d528ed94b4e5dfacdef5433eef8d6ac267ba537e3516c490e297f4199f12eb5a8f662077fe2b1508904b67d0a2591b97a1e027aa243875d3455e58d596247550180cc60aa1b75d2bfd1b25dbde3b2996855753815044bd450f8662d9455a9316cf04a56ba9624d94d17d135b61160aa8fc2fcc3794091eafd85a5&X-Goog-SignedHeaders=host"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default App;
