import React from 'react'
import {useParams } from 'react-router-dom'
import { ZegoSuperBoardManager } from "zego-superboard-web";

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

export default function Room() {
    const { roomID } = useParams();
    console.log(roomID)

    const myMeetings = async (element) => {
        let appID = 1965636212;
       
        let serverSercet = "85563f41cd20324f8af39a9a45c4368e";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSercet,
            roomID,
            Date.now().toString(),
            "ANkUR KUMAR");
        // Instance initialization
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.addPlugins({ZegoSuperBoardManager});
        zp.joinRoom({
            container: element,
            sharedLinks:[{
                name:'Copy Link',
                url:
                window.location.protocol + '//' + 
                window.location.host + window.location.pathname +
                 '?roomID=' +
                 roomID,
                
            }],


            onUserAvatarSetter:(userList) => {
                userList.forEach(user => {
                    user.setUserAvatar("https://xxx.xxx.xx/xx.png")
                })
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
                resolution: ZegoUIKitPrebuilt.ScreenSharingResolution_1080P
               
            },

            whiteboardConfig: {            
                showAddImageButton:true,// It's set to false by default. To use this feature, activate the File Sharing feature, and then import the plugin. Otherwise, this prompt will occur: "Failed to add image, this feature is not supported."
                showCreateAndCloseButton:true,
             },
             showRoomTimer:true,
             showInviteToCohostButton:true,
             showRemoveCohostButton:true,
             showRequestToCohostButton:true,
            //  rightPanelExpandedType: RightPanelExpandedType,
             enableUserSearch:true,
             branding: {
                logoURL:"./Components/nexusmeet-high-resolution-logo-transparent.png" // The branding LOGO URL.
              },

            
            scenario: {
              mode: ZegoUIKitPrebuilt.GroupCall, 
            },
            
            showMyCameraToggleButton: true,
            showAudioVideoSettingsButton: true,
            showScreenSharingButton:true,
            turnOnMicrophoneWhenJoining: true, // Whether to enable the microphone when joining the call. Enabled by default
           turnOnCameraWhenJoining:true,
          });
        };
  return (
    <div>
    <div><h2>ANKUR KUMAR</h2></div>

    <div ref={myMeetings}
    style={{ width: '100vw', height: '100vh' }}
    />
</div>
  )
}
