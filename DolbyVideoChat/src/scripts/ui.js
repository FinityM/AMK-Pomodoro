const initUI = () => {
    const joinButton = document.getElementById("join-btn");
    const leaveButton = document.getElementById("leave-btn");
    const conferenceAliasInput = document.getElementById("alias-input");
    const startVideoBtn = document.getElementById("start-video-btn");
    const stopVideoBtn = document.getElementById("stop-video-btn");
    
    joinButton.disabled = false;
    joinButton.onclick = () => {
        let conferenceAlias = conferenceAliasInput.value;
      
        /*
         * 1. Create a conference room with an alias
         * 2. Join the conference with its id
         */
        VoxeetSDK.conference
        .create({ alias: conferenceAlias })
        .then((conference) => VoxeetSDK.conference.join(conference, {}))
        .then(() => {
          joinButton.disabled = true;
          // Enable the leaveButton after resolving the join promise
          leaveButton.disabled = false;
            startVideoBtn.disabled = false;
        })
        .catch((err) => console.error(err));
      };
      leaveButton.onclick = () => {
        VoxeetSDK.conference
          .leave()
          .then(() => {
            joinButton.disabled = false;
            leaveButton.disabled = true;
          })
          .catch((err) => console.error(err));
      };
      startVideoBtn.onclick = () => {
        VoxeetSDK.conference
          .startVideo(VoxeetSDK.session.participant)
          .then(() => {
            startVideoBtn.disabled = true;
            stopVideoBtn.disabled = false;

          })
          .catch((err) => console.error(err));
      };
      stopVideoBtn.onclick = () => {
        VoxeetSDK.conference
          .stopVideo(VoxeetSDK.session.participant)
          .then(() => {
            startVideoBtn.disabled = false;
            stopVideoBtn.disabled = true;
          })
          .catch((err) => console.error(err));
      };
    };      

    const addVideoNode = (participant, stream) => {
        let videoNode = document.getElementById("video-" + participant.id);
      
        if (!videoNode) {
          videoNode = document.createElement("video");
      
          videoNode.setAttribute("id", "video-" + participant.id);
          videoNode.setAttribute("height", 240);
          videoNode.setAttribute("width", 320);
          videoNode.setAttribute("playsinline", true);
          videoNode.muted = true;
          videoNode.setAttribute("autoplay", "autoplay");
      
          const videoContainer = document.getElementById("video-container");
          videoContainer.appendChild(videoNode);
        }
      
        navigator.attachMediaStream(videoNode, stream);
      };

      const removeVideoNode = (participant) => {
        let videoNode = document.getElementById("video-" + participant.id);
      
        if (videoNode) {
          videoNode.srcObject = null; // Prevent memory leak in Chrome
          videoNode.parentNode.removeChild(videoNode);
        }
      };