import React, { useState } from "react";

function Price() {
  const [count, setCount] = useState(0);

  const pricePerPiece = 250;
  const gstRate = 18;

  const addCount = () => {
    setCount(count + 1);
  };

  const subCount = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  const subTotal = count * pricePerPiece;
  const gst = (subTotal*gstRate/100)
  const totalAmount = subTotal * gst;

//   const finalPrice = count *250
  return (
    <>
      <div className="container">
        <input type="number" value={count} onChange={handleChange} />
        <h2>Number of items : {count}</h2>
        <h2>Price per Pice : {pricePerPiece}</h2>
        <h2>Subtotal : ₹{subTotal}</h2>
        <h2> Gst : {gst}</h2>
        <h2>Amount after Gst : {totalAmount}</h2>
        <div className="column">
          <button type="button" className="btn btn-danger" onClick={subCount}>
            -
          </button>
          <button type="button" className="btn btn-success" onClick={addCount}>
            +
          </button>

          {/* <button type="button" className="btn btn-primary" fixed="true">
            Fixed
          </button> */}
          {/* <button className="btn btn-danger" onClick={totalAmount}>TotalMount</button> */}

        </div>
      </div>
    </>
  );
}

export default Price;
