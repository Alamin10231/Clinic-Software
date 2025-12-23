import doctorimg1 from "../../Image/doctor1.png";
import { useQuery } from "@tanstack/react-query";
import { getClinicInfo } from "../../api/api.js";
export default function Meet() {
  const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
  const API_ORIGIN = (() => {
    try {
      return new URL(API_BASE).origin;
    } catch {
      return "";
    }
  })();

  const {
    data: showdoctors,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: getClinicInfo,
  });
  const showdoctorsArray = Array.isArray(showdoctors) ? showdoctors : [];
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-teal-600">Meet</span> the Team
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Our experienced physiotherapists are dedicated to providing
          personalized care and effective treatment for every patient.
        </p>

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-xl p-4 animate-pulse">
                <div className="relative mb-4">
                  <div className="rounded-2xl h-52 bg-gray-200" />
                  <div className="absolute inset-x-0 bottom-0 mx-auto h-64 w-40 bg-gray-200 rounded-full" />
                </div>
                <div className="h-5 w-32 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        )}
        {isError && (
          <div className="mt-6 text-red-600">
            Failed to load doctors{error?.message ? `: ${error.message}` : "."}
          </div>
        )}
        {!isLoading && !isError && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {showdoctorsArray.map((member, idx) => (
              <div key={idx} className=" rounded-xl  p-4">
                {/* Teal tile background with overlapping doctor image */}
                <div className="relative mb-4">
                  <div className=" rounded-2xl h-52 bg-[#B0E4DD]"></div>
                  <img
                    src={
                      member?.photo
                        ? member.photo.startsWith("/")
                          ? API_ORIGIN + member.photo
                          : member.photo
                        : doctorimg1
                    }
                    alt={member.name}
                    className="absolute inset-x-0 bottom-0 mx-auto h-64 object-contain drop-shadow-xl"
                  />
                </div>
                <h3 className="text-xl font-bold">
                  {member.first_name} {member.last_name}
                </h3>
                <p className="text-teal-700 text-sm">{member.title}</p>
                <div className="text-gray-500 text-xs mt-1">
                  {member.specialties?.map((s) => (
                    <span key={s.id} className="block">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
