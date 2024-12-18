// const Card = (props) => {
//   console.log(props);
//   return (
//     <div className="card">
//       <h1>{props.title}</h1>
//       <img src={props.img} alt="" />
//     </div>
//   );
// };

// export default Card;

const Title = (props) => {
  return (
    <div className="News">
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.p}</p>
      <h5>{props.tag}</h5>
    </div>
  );
};
export default Title;
