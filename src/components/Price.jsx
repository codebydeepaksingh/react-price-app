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
  const gst = (subTotal * gstRate) / 100;
  const totalAmount = subTotal + gst;

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div class="card bg-primary-subtle">
              <div class="card-body">
                <h2 class="card-title text-white bg-info p-2 rounded">Price App</h2>
                <div className="mb-4 mt-4">
                  <label className="text-white pb-2 fs-2 ">Number of items</label>
                  <input
                    type="number"
                    className="form-control"
                    value={count}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <th>Number of items : </th>
                        <td>{count}</td>
                      </tr>
                      <tr>
                        <th>Price per Pice : </th>
                        <td>{pricePerPiece}</td>
                      </tr>
                      <tr>
                        <th>Subtotal : </th>
                        <td>₹{subTotal}</td>
                      </tr>
                      <tr>
                        <th>Gst : </th>
                        <td>{gst}</td>
                      </tr>
                      <tr>
                        <th>Amount after Gst : </th>
                        <td>{totalAmount}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="d-grid gap-2 mt-3">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={addCount}
                  >
                    AddCount
                  </button>
                  <button
                    className="btn btn-success"
                    type="button"
                    onClick={subCount}
                  >
                    SubCount
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

export default Price;
