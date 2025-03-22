import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TOAST_NOTIFICATION_DURATION } from "../../../utils/constants";


const ToastNotification = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={TOAST_NOTIFICATION_DURATION}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default ToastNotification;
