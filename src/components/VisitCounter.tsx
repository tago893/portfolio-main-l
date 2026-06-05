import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

// Free, no-auth hit counter. One increment per browser session.
const NAMESPACE = "varunchikkala-portfolio";
const KEY = "site-visits";

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const alreadyCounted = sessionStorage.getItem("vc_counted") === "1";
    const endpoint = alreadyCounted
      ? `https://abacus.jasoncameron.dev/get/${NAMESPACE}/${KEY}`
      : `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`;

    fetch(endpoint)
      .then((r) => r.json())
      .then((data: { value?: number }) => {
        if (typeof data.value === "number") {
          setCount(data.value);
          sessionStorage.setItem("vc_counted", "1");
        }
      })
      .catch(() => {
        /* silent fail — counter is non-essential */
      });
  }, []);

  if (count === null) return null;

  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs text-zinc-600"
      title="Total site visits"
    >
      <Eye className="size-3.5" />
      {count.toLocaleString()} visits
    </span>
  );
}
