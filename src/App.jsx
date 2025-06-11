import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gradient-to-b from-[#252D37] to-[#181E27] rounded-xl flex flex-col items-start w-[400px] h-[400px] gap-5 p-6">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thankyou"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-3 items-center justify-center text-center"
            >
              <div>
                <img src="/illustration-thank-you.svg" alt="Thank you" />
              </div>
              <button className="bg-slate-700 shadow-inner p-2 rounded-full text-orange-500 mt-5 px-5">
                You selected {selected} out of 5
              </button>
              <h1 className="text-2xl font-semibold mt-5">Thank You!</h1>
              <span className="text-gray-400">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don't hesitate to get in touch!
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-start gap-5"
            >
              <div className="bg-[#2C3441] rounded-full h-10 w-10 flex items-center justify-center shadow-inner">
                <img src="/icon-star.svg" alt="Star" />
              </div>
              <h1 className="text-2xl font-semibold">How did we do?</h1>

              <span className="text-gray-400 text-left">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </span>

              <div className="flex justify-between gap-3 items-center w-full mt-1">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setSelected(num)}
                    className={`rounded-full h-12 w-12 font-semibold cursor-pointer
                ${
                  selected === num
                    ? "bg-white text-black"
                    : "bg-slate-700 hover:bg-orange-500 hover:text-black"
                }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <button
                onClick={handleSubmit}
                className="bg-orange-500 rounded-full h-10 w-full text-black font-semibold mt-3 hover:bg-white hover:text-black cursor-pointer"
              >
                SUBMIT
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default App;
