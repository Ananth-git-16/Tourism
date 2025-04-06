// export default function Time({moment}){
//     return(
//         <>
//             <div className="tim">
//                 <div className="o">
//                     00
//                 </div>
//                 <p style={{ color: 'white' }}>{moment}</p>

//             </div>
//         </>
//     );
// }
export default function Time({ moment, backgroundColor, textColor }) {
    return (
      <div
        className="tim"
        style={{ backgroundColor: backgroundColor || 'black' }}
      >
        <div className="o" style={{ color: textColor || 'white' }}>
          00
        </div>
        <p style={{ color: textColor || 'white' }}>{moment}</p>
      </div>
    );
  }
  