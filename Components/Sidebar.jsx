import Image from "next/image";

const Sidebar = ({ value }) => {
  return (
    <div className="mx-3 mb-2 text-black">
      <div className="flex items-center w-full space-x-5 bg-blue-200 border border-gray-500 rounded-md">
        <img
          src="https://i.ibb.co/2g8F04D/Whats-App-Image-2022-04-11-at-2-45-24-AM.jpg"
          alt="User Image"
          className="w-5/12 h-24 rounded-md"
        />
        <div>
          <p>Time: 02:39:29</p>
          <p>Rakibul Hasan</p>
        </div>
      </div>
      <div className="my-2 bg-blue-200 border border-gray-500 rounded-md h-[300px]">
        <p className="py-1 pl-2 text-lg text-white bg-blue-400 rounded-t-md">
          Question Pallete
        </p>
        <div className="grid grid-cols-5">
          <button className="py-1 bg-green-500 border border-white">1</button>
          <button className="py-1 bg-red-600 border border-white">2</button>
          <button className="py-1 bg-green-500 border border-white">3</button>
          <button className="py-1 bg-green-500 border border-white">4</button>
          <button className="py-1 bg-red-600 border border-white">5</button>
          <button className="py-1 bg-yellow-400 border border-white">6</button>
          <button className="py-1 bg-green-500 border border-white">7</button>
          <button className="py-1 bg-white border border-white">8</button>
          <button className="py-1 border border-white bg-slate-500">9</button>
          <button className="py-1 border border-white bg-slate-300">10</button>
        </div>
      </div>
      <div className="my-2 bg-blue-200 border border-gray-500 rounded-md h-72">
        <p className="py-1 pl-2 text-lg text-white bg-blue-400 rounded-t-md">
          Legend (Click to View)
        </p>
        <div className="grid grid-cols-2">
          <button className="py-1 bg-green-500 border border-white">
            4 Answer
          </button>
          <button className="py-1 bg-red-600 border border-white">
            2 No Answer
          </button>
          <button className="py-1 border border-white bg-slate-500">
            1 Review+Ans
          </button>
          <button className="py-1 bg-yellow-400 border border-white">
            1 Review-Ans
          </button>
          <button className="py-1 border border-white bg-slate-300">
            1 Dump
          </button>
          <button className="py-1 bg-white border border-white">
            1 No Visit
          </button>
          <button className="col-span-2 py-1 bg-blue-500">
            10 All Questions
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-3 mx-2 mt-3 border-t-2 border-white">
          <button
            className={`py-1   ${value ? value : "bg-blue-500"} rounded-md`}
          >
            Profile
          </button>
          <button
            className={`py-1 ${value ? value : "bg-blue-500"} rounded-md`}
          >
            Instr
          </button>
          <button
            className={`py-1 ${value ? value : "bg-blue-500"} rounded-md`}
          >
            Questions
          </button>
          <button
            className={`py-1 ${value ? value : "bg-blue-500"}  rounded-md`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
