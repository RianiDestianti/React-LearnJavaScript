import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className="h-10 px-6 font-semibold rounded-md bg-slate  text-white"
        type="submit"
      >
        Buy now
      </button>
    );
  }
}

function ButtonBlack(){
  return(
    <button
        className="h-10 px-6 font-semibold rounded-md bg-black text-white"
        type="submit"
      >
        Buy now
      </button>
  )
}

const ButtonRed = () => {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-red-600 text-white"
      type="submit"
    >
      Buy now
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-600">
      <div className="flex gap-x-3">
        <Button />
        <ButtonBlack />
        <ButtonRed />
      </div>
    </div>
  );
}

export default App;
