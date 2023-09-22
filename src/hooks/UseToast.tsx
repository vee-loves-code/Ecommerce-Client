import { toast } from "react-toastify";

export const successToast = (text: string) => toast.success(text, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    theme: "colored"
});

export const errorToast = (text: string) => toast.error(text, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    theme: "colored"
});