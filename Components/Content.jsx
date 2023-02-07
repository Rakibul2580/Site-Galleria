import { Radio } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Content = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz/5")
      .then((res) => res.json())
      .then((data) => setData(data.data.questions))
      .catch((err) => console.log(err));
  }, []);
  const notify = (ans) => toast(ans);
  const handleAns = (correctAnswer, option) => {
    if (correctAnswer == option) {
      toast.success("Congratulation");
    } else {
      toast.error("Oh");
    }
  };
  return (
    <div className="pb-5">
      {data.map((item, index) => (
        <div key={index}>
          <div className="p-5 m-5 mt-2 bg-white border-4 rounded-md shadow-2xl border-sky-300 md:m-10">
            <div className="blog md:flex md:justify-between">
              <h1 className="text-2xl font-semibold text-black">
                Quiz : {item.question.replace("<p>", " ").replace("</p>", " ")}
              </h1>
            </div>
            <form className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2">
              {item.options.map((option, id) => (
                <label
                  key={id}
                  className="flex items-center p-3 mt-3 font-medium text-black rounded-md shadow-xl bg-sky-200"
                >
                  {/* <input
                onClick={() => handleAns(item.correctAnswer, option)}
                type="radio"
                name="radio-6"
                className="radio radio-accent"
              /> */}
                  <Radio
                    onClick={() => handleAns(item.correctAnswer, option)}
                    id="ripple-on"
                    name="type"
                    className="border-2 border-primary-blue"
                    ripple={false}
                  />{" "}
                  <p className="ml-2">{option}</p>
                </label>
              ))}
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
