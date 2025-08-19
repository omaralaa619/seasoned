import React from "react";

const Video = ({ channel }) => {
  //   switch (channel) {
  //     case 1:
  //       return (
  //         <video
  //           src="https://seasoned.koto.studio/wp-content/uploads/2024/11/hero.mp4"
  //           autoPlay
  //           loop
  //           muted
  //           className="absolute top-0 left-0 w-full h-full object-cover"
  //         />
  //       );

  //     case 2:
  //       return (
  //         <video
  //           src="https://seasoned.koto.studio/wp-content/uploads/2025/01/KOTO_Seasoned_Web_Channel_01-1.mp4"
  //           autoPlay
  //           loop
  //           muted
  //           className="absolute top-0 left-0 w-full h-full object-cover"
  //         />
  //       );
  //     case 3:
  //       return (
  //         <video
  //           src="https://seasoned.koto.studio/wp-content/uploads/2025/01/KOTO_Seasoned_Web_Channel_02-1.mp4"
  //           autoPlay
  //           loop
  //           muted
  //           className="absolute top-0 left-0 w-full h-full object-cover"
  //         />
  //       );
  //     case 4:
  //       return (
  //         <video
  //           src="https://seasoned.koto.studio/wp-content/uploads/2025/01/KOTO_Seasoned_Web_Channel_03-1.mp4"
  //           autoPlay
  //           loop
  //           muted
  //           className="absolute top-0 left-0 w-full h-full object-cover"
  //         />
  //       );
  //     case 5:
  //       return (
  //         <video
  //           src="https://seasoned.koto.studio/wp-content/uploads/2025/01/KOTO_Seasoned_Web_Channel_04-1.mp4"
  //           autoPlay
  //           loop
  //           muted
  //           className="absolute top-0 left-0 w-full h-full object-cover"
  //         />
  //       );
  //   }
  return (
    <>
      <video
        src="https://seasoned.koto.studio/wp-content/uploads/2024/11/hero.mp4"
        autoPlay
        loop
        muted
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          channel == 1 ? "" : "hidden"
        }`}
      />

      <video
        src="https://seasoned.koto.studio/wp-content/uploads/2025/01/KOTO_Seasoned_Web_Channel_01-1.mp4"
        autoPlay
        loop
        muted
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          channel == 2 ? "" : "hidden"
        }`}
      />
      <video
        src="https://seasoned.koto.studio/wp-content/uploads/2025/01/KOTO_Seasoned_Web_Channel_02-1.mp4"
        autoPlay
        loop
        muted
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          channel == 3 ? "" : "hidden"
        }`}
      />

      <video
        src="https://seasoned.koto.studio/wp-content/uploads/2025/01/KOTO_Seasoned_Web_Channel_03-1.mp4"
        autoPlay
        loop
        muted
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          channel == 4 ? "" : "hidden"
        }`}
      />
      <video
        src="https://seasoned.koto.studio/wp-content/uploads/2025/01/KOTO_Seasoned_Web_Channel_04-1.mp4"
        autoPlay
        loop
        muted
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          channel == 5 ? "" : "hidden"
        }`}
      />
    </>
  );
};

export default Video;
