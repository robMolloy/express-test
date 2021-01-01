import React from "react";

import SectionAlert from "../../generic/sections/SectionAlert";

const AlertRecentChanges = () => {
  return (
    <SectionAlert>
      <div>
        <p>
          If you have been impacted by the recent Government changes to Covid
          restrictions and wish to cancel your booked test, please follow this
          link:{" "}
          <a href="https://support.expresstest.co.uk/">
            Booking Cancellation / Voucher Request.
          </a>
          <br />
          <br />
          This will advise you of our cancellation policy and the process for
          submitting your cancellation and requesting your voucher.
          <br />
          <br />
          Thank you for choosing ExpressTest.
        </p>
      </div>
    </SectionAlert>
  );
};

export default AlertRecentChanges;
