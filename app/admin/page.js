"use client";
import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore/lite';

const firebaseApiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const Admin = () => {
  const [coords, setCoords] = useState("");

  const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: "soratracker-414405.firebaseapp.com",
    projectId: "soratracker-414405",
    storageBucket: "soratracker-414405.appspot.com",
    messagingSenderId: "371527040576",
    appId: "1:371527040576:web:3d985bb864d4da0a2729a5",
    measurementId: "G-1H81QZCHY4",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    const handlePaste = async () => {
      try {
        const clipboardText = await navigator.clipboard.readText();
        setCoords(clipboardText);
      } catch (error) {
        console.error("failed to read clipboard:", error);
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => {
      window.removeEventListener("paste", handlePaste);
    };
  }, []);

  const handleUpdate = async () => {
    const [lat, lng] = coords.split(',').map(coord => parseFloat(coord.trim()));
    
    await setDoc(doc(db, "sora", "coordinates"), {
        lat: lat,
        lng: lng,
      });
  };

  const handleInputChange = (event) => {
    setCoords(event.target.value);
  };

  return (
    <div className="mt-20">
      <div className="container mx-auto pt-5">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        Coords:
        <input
          type="string"
          id="coords"
          className="input input-primary w-1/2 mt-2 mx-4 my-5"
          value={coords}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleUpdate}>
          Update
        </button>
        <button className="btn btn-accent ml-4" onClick={() => navigator.clipboard.readText().then(setCoords)}>
          Paste from Clipboard
        </button>
        <br></br>
        Change Stream Url: 
        <input
          type="string"
          id="url"
          className="input input-secondary w-2/5 mt-2 mx-4"         
        />
        <button className="btn btn-secondary">
          Update
        </button>
      </div>
    </div>
  );
};

export default Admin;
