export const stopCapture = (video: HTMLVideoElement) => {
  if (video.srcObject) {
    const tracks = (video.srcObject as MediaStream).getTracks();
    tracks.forEach((track) => track.stop());
    video.srcObject = null;
  }
  video.remove();
};
