import React, { useContext } from "react";
import { CoronaContext } from "../context/CoronaContext";

export const GlobalCoronaInfo = () => {
  const {
    global: { confirmed, recovered, deaths, lastUpdate },
    indonesia,
    formatNum,
  } = useContext(CoronaContext);

  return (
    <section id="global-info">
      <div className="w-4/5 mx-auto">
        <div className="text-center my-10">
          <h1 className="uppercase text-2xl lg:text-4xl font-light mb-4">kawal corona</h1>
          <h3 className="capitalize lg:text-lg">coronavirus global & indonesia live data</h3>
          <h3 className="capitalize lg:text-sm">last update {new Date(lastUpdate).toDateString()}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="corona-card bg-purple-custom">
            <div>
              <h3 className="uppercase text-xs text-white">total positif</h3>
              <span className="font-light text-2xl text-white">{formatNum(confirmed)}</span>
            </div>
            <img src="https://kawalcorona.com/uploads/sad-u6e.png" className="w-12 z-10" alt="corona positif" />
          </div>
          <div className="corona-card bg-green-custom">
            <div>
              <h3 className="uppercase text-xs text-white">total sembuh</h3>
              <span className="font-light text-2xl text-white">{formatNum(recovered)}</span>
            </div>
            <img src="https://kawalcorona.com/uploads/happy-ipM.png" className="w-12 z-10" alt="corona sembuh" />
          </div>
          <div className="corona-card bg-red-custom">
            <div>
              <h3 className="uppercase text-xs text-white">total meninggal</h3>
              <span className="font-light text-2xl text-white">{formatNum(deaths)}</span>
            </div>
            <img src="https://kawalcorona.com/uploads/emoji-LWx.png" className="w-12 z-10" alt="corona meninggal" />
          </div>
          <div className="lg:col-span-3 corona-card bg-orange-custom">
            <div>
              <h3 className="uppercase text-4xl text-white">indonesia</h3>
              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <p className="font-medium text-white capitalize">
                  <span className="text-2xl font-light">{formatNum(indonesia.confirmed)}</span> positif
                </p>
                <p className="font-medium text-white capitalize">
                  <span className="text-2xl font-light">{formatNum(indonesia.recovered)}</span> sembuh
                </p>
                <p className="font-medium text-white capitalize">
                  <span className="text-2xl font-light">{formatNum(indonesia.deaths)}</span> meninggal
                </p>
              </div>
              <p className="font-medium text-white capitalize">
                last update<span className="text-2xl font-light ml-2">{new Date(indonesia.lastUpdate).toDateString()}</span>
              </p>
            </div>
            <img src="https://kawalcorona.com/uploads/indonesia-PZq.png" className="w-12 z-10 hidden sm:block" alt="corona indonesia" />
          </div>
        </div>
      </div>
    </section>
  );
};
