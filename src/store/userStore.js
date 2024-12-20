import { create } from 'zustand';

const useUserStore = create((set) => ({
  walletAddress: '',
  email: '',
  setWalletAddress: (address) =>
    set((state) => ({ ...state, walletAddress: address })),
  setEmail: (email) => set((state) => ({ ...state, email })),
  resetUser: () => set({ walletAddress: '', email: '' }),
}));

export default useUserStore;
