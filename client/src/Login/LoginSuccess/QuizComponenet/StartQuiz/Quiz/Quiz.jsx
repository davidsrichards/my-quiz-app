import Questions from "../Questions/Questions";

function Quiz() {
  // Previous button
  const handlePreviousButton = () => {
    console.log("Previous");
  };
  // next button
  const handleNextButton = () => {
    console.log("Next");
  };
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-4">
        <Questions />
        <div className="flex items-start justify-around w-full">
          <button
            className="bg-red-400 w-[7rem] h-8 rounded-lg text-white"
            onClick={handlePreviousButton}
          >
            Previous
          </button>
          <button
            className="bg-blue-400 w-[7rem] h-8 rounded-lg text-white"
            onClick={handleNextButton}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Quiz;
