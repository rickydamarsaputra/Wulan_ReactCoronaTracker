import React, { useContext } from "react";
import { CoronaContext } from "../context/CoronaContext";

export const IndoCoronaTable = () => {
  const { indonesiaProvinsi, formatNum } = useContext(CoronaContext);

  return (
    <section id="global-table" className="mt-10">
      <div className="w-4/5 mx-auto bg-white p-10 rounded-lg shadow-sm max-h-screen overflow-scroll">
        <h3 className="uppercase text-center mb-4 text-lg font-light">indonesia corona virus tracker</h3>
        <table className="table-auto w-full text-left overflow-scroll">
          <thead>
            <tr>
              <th className="px-4 py-2 font-medium text-sm uppercase">No</th>
              <th className="px-4 py-2 font-medium text-sm uppercase">Negara</th>
              <th className="px-4 py-2 font-medium text-sm uppercase">Positif</th>
              <th className="px-4 py-2 font-medium text-sm uppercase">Sembuh</th>
              <th className="px-4 py-2 font-medium text-sm uppercase">Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {indonesiaProvinsi.map((provinsi, index) => {
              const { name, recovered, deaths, confirmed } = provinsi;

              return (
                <tr className="hover:bg-gray-100" key={index}>
                  <td className="text-xs border px-4 py-2">{index + 1}</td>
                  <td className="text-xs border px-4 py-2 capitalize">{name}</td>
                  <td className="text-xs border px-4 py-2">
                    <button className="bg-purple-custom text-white rounded-full px-4">{formatNum(confirmed)}</button>
                  </td>
                  <td className="text-xs border px-4 py-2">
                    <button className="bg-green-custom text-white rounded-full px-4">{formatNum(recovered)}</button>
                  </td>
                  <td className="text-xs border px-4 py-2">
                    <button className="bg-red-custom text-white rounded-full px-4">{formatNum(deaths)}</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
