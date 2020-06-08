import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CoronaContext = createContext();

export const CoronaContextProvider = ({ children }) => {
  const API_URL = "https://covid19.mathdro.id/api";
  const [global, setGlobal] = useState({});
  const [indonesia, setIndonesia] = useState({});
  const [globalCountries, setGlobalCountries] = useState([]);
  const [indonesiaProvinsi, setIndonesiaProvinsi] = useState([]);
  const formatNum = number => new Intl.NumberFormat("en-IN").format(number);

  useEffect(() => {
    axios.get(API_URL).then(async response => {
      const { confirmed, recovered, deaths, lastUpdate } = await response.data;
      setGlobal({
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
        lastUpdate: lastUpdate,
      });
    });

    axios.get(API_URL + "/countries/indonesia").then(async response => {
      const { confirmed, recovered, deaths, lastUpdate } = await response.data;
      setIndonesia({
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
        lastUpdate: lastUpdate,
      });
    });

    axios.get("https://api.kawalcorona.com/").then(async response => {
      const fetchCountries = response.data.map(country => {
        const { Country_Region, Confirmed, Deaths, Recovered } = country.attributes;
        return { name: Country_Region, confirmed: Confirmed, recovered: Recovered, deaths: Deaths };
      });
      setGlobalCountries(fetchCountries);
    });

    axios.get("https://indonesia-covid-19.mathdro.id/api/provinsi").then(async response => {
      const Allprovinsi = await response.data.data.map(provi => {
        const { provinsi, kasusPosi, kasusSemb, kasusMeni } = provi;
        return { name: provinsi, confirmed: kasusPosi, recovered: kasusSemb, deaths: kasusMeni };
      });
      setIndonesiaProvinsi(Allprovinsi);
    });
  }, []);

  return <CoronaContext.Provider value={{ global, indonesia, globalCountries, indonesiaProvinsi, formatNum }}>{children}</CoronaContext.Provider>;
};
