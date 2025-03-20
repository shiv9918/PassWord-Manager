import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";  // Toast import किया
import { Toaster } from "react-hot-toast"; // Toaster import किया

const Manager = () => {
  const imgRef = useRef(null);
  const passwordRef = useRef(null);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const ShowPass = () => {
    if (!passwordRef.current || !imgRef.current) return;

    if (imgRef.current.src.includes("/hidden.png")) {
      imgRef.current.src = "/show.png";
      passwordRef.current.type = "text";
    } else {
      imgRef.current.src = "/hidden.png";
      passwordRef.current.type = "password";
    }
  };

  const savePass = () => {
    if(form.site.length>3 && form.username.length>3 && form.password.length>3)
    {
    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    setForm({ site: "", username: "", password: "" });
    toast.success("PassWord Saved....!")
  }
  };

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete.....?");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id)),
        toast.success("PassWord deleted successfully!")
      );
    }
  };

  const editPassword = (id) => {
    setForm(passwordArray.filter((item) => item.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
   
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to Clipboard!"); 
  };

  return (
    <div className="container mx-auto p-5 max-w-4xl">
      <Toaster position="top-right" />  {/* Toaster को ऐड किया */}

      {/* Background */}
      <div className="absolute inset-0 -z-10 h-screen bg-[radial-gradient(60%_120%_at_50%_50%,rgba(252,205,238,.5)_100%)] bg-[#FFEDFA]"></div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mt-4">
          <span className="text-gray-500">&lt;</span>Pass
          <span className="text-yellow-500">Wallet🔐/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg">Your Own Password Manager</p>
      </div>

      <div className="flex flex-col p-4 text-black gap-4 z-10 relative">
        {/* Input Fields */}
        <input
          value={form.site}
          name="site"
          onChange={handleChange}
          placeholder="Enter Website URL..."
          className="rounded-lg border-gray-800 w-full p-3 border-2"
        />
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            value={form.username}
            name="username"
            onChange={handleChange}
            placeholder="Enter Username..."
            className="rounded-lg border-gray-800 w-full p-3 border-2"
          />
          <div className="relative w-full">
            <input
              ref={passwordRef}
              value={form.password}
              name="password"
              type="password"
              autoComplete="new-password"
              onChange={handleChange}
              placeholder="Enter Password..."
              className="rounded-lg border-gray-800 w-full p-3 border-2 pr-10"
            />
            <span
              className="absolute top-4 right-3 cursor-pointer"
              onClick={ShowPass}
            >
              <img
                ref={imgRef}
                src="/hidden.png"
                alt="Show Password"
                className="w-6 h-6"
              />
            </span>
          </div>
        </div>

        {/* Add Password Button */}
        <button
          onClick={savePass}
          className="bg-sky-700 hover:bg-yellow-500 hover:text-black mx-auto px-4 py-2 rounded-lg font-bold text-white border-2 border-black flex items-center"
        >
          <img src="/Add.png" alt="Add" className="w-5 h-5 mr-2" />
          Save Password
        </button>
      </div>

      {/* Password List */}
      <div className="password mt-6">
        <h2 className="font-bold text-2xl py-3 font-serif">Your Passwords</h2>
        {passwordArray.length === 0 ? (
          <h1 className="flex justify-center items-center font-serif font-bold" >No Password to Show</h1>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Site</th>
                  <th className="py-2 px-4 text-left">Username</th>
                  <th className="py-2 px-4 text-left">Password</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-pink-200">
                {passwordArray.map((items, index) => (
                  <tr key={index}>
                    {/* Site Column */}
                    <td className="py-2 px-4 flex items-center gap-2 max-w-[200px]">
                      <a
                        href={items.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="truncate block w-[160px] overflow-hidden whitespace-nowrap"
                      >
                        {items.site}
                      </a>
                      <button
                        onClick={() => copyToClipboard(items.site)}
                        className="flex-shrink-0"
                      >
                        <img
                          className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100"
                          src="/public/copy.png"
                          alt="copy-icon"
                        />
                      </button>
                    </td>

                    {/* Username Column */}
                    <td className="py-2 px-4">{items.username}</td>

                    {/* Password Column */}
                    <td className="py-2 px-4 flex items-center gap-2">
                      <span className="truncate block w-[100px] overflow-hidden whitespace-nowrap">
                        {items.password}
                      </span>
                      <button
                        onClick={() => copyToClipboard(items.password)}
                        className="flex-shrink-0"
                      >
                        <img
                          className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100"
                          src="/public/copy.png"
                          alt="copy-icon"
                        />
                      </button>
                    </td>
                    {/* Actions */}
                    <td className="py-4 justify-center items-center gap-4">
                      <button
                        className="cursor-pointer mx-4"
                        onClick={() => {
                          editPassword(items.id);
                        }}
                      >
                        <img
                          className="w-5 "
                          src="/edit-text.png"
                          alt="edit-img"
                        />
                      </button>
                      <button
                        className="cursor-pointer "
                        onClick={() => {
                          deletePassword(items.id);
                        }}
                      >
                        <img
                          className="w-5"
                          src="/delete.png"
                          alt="delete-img"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Manager;
