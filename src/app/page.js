// app/page.js
async function getVisitas() {
  const res = await fetch(
    "https://wrotksrxxj.execute-api.us-east-2.amazonaws.com/prod/contador"
  );
  if (!res.ok) {
    throw new Error("Error en la solicitud");
  }
  return res.json();
}

export default async function Home() {
  const data = await getVisitas();

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
          {data.visitas}
        </span>
      </p>
    </div>
  );
}
