import React from "react";

export const Header = () => {
  return (
    <header id="header" className="bg-white py-4">
      <div className="w-4/5 mx-auto flex justify-between items-center">
        <div>
          <a href="">
            <img src="https://kawalcorona.com/uploads/logo-ehi.png" className="w-40" alt="kawalcorona logo" />
          </a>
        </div>
        <div className="hidden lg:flex space-x-4">
          <ul className="flex divide-x text-center">
            <li>
              <a href="" className="corona-link">
                <i className="fas fa-home mr-2"></i>dashboard
              </a>
            </li>
            <li>
              <a href="" className="corona-link">
                <i className="fab fa-android mr-2"></i>sekitarkita.id
              </a>
            </li>
            <li>
              <a href="" className="corona-link">
                <i className="fas fa-phone-alt mr-2"></i>hotline
              </a>
            </li>
            <li>
              <a href="" className="corona-link">
                <i className="fas fa-terminal mr-2"></i>api fordevelopers
              </a>
            </li>
            <li>
              <a href="" className="corona-link">
                <i className="far fa-envelope mr-2"></i>kontak
              </a>
            </li>
          </ul>
          <button className="text-gray-700 focus:outline-none">
            <i className="fas fa-compress"></i>
          </button>
        </div>
      </div>
    </header>
  );
};
