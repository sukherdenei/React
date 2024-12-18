// export default App;
// app export import
// jsx = js html css , Dom
// JSX өргөтгөл Заавал томоор бичигдэнэ "file"//

// import React from "react";
// const App = () => {
//   return <div>HELLO WORLD</div>;
// };
// export default App;

// import "./app.css";

// function Card() {
//   return (
//     <div className="Cards">
//       {
//         <img
//           src="https://cdn.tuoitre.vn/zoom/700_525/471584752817336320/2024/5/8/tuoi-tre-cuoi-tram-hoat-hinh-4-17151577012581298540930-0-0-805-1536-crop-17151581218091745639559.jpg"
//           alt=""
//         />
//       }
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="Card">
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//     </div>
//   );
// }
// export default App;

import "./app.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Banner from "./components/Banner";
import BreakingNews from "./components/Breakingnews";
import WrapperD from "./components/Wrapper";

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

const App = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <BreakingNews />
      <WrapperD />
      {/* <HeroSection /> */}
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
  );
};
export default App;
