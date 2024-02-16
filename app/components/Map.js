"use client";
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, useJsApiLoader} from "@react-google-maps/api";
import { initializeApp} from "firebase/app";
import { doc, getDoc, onSnapshot, getFirestore} from "firebase/firestore";

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const firebaseApiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

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
const docRef = doc(db, "sora", "coordinates");

const Map = ({ center }) => {
  const [mapCenter, setMapCenter] = useState(center);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleMapsApiKey,
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        const { lat, lng } = data;
        console.log("update")
        setMapCenter({ lat, lng });
      } else {
        console.log("No such document!");
      }
    });

    return () => {
        unsubscribe();
        // Remove the Google Maps script from the DOM
        
      };
  }, []);

  return (
    isLoaded && <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={mapCenter}
        zoom={19}
      >
        <Marker position={mapCenter} />
      </GoogleMap>
    // <LoadScript googleMapsApiKey="AIzaSyBElUvwWqm1Zt4sIdhM2D04mN3GQ1QGWhg">
    //   <GoogleMap
    //     mapContainerStyle={{ width: "100%", height: "100%" }}
    //     center={mapCenter}
    //     zoom={19}
    //   >
    //     <Marker position={mapCenter} />
    //   </GoogleMap>
    // </LoadScript>
  );
};

export default Map;
