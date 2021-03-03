export function isImage(filename) {
  var parts = filename.split(".");
  var ext = parts[parts.length - 1];
  switch (ext.toLowerCase()) {
    case "jpg":
    case "gif":
    case "bmp":
    case "png":
      //etc
      return true;
  }
  return false;
}
export function isVideo(filename) {
  var parts = filename.split(".");
  var ext = parts[parts.length - 1];
  switch (ext.toLowerCase()) {
    case "m4v":
    case "avi":
    case "mpg":
    case "mp4":
      // etc
      return true;
  }
  return false;
}
export function isAudio(filename) {
  var parts = filename.split(".");
  var ext = parts[parts.length - 1];
  switch (ext.toLowerCase()) {
    case "pcm":
    case "wav":
    case "aiff":
    case "mp3":
    case "ogg":
    case "aac":
    case "wma":
    case "flac":
    case "alac":
      // etc
      return true;
  }
  return false;
}
