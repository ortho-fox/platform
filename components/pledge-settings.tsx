"use client"
import { useState } from 'react';

const PledgeSettings = () => {
  const [isOptedIn, setIsOptedIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleOptInToggle = () => {
    setIsOptedIn(!isOptedIn);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError(null);

    // Your form submission logic goes here

    try {
      setIsSubmitting(true);
      // Make an API call to submit the form data
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      //setError(error.message);
    }
  };

  return (
    <div>

      <label>
        Opt-in to receive payouts:<br />
        <input
          type="checkbox"
          className="toggle"
          checked={isOptedIn}
          onChange={handleOptInToggle}
        />
      </label>

      {isOptedIn && (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span>Account Holder Name</span>
              <input type="text" placeholder="Bill Clintong" className="input input-bordered" />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span>Account Number</span>
              <input type="text" placeholder="18206935" className="input input-bordered" />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span>Routing Number</span>
              <input type="text" placeholder="084009519" className="input input-bordered" />
            </label>
          </div>

          {error && <div>Error: {error}</div>}

          <button type="submit" className="btn" disabled={isSubmitting}>
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default PledgeSettings;

