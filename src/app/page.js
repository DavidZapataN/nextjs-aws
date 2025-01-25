"use client";

import { useState, useEffect } from "react";

async function getVisitas() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL
  );
  if (!res.ok) {
    throw new Error("Error en la solicitud");
  }
  return res.json();
}

export default function Home() {
  const [views, setViews] = useState(null)

  useEffect(() => {
    async function fetchVisits() {
      try {
        const data = await getVisitas();
        setViews(data.visitas)
      } catch (error) {
        console.error("Failed to fetch visits:", error);
      }
    }

    fetchVisits();
  }, [])

  return (
    <div className="font-sans text-center mt-12">
      <h1 className="text-gray-800 text-3xl font-bold">Hello from AWS!</h1>
      <p className="text-gray-600 mt-4">
        This is my static website hosted on Amazon S3.
      </p>
      <p className="text-gray-600 mt-2">I want to count all the page visits.</p>
      <p className="text-gray-600 mt-2">
        Visits:{" "}
        <span id="contador" className="font-semibold">
          {views}
        </span>
      </p>
    </div>
  );
}