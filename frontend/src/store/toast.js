import { create } from "zustand";

export const useToastStore = create((set) => ({
  status: { isShow: false, message: "", type: "" },
  setStatus: (status) => set({ status }),
  showToast: (message, type) => {
    set(() => ({ status: { isShow: true, message, type } }));
  },
  hideToast: () => {
    setTimeout(() => {
      set(() => ({ status: { isShow: false, message: "", type: "" } }));
    }, 3000);
  },
}));
