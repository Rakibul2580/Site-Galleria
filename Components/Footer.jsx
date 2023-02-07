const Footer = ({ setValue, color }) => {
  return (
    <div className="py-2 mx-2 space-x-6">
      <button className="px-12 py-2 font-serif text-white bg-blue-500 rounded-md">
        CLEAR RESPONSE
      </button>
      <button
        onClick={() => setValue("bg-yellow-400")}
        className={`px-12 py-2 font-serif text-white ${
          color === "bg-yellow-400" ? "bg-blue-700" : "bg-blue-500"
        }  rounded-md`}
      >
        REVIEW
      </button>
      <button
        onClick={() => setValue("bg-white")}
        className={`px-12 py-2 font-serif text-white ${
          color === "bg-white" ? "bg-blue-700" : "bg-blue-500"
        }  rounded-md`}
      >
        DUMP
      </button>
      <button className="px-12 py-2 font-serif text-white bg-blue-500 rounded-md focus:bg-blue-700">
        PREVIOUS
      </button>
      <button
        onClick={() => setValue("bg-gray-600")}
        className={`px-12 py-2 font-serif text-white ${
          color === "bg-gray-600" ? "bg-blue-700" : "bg-blue-500"
        }  rounded-md`}
      >
        NEXT
      </button>
    </div>
  );
};

export default Footer;
