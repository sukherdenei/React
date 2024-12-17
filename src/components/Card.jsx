const Card = (props) => {
  console.log({ props });
  return (
    <div className="Cards">
      <img src={props.image} alt="" />
      <h5>{props.title}</h5>
      <p>{props.content}</p>
      <p>Л.Ангирмаа</p>
    </div>
  );
};
export default Card;
