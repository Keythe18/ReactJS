// import React, { useEffect, useState } from "react";

// const Personnage = ({ nom, prenom }) => {
//   const [backgroundColor, setBackgroundColor] = useState("orange");

//   //execute le code a la creation/update/destruction du composant
//   // useEffect(() => {
//   //     console.log{'test'}
//   // })

//   //Execute le code a la creation du composant
//   // useEffect(() => {
//   //     console.log('creation')
//   //     setBackgroundColor('green')
//   // }, [])

//   //Execute du code uniquement quand la valeur du tableau ( prenom) est modifie
//   //   useEffect(() => {
//   //     setBackgroundColor("green");
//   //   }, [prenom]);

//   //   //return execute le code a la destruction du compo
//   //   useEffect(() => {
//   //     return () => {
//   //       console.log("destroy");
//   //     };
//   //   }, []);

//   //Execute a la creation et destruction (bis)
//   useEffect(() => {
//     console.log("creation");
//     setBackgroundColor("green");

//     return () => {
//       console.log("destroy");
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         padding: "10px",
//         background: backgroundColor,
//         display: "inline-block",
//         margin: "10px",
//       }}
//     >
//       {nom} {prenom}
//     </div>
//   );
// };

// export default Personnage;
