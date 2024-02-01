"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

export default function page() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, [loading]);

  return (
    <Layout>
      <main className="h-screen min-h-[550px] max-w-[1200px]">
        <PageHeading title="Calendar" />
        {!loading && (
          <div className="mx-auto flex h-48 w-48 items-end">
            <FontAwesomeIcon
              className="w-[100px] animate-spin text-6xl text-yellow-500"
              icon={faSpinner}
              aria-hidden="true"
            />
            <p className="animate-pulse"> Loading...</p>
          </div>
        )}
        <article className="relative mx-auto h-96 w-full xs:h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[750px]">
          <span className="absolute z-0 h-auto w-full animate-pulse rounded-xl bg-gray-300" />
          <iframe
            className="z-20 mx-auto max-h-full w-full max-w-full md:w-11/12 2xl:w-10/12"
            src="https://calendar.google.com/calendar/embed?height=1000&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=YjQxOTMzZWIyYjBkOTAxNTFhZWM1NDAzZTBkMGY1YzBjNWEwMjljMjJiZDFmZTZiNWUxYWUwMTExMjc3MWQwNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%6691c6"
            width="1999"
            height="1000"
            loading="lazy"
            title="Calendar"
            onLoad={() => setLoading(true)}
          />
        </article>
      </main>
    </Layout>
  );
}
