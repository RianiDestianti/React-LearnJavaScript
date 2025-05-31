import React from "react";

const Button = (props) => {
  const { children, variant = "bg-black" } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-600">
      <div className="flex gap-x-3">
        <Button variant="bg-red-700">Login</Button>
        <Button variant="bg-slate-700">LogOut</Button>
        <Button /> {/* akan menampilkan "..." karena default */}
      </div>
    </div>
  );
}

export default App;
