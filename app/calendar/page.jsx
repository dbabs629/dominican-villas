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
      <main>
        <PageHeading title="Calendar" />
        {!loading && (
          <div className="mx-auto flex h-[200px] w-[200px] items-end">
            <FontAwesomeIcon
              className="w-[100px] animate-spin text-6xl text-yellow-500"
              icon={faSpinner}
              aria-hidden="true"
            />
            <p className="animate-pulse"> Loading...</p>
          </div>
        )}
        <article className="relative">
          <span className="absolute z-0 h-full w-full animate-pulse rounded-xl bg-gray-300" />
          <iframe
            className="relative z-20 max-h-screen max-w-full"
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
