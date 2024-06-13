"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Send, Sun } from "lucide-react";
import WeatherIcon from "./WeatherIcon";
import { Separator } from "@/components/ui/separator";

const Weather = () => {
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);
  const [pres,setPres] = useState("");
  const [hum,setHum] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${process.env.NEXT_PUBLIC_LOC}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER}`
      );
      const data = await response.json();
      console.log(data);
      setTemp(Math.round(data.main.temp) + "°");
      setPres(data.main.pressure);
      setHum(data.main.humidity);
      setWeather(data.weather[0]);
      setLoading(false);
    };
    fetchWeather();
  }, []);

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row justify-between items-center py-2 h-24">
        <div>
          <CardTitle className="font-semibold text-2xl tracking-wide flex justify-between">
            <p>Thursday</p>
          </CardTitle>
          <CardDescription className="tracking-wide">
            {!loading && weather.description}
          </CardDescription>
        </div>
        <WeatherIcon icon={weather.icon} size={48} />
      </CardHeader>
      <Separator />
      <CardContent className="text-4xl font-bold tracking-wide py-3 h-20 flex items-center justify-center">
        <div>{loading ? <Loader2 className="animate-spin m-auto" size={50} /> : <p className="flex gap-5 items-center">{temp} <span className="text-xs text-neutral-400"> pr: {pres} hu: {hum}</span></p>}</div>
      </CardContent>
      <Separator />
      <CardFooter className="py-3 align-center">
        <p className="hover:underline decoration-dashed underline-offset-4 text-lg font-semibold">
          Dharamshala
        </p>
      </CardFooter>
    </Card>
  );
};
export default Weather;
