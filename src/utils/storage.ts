export const setIMToken = (token: string) => localStorage.setItem("IM_TOKEN", token);
export const setChatToken = (token: string) => localStorage.setItem("IM_CHAT_TOKEN", token);
export const setIMUserID = (userID: string) => localStorage.setItem("IM_USERID", userID);

export const setAccessedFriendApplication = (list: string[]) =>
  localStorage.setItem(
    `${getIMUserID()}_accessedFriendApplications`,
    JSON.stringify(list)
  );
export const setAccessedGroupApplication = (list: string[]) =>
  localStorage.setItem(
    `${getIMUserID()}_accessedGroupApplications`,
    JSON.stringify(list)
  );

// 将 chatToken imToken userID 保存到浏览器本地
export const setIMProfile = ({ chatToken, imToken, userID }: any) => {
  setChatToken(chatToken);
  setIMToken(imToken);
  setIMUserID(userID);
};

export const clearIMProfile = () => {
  localStorage.removeItem("IM_TOKEN");
  localStorage.removeItem("IM_CHAT_TOKEN");
  localStorage.removeItem("IM_USERID");
};

export const getIMToken = () => localStorage.getItem("IM_TOKEN");
export const getChatToken = () => localStorage.getItem("IM_CHAT_TOKEN");
export const getIMUserID = () => localStorage.getItem("IM_USERID");
export const getAccessedFriendApplication = () =>
  localStorage.getItem(`${getIMUserID()}_accessedFriendApplications`)
    ? JSON.parse(
        localStorage.getItem(`${getIMUserID()}_accessedFriendApplications`)!
      )
    : [];
export const getAccessedGroupApplication = () =>
  localStorage.getItem(`${getIMUserID()}_accessedGroupApplications`)
    ? JSON.parse(
        localStorage.getItem(`${getIMUserID()}_accessedGroupApplications`)!
      )
    : [];
