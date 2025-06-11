export function requestDisplayMedia() {
  return navigator.mediaDevices.getDisplayMedia({
    // This is actually supported, but only in Chrome so not yet part of the TS typedefs, so
    // @ts-ignore
    preferCurrentTab: true,
    video: { frameRate: 30 },
  });
}
