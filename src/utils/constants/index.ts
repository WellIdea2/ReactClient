export const TOAST_NOTIFICATION_DURATION = 3000;

export const ReactQueryKeys = {
  USER_PROFILE: ["user-profile"],
  USER_BY_ID: (id: string) => ["user", id],
  USER_DETAILS_PROFILE: ["user-details-profile"],
};

export const Paths = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  NUTRITION_INFO: "/nutrition-info",
  USER_PROFILE: "/user-profile",
  NUTRI_BUDDY: "/nutri-buddy",
};
