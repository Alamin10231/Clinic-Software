import React, { useState } from "react";
import { Star, Upload } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getReviews, postReviews } from "../api/api.js";

export default function Testmonial() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const {
    data: testimonialsData,
    isLoading,
    isError: isQueryError,
    error: queryError,
  } = useQuery({
    queryKey: ["reviews", page, limit],
    queryFn: () => getReviews(page, limit),
    keepPreviousData: true,
  });

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
  const API_ORIGIN = (() => {
    try {
      return new URL(API_BASE).origin;
    } catch {
      return "";
    }
  })();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [file, setFile] = useState(null);

  const { mutate, isPending, isSuccess, isError: isSubmitError } = useMutation({
    mutationFn: postReviews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      setName("");
      setEmail("");
      setComment("");
      setRating(0);
      setFile(null);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !comment || rating === 0) return;
    if (file) {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("comment", comment);
      fd.append("rating", String(rating));
      fd.append("photo", file);
      mutate(fd);
    } else {
      mutate({ name, email, comment, rating });
    }
  }


  return (
    <section className=" py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800">
            What Our Patient Say
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Hear real stories from patients who regained strength, mobility, and
            confidence through our care.
          </p>
        </div>

        {/* Framed box */}
        <div className="rounded-xl  bg-[#E6F6F4] shadow-sm ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Left: Recent Feedbacks */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">
                Recent Feedbacks
              </h3>
              <div className="space-y-4">
                {isLoading && (
                  <div className="text-gray-600">Loading reviews…</div>
                )}
                {isQueryError && (
                  <div className="text-red-600">
                    Failed to load reviews{queryError?.message ? `: ${queryError.message}` : "."}
                  </div>
                )}
                {(Array.isArray(testimonialsData)
                  ? testimonialsData
                  : Array.isArray(testimonialsData?.results)
                  ? testimonialsData.results
                  : []
                ).map((t, idx) => (
                  <div
                    key={idx}
                    className={
                      "flex items-start gap-4 p-4 rounded-lg border border-cyan-100 bg-[#D9F2EF]" +
                      (t.ghost ? " opacity-50" : "")
                    }
                  >
                    <img
                      src={`${
                        t?.photo?.startsWith("/")
                          ? API_ORIGIN + t.photo
                          : t?.photo || ""
                      }`}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/80";
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800">
                          {t.name}
                        </span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < t.rating
                                  ? "text-[#e67e22]"
                                  : "text-gray-300"
                              }
                              fill={i < t.rating ? "#e67e22" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{t.comment}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <button
                      className="px-3 py-1 rounded border disabled:opacity-50"
                      disabled={page === 1 || isLoading}
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                    >
                      Prev
                    </button>
                    <button
                      className="px-3 py-1 rounded border disabled:opacity-50"
                      disabled={
                        isLoading ||
                        ((Array.isArray(testimonialsData?.results)
                          ? testimonialsData.results.length
                          : Array.isArray(testimonialsData)
                          ? testimonialsData.length
                          : 0) < limit)
                      }
                      onClick={() => setPage((p) => p + 1)}
                    >
                      Next
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">Page {page}</div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Per page</label>
                    <select
                      className="border rounded px-2 py-1 text-sm"
                      value={limit}
                      onChange={(e) => {
                        setPage(1);
                        setLimit(Number(e.target.value));
                      }}
                    >
                      {[5, 10, 15, 20].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Add a Review */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Add a Review</h3>

              {/* Rating */}
              <label className="block text-sm text-gray-600 mb-1">
                Add Your Rating
              </label>
              <div className="flex gap-2 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setRating(i + 1)}
                    aria-label={`Rate ${i + 1} star`}
                  >
                    <Star
                      size={18}
                      className={
                        i + 1 <= rating ? "text-[#e67e22]" : "text-gray-400"
                      }
                      fill={i + 1 <= rating ? "#e67e22" : "none"}
                    />
                  </button>
                ))}
              </div>

              {/* Name */}
              <label className="block text-sm text-gray-600 mb-1">Name*</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b rounded-md h-10 px-3 bg-teal-50/40 focus:outline-none focus:ring-2 focus:ring-teal-300"
                placeholder="Your name"
              />

              {/* Email */}
              <label className="block text-sm text-gray-600 mt-3 mb-1">
                Email*
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b rounded-md h-10 px-3 bg-teal-50/40 focus:outline-none focus:ring-2 focus:ring-teal-300"
                placeholder="name@example.com"
              />

              {/* Message */}
              <label className="block text-sm text-gray-600 mt-3 mb-1">
                Write Your Message*
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full border-b rounded-md min-h-[130px] p-3 bg-teal-50/40 focus:outline-none focus:ring-2 focus:ring-teal-300"
                placeholder="Share your experience…"
              />

              {/* Upload */}
              <label className="block text-sm text-gray-600 mt-3 mb-1">
                Media Upload (optional)
              </label>
              <div className="border-b rounded-md bg-teal-50/40 p-3 text-center">
                <input
                  id="fileUpload"
                  type="file"
                  accept="image/jpeg,image/png,image/jpg"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                <label
                  htmlFor="fileUpload"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full border bg-transparent  hover:bg-bg-teal-700 border-2 border-teal-700 cursor-pointer"
                >
                  <Upload size={16} />
                  Browse Files
                </label>
              </div>

              {/* Actions */}
              <form
                onSubmit={handleSubmit}
                className=" items-center gap-3 mt-4"
              >
                <p className="text-sm text-gray-500 mt-2">
                  Only support: .jpeg, .png, and .jpg files.
                </p>
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-5 py-2 my-3 mr-4 rounded-full bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50"
                >
                  {isPending ? "Submitting…" : "Submit Now"}
                </button>
                <button
                  type="button"
                  className="px-5 py-2 rounded-full border hover:bg-gray-50"
                  onClick={() => {
                    setName("");
                    setEmail("");
                    setComment("");
                    setRating(0);
                    setFile(null);
                  }}
                >
                  Cancel
                </button>
               
                {isSuccess && (
                  <div className="mt-2 text-green-700">
                    Thanks! Your review was submitted.
                  </div>
                )}
                {isSubmitError && (
                  <div className="mt-2 text-red-700">
                    Submission failed. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
