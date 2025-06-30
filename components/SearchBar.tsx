// // import { useEffect } from "react"

// // export default function SearchBar({ searchEngineId }: { searchEngineId: string }) {
// //   useEffect(() => {
// //     if (document.getElementById("gcs-script")) return

// //     const script = document.createElement("script")
// //     script.src = `https://cse.google.com/cse.js?cx=${searchEngineId}`
// //     script.async = true
// //     script.id = "gcs-script"
// //     document.body.appendChild(script)
// //   }, [searchEngineId])

// //   return (
// //     <div className="p-6 bg-white rounded-2xl shadow-xl border border-slate-100 max-w-4xl mx-auto my-8">
// //       <h2 className="text-3xl font-extrabold text-emerald-800 mb-6 text-center">
// //         What are you looking for?
// //       </h2>

// //       {/* This renders BOTH the input field and search results */}
// //       <div className="gcse-search"></div>

// //       <p className="text-sm text-slate-500 mt-8 text-center">
// //         Search powered by Google Programmable Search Engine.
// //       </p>
// //     </div>
// //   )
// // }














import { useEffect } from "react"

export default function SearchBar({ searchEngineId }: { searchEngineId: string }) {
  useEffect(() => {
    if (document.getElementById("gcs-script")) return

    const script = document.createElement("script")
    script.src = `https://cse.google.com/cse.js?cx=${searchEngineId}`
    script.async = true
    script.id = "gcs-script"
    document.body.appendChild(script)
  }, [searchEngineId])

  return (
    <div className="px-6 sm:px-8 lg:px-12 py-8 bg-white rounded-2xl shadow-xl border border-slate-100 max-w-5xl mx-auto my-10">
      <h2 className="text-3xl font-extrabold text-emerald-800 mb-6 text-center">
        What are you looking for?
      </h2>

      {/* Full Google Search (input + results) */}
      <div className="gcse-search"></div>

      <p className="text-sm text-slate-500 mt-10 text-center">
        Search powered by Google Programmable Search Engine.
      </p>
    </div>
  )
}
