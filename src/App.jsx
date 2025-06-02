import React from "react";
import Button from "./components/elements/button" 

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
