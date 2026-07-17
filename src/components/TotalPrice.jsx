import React, { useState } from "react";

function TotalPrice() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [gst, setGst] = useState(0);
  const [finalTotalAmount, setFinalTotalAmount] = useState(0);

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
    setCount(e.target.value);
  };

  const totalAmount = () => {
    const total = count * pricePerPiece;
    setTotal(total);
  };

  const afterGst = () => {
    const gst = (total * gstRate) / 100;
    setGst(gst);
  };

  const finalAmount = () => {
    const finalTotalAmount = total + gst;
    setFinalTotalAmount(finalTotalAmount);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-header bg-primary text-white text-center">
                <h3>Price Calculator</h3>
              </div>

              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Number of Items</label>
                  <input
                    type="number"
                    className="form-control"
                    value={count}
                    onChange={handleChange}
                  />
                </div>

                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Items</th>
                      <td>{count}</td>
                    </tr>
                    <tr>
                      <th>Price / Piece</th>
                      <td>₹{pricePerPiece}</td>
                    </tr>
                    <tr>
                      <th>Total Amount</th>
                      <td>₹{total}</td>
                    </tr>
                    <tr>
                      <th>GST ({gstRate}%)</th>
                      <td>₹{gst}</td>
                    </tr>
                    <tr className="table-success">
                      <th>Final Amount</th>
                      <td>
                        <strong>₹{finalTotalAmount}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="d-grid gap-2">
                  <button className="btn btn-primary" onClick={addCount}>
                    Add Item
                  </button>

                  <button className="btn btn-secondary" onClick={subCount}>
                    Remove Item
                  </button>

                  <button className="btn btn-success" onClick={totalAmount}>
                    Calculate Total
                  </button>

                  <button className="btn btn-danger" onClick={afterGst}>
                    Calculate GST
                  </button>

                  <button className="btn btn-warning" onClick={finalAmount}>
                    Calculate Final Amount
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalPrice;
