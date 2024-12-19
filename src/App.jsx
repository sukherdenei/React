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
import Cards from "./components/Cards";
import Br from "./components/Br";
import Three from "./components/Threecards";
import BrT from "./Brtwo";
import Posts from "./Post";
import Footers from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <BreakingNews />
      <WrapperD />
      {/* <Card /> */}
      <Cards />
      <Br />
      <Three />
      <BrT />
      <Posts />
      <Footers />

      {/* {news.map((medee) => {
        return (
          <Card
            title={medee.title}
            content={medee.content}
            image={medee.imageSrc}
          />
        );
      })} */}
    </div>
  );
};
export default App;
