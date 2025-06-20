
// // components/DateTimeLocationWeather.tsx
// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { Clock, Calendar, MapPin, Cloud, Sun, CloudRain, CloudSnow, Zap } from "lucide-react"

// export default function DateTimeLocationWeather() {
//   const [time, setTime] = useState("")
//   const [date, setDate] = useState("")
//   const [location, setLocation] = useState("")
//   const [weather, setWeather] = useState({ temp: "", condition: "", icon: <Cloud /> })
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     // Update time every second
//     const timer = setInterval(() => {
//       const now = new Date()
//       setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }))
//       setDate(now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
//     }, 1000)

//     // Get location and weather
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           try {
//             const { latitude, longitude } = position.coords
//             // Get location name
//             const locationRes = await fetch(
//               `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
//             )
//             const locationData = await locationRes.json()
//             setLocation(`${locationData.city || locationData.locality}, ${locationData.countryName}`)
            
//             // Get weather (using OpenWeatherMap API - you'll need an API key)
//             const weatherRes = await fetch(
//               `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY&units=metric`
//             )
//             const weatherData = await weatherRes.json()
            
//             const weatherIcon = getWeatherIcon(weatherData.weather[0].main)
//             setWeather({
//               temp: `${Math.round(weatherData.main.temp)}°C`,
//               condition: weatherData.weather[0].main,
//               icon: weatherIcon
//             })
//           } catch (error) {
//             console.error("Error fetching location/weather:", error)
//             setLocation("Location unavailable")
//           } finally {
//             setIsLoading(false)
//           }
//         },
//         (error) => {
//           console.error("Geolocation error:", error)
//           setLocation("Location access denied")
//           setIsLoading(false)
//         }
//       )
//     } else {
//       setLocation("Geolocation not supported")
//       setIsLoading(false)
//     }

//     return () => clearInterval(timer)
//   }, [])

//   const getWeatherIcon = (condition: string) => {
//     switch (condition.toLowerCase()) {
//       case 'clear':
//         return <Sun className="w-5 h-5 text-yellow-400" />
//       case 'rain':
//         return <CloudRain className="w-5 h-5 text-blue-400" />
//       case 'snow':
//         return <CloudSnow className="w-5 h-5 text-blue-200" />
//       case 'thunderstorm':
//         return <Zap className="w-5 h-5 text-yellow-500" />
//       default:
//         return <Cloud className="w-5 h-5 text-gray-400" />
//     }
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50"
//     >
//       {isLoading ? (
//         <div className="flex items-center justify-center space-x-2">
//           <div className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse"></div>
//           <span className="text-slate-300">Detecting location...</span>
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 gap-4">
//           {/* Time and Date */}
//           <div className="space-y-2">
//             <div className="flex items-center gap-2 text-emerald-400">
//               <Clock className="w-4 h-4" />
//               <span className="text-sm font-medium">Local Time</span>
//             </div>
//             <p className="text-white font-mono">{time}</p>
            
//             <div className="flex items-center gap-2 text-emerald-400 mt-3">
//               <Calendar className="w-4 h-4" />
//               <span className="text-sm font-medium">Date</span>
//             </div>
//             <p className="text-white text-sm">{date}</p>
//           </div>

//           {/* Location and Weather */}
//           <div className="space-y-2">
//             <div className="flex items-center gap-2 text-emerald-400">
//               <MapPin className="w-4 h-4" />
//               <span className="text-sm font-medium">Location</span>
//             </div>
//             <p className="text-white text-sm truncate">{location}</p>
            
//             <div className="flex items-center gap-2 text-emerald-400 mt-3">
//               {weather.icon}
//               <span className="text-sm font-medium">Weather</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-white">{weather.temp}</span>
//               <span className="text-slate-300 text-xs">• {weather.condition}</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </motion.div>
//   )
// }























// "use client"
// import { useState, useEffect } from "react"
// import { Clock, Calendar, MapPin, Cloud, Sun, CloudRain, CloudSnow, Zap } from "lucide-react"

// export default function DateTimeLocationWeather() {
//   const [time, setTime] = useState("Loading...")
//   const [date, setDate] = useState("Loading...")
//   const [location, setLocation] = useState("Detecting...")
//   const [weather, setWeather] = useState({ 
//     temp: "--°C", 
//     condition: "Unknown", 
//     icon: <Cloud className="w-5 h-5 text-gray-400" /> 
//   })

//   useEffect(() => {
//     // Time/Date updater
//     const updateTime = () => {
//       const now = new Date()
//       setTime(now.toLocaleTimeString('en-US', { 
//         hour: 'numeric', 
//         minute: '2-digit', 
//         hour12: true 
//       }))
//       setDate(now.toLocaleDateString('en-US', { 
//         weekday: 'long', 
//         year: 'numeric', 
//         month: 'long', 
//         day: 'numeric' 
//       }))
//     }
//     updateTime()
//     const timer = setInterval(updateTime, 1000)

//     // Location detection
//     const detectLocation = async () => {
//       try {
//         // Try precise geolocation first
//         const position = await new Promise<GeolocationPosition>((resolve, reject) => {
//           navigator.geolocation.getCurrentPosition(resolve, reject, {
//             enableHighAccuracy: true,
//             timeout: 5000
//           })
//         })

//         const { latitude, longitude } = position.coords
//         const locationRes = await fetch(
//           `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
//         )
//         const locationData = await locationRes.json()
//         setLocation(`${locationData.city || locationData.locality}, ${locationData.countryName}`)

//         // Get weather
//         try {
//           const weatherRes = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`
//           )
//           const weatherData = await weatherRes.json()
//           setWeather({
//             temp: `${Math.round(weatherData.main.temp)}°C`,
//             condition: weatherData.weather[0].main,
//             icon: getWeatherIcon(weatherData.weather[0].main)
//           })
//         } catch (weatherError) {
//           console.error("Weather fetch failed:", weatherError)
//         }

//       } catch (geoError) {
//         console.error("Precise location failed, falling back to IP:", geoError)
//         // Fallback to IP-based location
//         try {
//           const ipRes = await fetch('https://ipapi.co/json/')
//           const ipData = await ipRes.json()
//           setLocation(`${ipData.city || 'Unknown'}, ${ipData.country_name || 'Unknown'}`)
//         } catch (ipError) {
//           console.error("IP location failed:", ipError)
//           setLocation("Location services disabled")
//         }
//       }
//     }

//     detectLocation()

//     return () => clearInterval(timer)
//   }, [])

//   const getWeatherIcon = (condition: string) => {
//     switch (condition.toLowerCase()) {
//       case 'clear': return <Sun className="w-5 h-5 text-yellow-400" />
//       case 'rain': return <CloudRain className="w-5 h-5 text-blue-400" />
//       case 'snow': return <CloudSnow className="w-5 h-5 text-blue-200" />
//       case 'thunderstorm': return <Zap className="w-5 h-5 text-yellow-500" />
//       default: return <Cloud className="w-5 h-5 text-gray-400" />
//     }
//   }

//   return (
//     <div className="flex flex-wrap items-center justify-between gap-6 text-sm">
//       {/* Time */}
//       <div className="flex items-center gap-3">
//         <Clock className="w-5 h-5 text-emerald-400" />
//         <div>
//           <p className="text-slate-400">Time</p>
//           <p className="text-white">{time}</p>
//         </div>
//       </div>

//       {/* Date */}
//       <div className="flex items-center gap-3">
//         <Calendar className="w-5 h-5 text-emerald-400" />
//         <div>
//           <p className="text-slate-400">Date</p>
//           <p className="text-white">{date}</p>
//         </div>
//       </div>

//       {/* Location */}
//       <div className="flex items-center gap-3 min-w-[200px]">
//         <MapPin className="w-5 h-5 text-emerald-400" />
//         <div>
//           <p className="text-slate-400">Location</p>
//           <p className="text-white truncate">{location}</p>
//         </div>
//       </div>

//       {/* Weather */}
//       <div className="flex items-center gap-3">
//         {weather.icon}
//         <div>
//           <p className="text-slate-400">Weather</p>
//           <p className="text-white">
//             {weather.temp} • {weather.condition}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }





















// // components/DateTimeLocationWeather.tsx
// "use client"
// import { useState, useEffect } from "react"
// import { Clock, Calendar, MapPin, Cloud, Sun, CloudRain, CloudSnow, Zap } from "lucide-react"

// export default function DateTimeLocationWeather() {
//   const [time, setTime] = useState("Loading...")
//   const [date, setDate] = useState("Loading...")
//   const [location, setLocation] = useState("Detecting...")
//   const [weather, setWeather] = useState({ 
//     temp: "--°C", 
//     condition: "Loading...", 
//     icon: <Cloud className="w-5 h-5 text-gray-400" /> 
//   })

//   useEffect(() => {
//     // Time/Date updater
//     const updateTime = () => {
//       const now = new Date()
//       setTime(now.toLocaleTimeString('en-US', { 
//         hour: 'numeric', 
//         minute: '2-digit', 
//         hour12: true 
//       }))
//       setDate(now.toLocaleDateString('en-US', { 
//         weekday: 'long', 
//         year: 'numeric', 
//         month: 'long', 
//         day: 'numeric' 
//       }))
//     }
//     updateTime()
//     const timer = setInterval(updateTime, 1000)

//     // Location and weather detection
//     const detectLocationAndWeather = async () => {
//       try {
//         // 1. Get approximate location via IP-API
//         const ipRes = await fetch('http://ip-api.com/json/?fields=country,city,lat,lon')
//         const ipData = await ipRes.json()
        
//         if (ipData.city && ipData.country) {
//           setLocation(`${ipData.city}, ${ipData.country}`)
          
//           // 2. Get weather if coordinates available
//           if (ipData.lat && ipData.lon) {
//             try {
//               const weatherRes = await fetch(
//                 `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHERAPI_KEY}&q=${ipData.lat},${ipData.lon}`
//               )
//               const weatherData = await weatherRes.json()
              
//               setWeather({
//                 temp: `${Math.round(weatherData.current.temp_c)}°C`,
//                 condition: weatherData.current.condition.text,
//                 icon: getWeatherIcon(weatherData.current.condition.code)
//               })
//             } catch (weatherError) {
//               console.error("Weather fetch failed:", weatherError)
//               setWeather({
//                 temp: "Weather unavailable",
//                 condition: "Enable API key",
//                 icon: <Cloud className="w-5 h-5 text-gray-400" />
//               })
//             }
//           }
//         }
//       } catch (ipError) {
//         console.error("IP location failed:", ipError)
//         setLocation("Location services disabled")
//         setWeather({
//           temp: "Enable GPS for weather",
//           condition: "Location only",
//           icon: <MapPin className="w-5 h-5 text-blue-400" />
//         })
//       }
//     }

//     detectLocationAndWeather()

//     return () => clearInterval(timer)
//   }, [])

//   const getWeatherIcon = (code: number) => {
//     // WeatherAPI.com condition codes: https://www.weatherapi.com/docs/weather_conditions.json
//     if (code === 1000) return <Sun className="w-5 h-5 text-yellow-400" />
//     if (code >= 1063 && code <= 1201) return <CloudRain className="w-5 h-5 text-blue-400" />
//     if (code >= 1210 && code <= 1225) return <CloudSnow className="w-5 h-5 text-blue-200" />
//     if (code >= 1273 && code <= 1276) return <Zap className="w-5 h-5 text-yellow-500" />
//     return <Cloud className="w-5 h-5 text-gray-400" />
//   }

//   return (
//     <div className="flex flex-wrap items-center justify-between gap-6 text-sm">
//       {/* Time */}
//       <div className="flex items-center gap-3">
//         <Clock className="w-5 h-5 text-emerald-400" />
//         <div>
//           <p className="text-slate-400">Time</p>
//           <p className="text-white">{time}</p>
//         </div>
//       </div>

//       {/* Date */}
//       <div className="flex items-center gap-3">
//         <Calendar className="w-5 h-5 text-emerald-400" />
//         <div>
//           <p className="text-slate-400">Date</p>
//           <p className="text-white">{date}</p>
//         </div>
//       </div>

//       {/* Location */}
//       <div className="flex items-center gap-3 min-w-[200px]">
//         <MapPin className="w-5 h-5 text-emerald-400" />
//         <div>
//           <p className="text-slate-400">Location</p>
//           <p className="text-white truncate">{location}</p>
//         </div>
//       </div>

//       {/* Weather */}
//       <div className="flex items-center gap-3">
//         {weather.icon}
//         <div>
//           <p className="text-slate-400">Weather</p>
//           <p className="text-white">
//             {weather.temp} • {weather.condition}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }


























// components/DateTimeLocationWeather.tsx
"use client"
import { useState, useEffect } from "react"
import { Clock, Calendar, MapPin, Cloud, Sun, CloudRain, CloudSnow, Zap } from "lucide-react"

export default function DateTimeLocationWeather() {
  const [time, setTime] = useState("Loading...")
  const [date, setDate] = useState("Loading...")
  const [location, setLocation] = useState("Detecting...")
  const [weather, setWeather] = useState({ 
    temp: "--°C", 
    condition: "Loading...", 
    icon: <Cloud className="w-5 h-5 text-gray-400" /> 
  })

  useEffect(() => {
    // Time/Date updater
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
      }))
      setDate(now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)

    // Location and weather detection
    const detectLocationAndWeather = async () => {
      try {
        // 1. Get approximate location via IP-API (no key)
        const ipRes = await fetch('https://ipapi.co/json/')
        const ipData = await ipRes.json()
        
        if (ipData.city && ipData.country_name) {
          setLocation(`${ipData.city}, ${ipData.country_name}`)
          
          // 2. Get weather from Open-Meteo (no key)
          if (ipData.latitude && ipData.longitude) {
            try {
              const weatherRes = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${ipData.latitude}&longitude=${ipData.longitude}&current_weather=true`
              )
              const weatherData = await weatherRes.json()
              
              setWeather({
                temp: `${Math.round(weatherData.current_weather.temperature)}°C`,
                condition: getWeatherCondition(weatherData.current_weather.weathercode),
                icon: getWeatherIcon(weatherData.current_weather.weathercode)
              })
            } catch (weatherError) {
              console.error("Weather fetch failed:", weatherError)
              setWeather({
                temp: "Weather unavailable",
                condition: "Try refreshing",
                icon: <Cloud className="w-5 h-5 text-gray-400" />
              })
            }
          }
        }
      } catch (ipError) {
        console.error("IP location failed:", ipError)
        setLocation("Approximate location only")
        setWeather({
          temp: "--°C",
          condition: "Location only",
          icon: <MapPin className="w-5 h-5 text-blue-400" />
        })
      }
    }

    detectLocationAndWeather()
    return () => clearInterval(timer)
  }, [])

  // Open-Meteo weather codes: https://open-meteo.com/en/docs
  const getWeatherCondition = (code: number) => {
    const conditions: Record<number, string> = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Freezing fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      56: "Light freezing drizzle",
      57: "Dense freezing drizzle",
      61: "Slight rain",
      63: "Moderate rain",
      65: "Heavy rain",
      66: "Light freezing rain",
      67: "Heavy freezing rain",
      71: "Slight snow",
      73: "Moderate snow",
      75: "Heavy snow",
      77: "Snow grains",
      80: "Slight rain showers",
      81: "Moderate rain showers",
      82: "Violent rain showers",
      85: "Slight snow showers",
      86: "Heavy snow showers",
      95: "Thunderstorm",
      96: "Thunderstorm with hail",
      99: "Heavy thunderstorm with hail"
    }
    return conditions[code] || "Unknown weather"
  }

  const getWeatherIcon = (code: number) => {
    // Clear
    if (code === 0) return <Sun className="w-5 h-5 text-yellow-400" />
    // Cloudy
    if (code >= 1 && code <= 3) return <Cloud className="w-5 h-5 text-gray-400" />
    // Rain/Fog
    if ((code >= 45 && code <= 57) || (code >= 61 && code <= 67) || (code >= 80 && code <= 82)) 
      return <CloudRain className="w-5 h-5 text-blue-400" />
    // Snow
    if (code >= 71 && code <= 77 || code >= 85 && code <= 86) 
      return <CloudSnow className="w-5 h-5 text-blue-200" />
    // Thunder
    if (code >= 95 && code <= 99) return <Zap className="w-5 h-5 text-yellow-500" />
    // Default
    return <Cloud className="w-5 h-5 text-gray-400" />
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 text-sm">
      {/* Time */}
      <div className="flex items-center gap-3">
        <Clock className="w-5 h-5 text-emerald-400" />
        <div>
          <p className="text-slate-400">Time</p>
          <p className="text-white">{time}</p>
        </div>
      </div>

      {/* Date */}
      <div className="flex items-center gap-3">
        <Calendar className="w-5 h-5 text-emerald-400" />
        <div>
          <p className="text-slate-400">Date</p>
          <p className="text-white">{date}</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-3 min-w-[200px]">
        <MapPin className="w-5 h-5 text-emerald-400" />
        <div>
          <p className="text-slate-400">Location</p>
          <p className="text-white truncate">{location}</p>
        </div>
      </div>

      {/* Weather */}
      <div className="flex items-center gap-3">
        {weather.icon}
        <div>
          <p className="text-slate-400">Weather</p>
          <p className="text-white">
            {weather.temp} • {weather.condition}
          </p>
        </div>
      </div>
    </div>
  )
}