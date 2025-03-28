export const TOAST_NOTIFICATION_DURATION = 3000;

export const ReactQueryKeys = {
  USER: "user",
  USER_DETAILS: "user-details",
  USER_BY_ID: (id: string) => [ReactQueryKeys.USER, id],
  USER_DETAILS_ME: () => [ReactQueryKeys.USER_DETAILS, "me"],
};

export const Paths = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  NUTRITION_INFO: "/nutrition-info",
  USER_PROFILE: "/user-profile",
  NUTRI_BUDDY: "/nutri-buddy",
  All_USERS: "/all-users",
};
