const appLiveState = true;
const devUrl = "";
const prodUrl = "https://picsum.photos/";

export const Environment = {
  baseUrl: appLiveState ? prodUrl : devUrl,
};
