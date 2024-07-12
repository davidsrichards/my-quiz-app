function LoadingQuestion() {
  return (
    <>
      <div className="flex w-full h-screen items-center justify-center">
        <div className="w-[10rem] transition delay-75 h-[10rem] bg-white rounded-full  animate-ping flex items-center justify-center text-blue-400 font-bold text-[2rem]">
          Loading...
        </div>
      </div>
    </>
  );
}

export default LoadingQuestion;
