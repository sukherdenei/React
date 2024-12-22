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
import MiddleScroll from "./components/Middlethrescroll";
import Search from "./components/SearchInput";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <BreakingNews />
      <WrapperD />
      <MiddleScroll />
      {/* <Card /> */}
      <Cards />
      <Br />
      <Search />
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
