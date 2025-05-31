import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className="h-10 px-6 font-semibold rounded-md bg-black text-white"
        type="submit"
      >
        Buy now
      </button>
    );
  }
}


function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div>
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default App;
