import React from "react";

const Button = (props) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`}
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
        <Button variant="bg-red-700" />
        <Button variant="bg-slate-700" />
        <Button variant="bg-black" />
      </div>
    </div>
  );
}

export default App;
