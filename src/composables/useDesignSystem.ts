import Tailwind from "primevue/passthrough/tailwind";
import { usePassThrough } from "primevue/passthrough";

//Tailwind customization
const designSystem = usePassThrough(
  Tailwind,
  {
     button: {
       root: {
         class:
           "text-white bg-green-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600 relative inline-flex items-center text-center overflow-hidden cursor-pointer px-4 py-3 text-base rounded-md",
       },
       label: {
         class: "flex-1 font-bold",
       },
     },
     panel: {
       title: {
         class: ['leading-none font-light text-2xl']
       }
     },
  },
  {
    mergeSections: true,  // Used to merge with other PT sections. The default is true.
    mergeProps: true,     // Whether to use override or merge with existing configuration
  }
);

export default () => {
  return designSystem;
};