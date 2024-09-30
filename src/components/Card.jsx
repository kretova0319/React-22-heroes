import "./Card.css";
// import React from "react";

const Card = (props) => {
  const { name, universe, alterego, occupation, friends, superpowers, url } =
    props;
  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="content">
        <p>
          <span>Вселенная: </span>
          {universe}
        </p>
        <p>
          <span>Альтер эго: </span>
          {alterego}
        </p>
        <p>
          <span>Род деятельности: </span>
          {occupation}
        </p>
        <p>
          <span>Друзья: </span>
          {friends}
        </p>
        <p>
          <span>Суперсилы: </span>
          {superpowers}
        </p>
      </div>
      <img className="img" src={url} alt={`picture of ` + name} />
    </div>
  );
};

export default Card;

// как классовый компонент
// class Card extends React.Component {
//   render() {
//     const { name, universe, alterego, occupation, friends, superpowers, url } =
//       this.props;
//     return (
//       <div className="card">
//         <h2>{name}</h2>
//         <div className="content">
//           <p>
//             <span>Вселенная: </span>
//             {universe}
//           </p>
//           <p>
//             <span>Альтер эго: </span>
//             {alterego}
//           </p>
//           <p>
//             <span>Род деятельности: </span>
//             {occupation}
//           </p>
//           <p>
//             <span>Друзья: </span>
//             {friends}
//           </p>
//           <p>
//             <span>Суперсилы: </span>
//             {superpowers}
//           </p>
//         </div>
//         <img className="img" src={url} alt="" />
//       </div>
//     );
//   }
// }

// как функциональный компонент
// function Card({
//   name,
//   universe,
//   alterego,
//   occupation,
//   friends,
//   superpowers,
//   url,
// }) {
//   return (
//     <div className="card">
//       <h2>{name}</h2>
//       <div className="content">
//         <p>
//           <span>Вселенная: </span>
//           {universe}
//         </p>
//         <p>
//           <span>Альтер эго: </span>
//           {alterego}
//         </p>
//         <p>
//           <span>Род деятельности: </span>
//           {occupation}
//         </p>
//         <p>
//           <span>Друзья: </span>
//           {friends}
//         </p>
//         <p>
//           <span>Суперсилы: </span>
//           {superpowers}
//         </p>
//       </div>
//       <img className="img" src={url} alt="" />
//     </div>
//   );
// }
// Вариант 2: указать одним словом (props) и использовать его дальше {props.name} и т.д.
// function Card(props) {
//   return (
//     <div className="card">
//       <h2>{props.name}</h2>
//       <div className="content">
//         <p>
//           <span>Вселенная: </span>
//           {props.universe}
//         </p>
//         <p>
//           <span>Альтер эго: </span>
//           {props.alterego}
//         </p>
//         <p>
//           <span>Род деятельности: </span>
//           {props.occupation}
//         </p>
//         <p>
//           <span>Друзья: </span>
//           {props.friends}
//         </p>
//         <p>
//           <span>Суперсилы: </span>
//           {props.superpowers}
//         </p>
//       </div>
//       <img className="img" src={props.url} alt="" />
//     </div>
//   );
// }
