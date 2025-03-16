import { create } from "zustand";

const useBoxAlpha = create((set) => ({
    // modal toggle
    isModalOpen: false, 
    setIsModalOpen: (state) => set({ isModalOpen: state }),

    triggerModal: () => {},
    setTriggerModal: (toggleModal) => set({ triggerModal: toggleModal }),


    // changing variant
    variantType: 1,
    setVariantType: (state) => set({ variantType: state })
}));

export default useBoxAlpha;
