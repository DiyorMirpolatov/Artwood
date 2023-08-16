import React from "react";

function MahCom(props) {
  return (
    <>
      <div
        className="product"
        style={{
          background: `url(${props.img})`,
          backgroundRepeat: `${props.repeat}`,
          backgroundPosition:  `${props.position}`,
          backgroundSize: `${props.cover}`,
        }}
      >
        <div>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <h3>{props.narxi}</h3>
          <span className="buttons">
            <button>
              <a href="#t">
                Buyurtma Berish <i class="fa-brands fa-instagram"></i>
              </a>
            </button>
            <button>
              <a href="#t">
                Buyurtma Berish <i class="fa-brands fa-telegram"></i>
              </a>
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default MahCom;
