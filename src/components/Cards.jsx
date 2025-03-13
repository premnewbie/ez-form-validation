import { MdOutlineComputer } from "react-icons/md";
import { TfiVideoCamera } from "react-icons/tfi";
import { LuMonitorCog } from "react-icons/lu";
import { MdOutlineTranslate } from "react-icons/md";
import { TbPresentationAnalytics } from "react-icons/tb";
import { RiDatabaseLine } from "react-icons/ri";

const Cards = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 m-2">
        <div className="bg-[#171d49] m-2 p-3 h-60 w-60 rounded-lg flex flex-col justify-around">
          <div className="flex justify-center gap-2 py-6">
            <LuMonitorCog size={50} color="white" />
            <div className="content-center">
              <h3 className="text-cyan-500 text-lg">Presentation design</h3>
            </div>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque id tortor in facilisis.
          </p>
        </div>
        <div className="bg-[#171d49] m-2 p-3 h-60 w-60 rounded-lg flex flex-col justify-around">
          <div className="flex justify-center gap-2 py-6">
            <TfiVideoCamera size={50} color="white" />
            <div className="content-center">
              <h3 className="text-cyan-500 text-lg">Audio-Visual Production</h3>
            </div>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque id tortor in facilisis.
          </p>
        </div>
        <div className="bg-[#171d49] m-2 p-3 h-60 w-60 rounded-lg flex flex-col justify-around">
          <div className="flex justify-center gap-2 py-6">
            <MdOutlineTranslate size={50} color="white" />
            <div className="content-center">
              <h3 className="text-cyan-500 text-lg">Translation Services</h3>
            </div>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque id tortor in facilisis.
          </p>
        </div>
        <div className="bg-[#171d49] m-2 p-3 h-60 w-60 rounded-lg flex flex-col justify-around">
          <div className="flex justify-center gap-2 py-6">
            <TbPresentationAnalytics size={50} color="white" />
            <div className="content-center">
              <h3 className="text-cyan-500 text-lg">Graphic design</h3>
            </div>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque id tortor in facilisis.
          </p>
        </div>
        <div className="bg-[#171d49] m-2 p-3 h-60 w-60 rounded-lg flex flex-col justify-around">
          <div className="flex justify-center gap-2 py-6">
            <MdOutlineComputer size={50} color="white" />
            <div className="content-center">
              <h3 className="text-cyan-500 text-lg">Research And Analytics</h3>
            </div>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque id tortor in facilisis.
          </p>
        </div>
        <div className="bg-[#171d49] m-2 p-3 h-60 w-60 rounded-lg flex flex-col justify-around">
          <div className="flex justify-center gap-2 py-6">
            <RiDatabaseLine size={50} color="white" />
            <div className="content-center">
              <h3 className="text-cyan-500 text-lg">Data Processing</h3>
            </div>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque id tortor in facilisis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
