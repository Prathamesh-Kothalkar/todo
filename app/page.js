"use client"

import { useState } from "react";

export default function app() {

  const [work, setWork] = useState("");
  const [desc, setDesc] = useState("")
  const [list, setList] = useState([]);


  const handler = (e) => {
    e.preventDefault();
    setList([...list, { work, desc }]);
    setWork("");
    setDesc("");
  }
  var task = <h1 className="text-center">Nothing</h1>

  const deleteTodo = (i) => {
    const updatedlist = [...list];
    updatedlist.splice(i, 1);
    setList(updatedlist);
  }




  if (list.length > 0) {
    task = list.map((t, i) => {
      return (
        <>
          <li key={i}>
            <div className="flex justify-between ">
              <h1 className="text-4xl">{t.work}</h1>
              <h1 className="text-2xl">{t.desc}</h1>
              <button className="border border-white bg-red-500 p-4" onClick={() => {
                deleteTodo(i)
              }}>Delete</button>
            </div>
          </li>
        </>
      )
    })
  }

  return (
    <>
      <h1 className="bg-amber-500 text-center p-3 mx-3 font-sans font-bold text-5xl">Todo List</h1>
      <form onSubmit={handler} className="h-auto m-1 p-5 bg-violet-700">
        <input className="m-5 border border-black rounded p-3 text-black " placeholder="Enter Work" value={work} onChange={(e) => {
          setWork(e.target.value)
        }} />
        <input className="m-5 border border-black rounded p-3 text-black " placeholder="Enter Description" value={desc} onChange={(e) => {
          setDesc(e.target.value)
        }} />
        <button className="bg-lime-400 font-bold rounded p-3">Submit</button>
      </form>
      <h1 className="font-bold text-4xl text-center text-red-500 ">Items</h1>
      <p className="bg-yellow-700 text-white font-bold">
        <ul className=""><i>{task}</i></ul>
      </p>
    </>
  )
}
