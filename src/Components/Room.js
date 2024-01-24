// Room.js

import React, { useEffect, useRef } from 'react';
import './css/room.css';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { ZegoSuperBoardManager } from 'zego-superboard-web';

export default function Room() {
  const { roomID } = useParams();
  const meetingContainerRef = useRef(null);

  useEffect(() => {
    const initializeMeeting = async () => {
      let appID = 1965636212;
      let serverSercet = '85563f41cd20324f8af39a9a45c4368e';

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSercet,
        roomID,
        Date.now().toString(),
        'ANKUR KUMAR'
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.addPlugins({ ZegoSuperBoardManager });
      const urlLink= window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID;

      zp.joinRoom({
        
        container: meetingContainerRef.current,
        sharedLinks: [
          {
            name: 'Copy Link',
            url:urlLink,
          
          },
        ],
        onUserAvatarSetter: (userList) => {
          userList.forEach((user) => {
            user.setUserAvatar('https://xxx.xxx.xx/xx.png');
          });
        },
        maxUsers: 200,
        videoResolutionList: [
          ZegoUIKitPrebuilt.VideoResolution_720P,
          ZegoUIKitPrebuilt.VideoResolution_720P,
          ZegoUIKitPrebuilt.VideoResolution_720P,
          ZegoUIKitPrebuilt.VideoResolution_720P,
        ],
        videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_720P,
        screenSharingConfig: {
          resolution: ZegoUIKitPrebuilt.ScreenSharingResolution_1080P,
        },
        whiteboardConfig: {
          showAddImageButton: true,
          showCreateAndCloseButton: true,
        },
        showRoomTimer: true,
        showInviteToCohostButton: true,
        showRemoveCohostButton: true,
        showRequestToCohostButton: true,
        enableUserSearch: true,
        branding: {
          logoURL: './Components/nexusmeet-high-resolution-logo-transparent.png',
        },
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
        showMyCameraToggleButton: true,
        showAudioVideoSettingsButton: true,
        showScreenSharingButton: true,
        turnOnMicrophoneWhenJoining: true,
        turnOnCameraWhenJoining: true,
      });
    };

    if (meetingContainerRef.current) {
      initializeMeeting();
    }
  }, [roomID]);

  return (
   
       
      <div className='meeting' ref={meetingContainerRef} />

  );
}
