import * as React from "react";

const DonateNowButton = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div class="mt-3">
      <button
        type="button"
        onClick={handleClick}
        class="btn btn-primary btn-lg"
      >
        Donate Now
      </button>

      {isOpen && (
        <div class='mr-5'>
          <h2>Account Details</h2>
          <div>
            <div class="row">
              <div class="col-sm ">
                <h4>MTN Momo</h4>
                <p>Account Name: Maxwell Derry</p>
                <p>Account Number: +233 54 510 3373</p>
              </div>
              <div class="col-sm">
                <h4>Vodafone Cash</h4>
                <p>Account Name: Essuman Justice Cudjoe</p>
                <p>Account Number: +233 20 141 9202</p>
              </div>
              <div class="col-sm">
                <h4>Bank Account</h4>
                <p> Bank Name: Ecobank Ghana</p>
                <p>Account Name: Essuman Justice Cudjoe</p>
                <p>Account Number: 1441002152730</p>
              </div>
            </div>
          </div>
          <h3>NOTE:</h3>
          <p>Please use <span className="font-weight-bold">HOC BUSINESS DONATION</span> as reference when using mobile payment.</p>
          <h3>THANK YOU!!</h3>
        </div>
      )}
    </div>
  );
};

export default DonateNowButton;
