import React, { useEffect, useState } from "react";
import scss from "../../component/header/header.scss";
import logo from "../../img/logostar.png";
import LastMinute from "../minute/LastMinute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return (
    <header>
      <div className="header-container">
        <div className="wrapper-flex">
          <div className="container text-center">
            <div className="row">
              <div className="col header-left">
                <h6>
                  İSTANBUL <span> 12°C / 10°C</span>
                </h6>
                <p>Parçalı bulutlu, güneşli</p>
              </div>
              <div className="col">
                <div className="logo">
                  <img src={logo} alt="star-logo" />
                  <p>5 Aralık 2023 Salı / 23 CemaziyelEvvel 1445</p>
                </div>
              </div>
              <div className="col header-right">
                <div
                  className={`theme-modes ${isNightMode ? "night-mode" : ""}`}
                >
                  <button className="theme-mode" onClick={toggleNightMode}>
                    <FontAwesomeIcon
                      icon={isNightMode ? faSun : faMoon}
                      className="me-1"
                    />
                    {isNightMode ? "Gündüz Modu" : "Gece Modu"}
                  </button>
                </div>
                <div>
                  <h6>
                    İSTANBUL <span>{`${hours}:${minutes}:${seconds}`}</span>
                  </h6>
                  <p>Öğle kalan süre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-sub">
          <ul>
            <li>SON DAKİKA</li>
            <li>GÜNCEL</li>
            <li>DÜNYA</li>
            <li>EKONOMİ</li>
            <li>SPOR</li>
            <li>YAŞAM</li>
            <li>BİLİM-TEKNOLOJİ</li>
            <li>AÇIK GÖRÜŞ</li>
            <li>YAZARLAR</li>
            <li>SEYAHAT</li>
          </ul>
        </div>
      </div>
      <div className="header-widgat">
        <div className="widgat-body">
          <div className="finance">
            <ul>
              <div className="d-flex">
                <li>
                  DOLAR<span style={{ fontWeight: "bold" }}>28,9144</span>
                </li>
              </div>
              <div className="d-flex">
                <li>
                  EURO<span style={{ fontWeight: "bold" }}>31,2544</span>
                </li>
              </div>
              <div className="d-flex">
                <li>
                  ALTIN<span style={{ fontWeight: "bold" }}>1884,40</span>
                </li>
              </div>
            </ul>
          </div>
          <div className="social">
            <ul class="agenda-right">
              <li>
                <a href="#">
                  <i class="fas fa-images"></i>FOTO GALERİ
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="far fa-play-circle"></i>VİDEO GALERİ
                </a>
              </li>
              <li className="live-broadcast">
                <a href="#">
                  <i className="fas fa-tv"></i>CANLI YAYIN
                </a>
              </li>
              <li className="social">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="social">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="social">
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-search"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LastMinute />
    </header>
  );
}
