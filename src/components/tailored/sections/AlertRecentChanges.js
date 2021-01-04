import React from "react";

import SectionAlert from "../../generic/sections/SectionAlert";
import Text from "../../generic/text/Text";

const AlertRecentChanges = () => {
  return (
    <SectionAlert>
      <div>
        <Text align="center">
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
        </Text>
      </div>
    </SectionAlert>
  );
};

export default AlertRecentChanges;
