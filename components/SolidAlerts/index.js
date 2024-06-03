import { Flip, toast } from "react-toastify";

export const tostError = (message) => {
  toast.error(<p className="text-white tx-16 mb-0">{message}</p>, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    autoClose: 5000,
    theme: "colored",
    transition: Flip,
  });
};
export const tostSuccess = (message) => {
  toast.success(<p className="text-white tx-16 mb-0">{message}</p>, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    autoClose: 5000,
    theme: "colored",
    transition: Flip,
  });
};

export const tostInfo = (message) => {
  toast.info(<p className="text-white tx-16 mb-0">{message}</p>, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    autoClose: 5000,
    theme: "colored",
    transition: Flip,
  });
};
export const tostWhite = (message) => {
  toast.dark(<p className="text-black tx-16 mb-0">{message}</p>, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    autoClose: 5000,
    theme: "colored",
    transition: Flip,
  });
};
