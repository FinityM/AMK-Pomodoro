const avengersNames = [
    "Thor",
    "Cap",
    "Tony Stark",
    "Black Panther",
    "Black Widow",
    "Hulk",
    "Spider-Man",
  ];
  
  let randomName =
    avengersNames[Math.floor(Math.random() * avengersNames.length)];


const main = async () => {
    VoxeetSDK.initialize("poArKhlY7Vv9FUPM3Iorrw==", "9RonGCXmumcdMl9JrbwBwvcil70qas0VBhNDLEsLTIU=");
    try {
        // Open the session
        await VoxeetSDK.session.open({ name: randomName });

        VoxeetSDK.conference.on("streamAdded", (participant, stream) => {
            if (stream.type === "ScreenShare") return;
          
            if (stream.getVideoTracks().length) {
              addVideoNode(participant, stream);
            }
          });
          
          VoxeetSDK.conference.on("streamUpdated", (participant, stream) => {
            if (stream.type === "ScreenShare") return;
          
            if (stream.getVideoTracks().length) {
              addVideoNode(participant, stream);
            } else {
              removeVideoNode(participant);
            }
          });

          VoxeetSDK.conference.on("streamRemoved", (participant, stream) => {
            removeVideoNode(participant);
          });
        // Initialize the UI
        initUI();
      } catch (e) {
        alert("Something went wrong : " + e);
      }
    };
  
  main();