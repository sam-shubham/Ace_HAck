import React, { useState } from "react";
import AgoraUIKit, { PropsInterface } from "agora-rn-uikit";

const videocall = () => {
  const [videoCall, setVideoCall] = useState(true);
  const props = {
    connectionData: {
      appId: "482d960646b8406d9b603d03aca68500",
      channel: "test",
    },
    rtcCallbacks: {
      EndCall: () => setVideoCall(false),
    },
  };

  return videoCall ? (
    <AgoraUIKit
      connectionData={props.connectionData}
      rtcCallbacks={props.rtcCallbacks}
    />
  ) : null;
};

export default videocall;
