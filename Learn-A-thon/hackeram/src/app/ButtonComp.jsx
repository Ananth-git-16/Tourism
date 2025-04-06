'use client'
export default function ButtonComp({first,second}) {
    const handleMouseEnter = (e) => {
      e.target.style.backgroundPosition = 'right bottom';
      e.target.style.color = 'black';
      e.target.innerHTML = second;
    };
  
    const handleMouseLeave = (e) => {
      e.target.style.backgroundPosition = 'left bottom';
      e.target.style.color = 'rgb(255, 255, 255)';
      e.target.innerHTML = first;
    };
    return (
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: '25px px',
        //   borderRadius: '10%',
          border: '1px solid black',
          borderRadius: '10px',
          width :'250px',
          cursor: 'pointer',
          fontSize: '16px',
          height:'50px',
          lineHeight: '1',
          boxSizing: 'border-box',
          color: 'rgb(255, 255, 255)',
          background: 'linear-gradient(to right, rgb(0, 0, 0) 50%, rgb(255, 255, 255) 50%)',
          backgroundSize: '200% 100%',
          backgroundPosition: 'left bottom',
          transition: 'background-position 0.3s ease, color 0.3s ease'
        }}
      >
        {first}
      </button>
    );
  }
  