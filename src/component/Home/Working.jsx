import { useQuery } from "@tanstack/react-query";
import { getWorkingHours } from "../../api/api.js";

function formatTime(t) {
  if (!t) return "";
  // Expecting HH:MM:SS; show HH:MM
  const [hh, mm] = t.split(":");
  return `${hh}:${mm}`;
}

export default function Working() {
  const {
    data: showhours,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["workinghours"],
    queryFn: getWorkingHours,
  });
  return (
    <section className="w-full   rounded-xl p-6  md:p-8">
      <div className="mx-auto max-w-5xl text-center py-10">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          <span className="text-[#00A991] ">Our Working</span>{" "}
          <span>Hours</span>
        </h2>
        <p className="mt-2 text-gray-700 text-2xl py-2">
          Check our weekly schedule and book your appointment at a convenient
          time.
        </p>

        {isLoading && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg bg-gray-100 p-10 shadow-sm animate-pulse"
              >
                <div className="h-6 w-24 rounded bg-gray-200" />
                <div className="mt-3 h-8 w-40 rounded bg-gray-200" />
              </div>
            ))}
          </div>
        )}
        {isError && (
          <div className="mt-6 text-red-600">
            Failed to load working hours
            {error?.message ? `: ${error.message}` : "."}
          </div>
        )}
        {!isLoading && !isError && Array.isArray(showhours) && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {showhours.map((h) => (
              <div
                key={h.id}
                className="rounded-lg bg-[#E6F6F4] backdrop-blur-sm px-6 py-10 shadow-sm"
              >
                <p className="text-gray-700 font-semibold text-2xl">{h.day}</p>
                <p className="mt-1 text-3xl font-bold text-[#525252]">
                  {h.closed
                    ? "(Closed)"
                    : `(${formatTime(h.opening_time)} - ${formatTime(
                        h.closing_time
                      )})`}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
