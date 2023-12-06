import React, { useRef, useState } from "react";
import Slider from "react-slick";
import scss from "../home/home.scss";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState({
    imageSrc:
      "https://imgs.stargazete.com/imgsdisk/2023/12/05/17-milyar-dolarlik-yatiri-259.jpg",
    title:
      " 1,7 milyar dolarlık yatırıma işaret etti: Türkiye ile ortaklığımızı güçlendirme konusunda çok istekliyiz",
  });

  const handleMouseOver = (imgSrc, title) => {
    if (activeSlide.imageSrc !== imgSrc && activeSlide.title !== title) {
      setActiveSlide({ imageSrc: imgSrc, title: title });
    }
  };
  return (
    <div>
      <div className="banner">
        <img
          src="https://s0.2mdn.net/dfp/396410/39543530/1701783078312/trt_tabii/970x250.jpg"
          style={{ width: "100%" }}
        />
      </div>
      <div className="slick-slider">
        <div className="slide-wrapper">
          <div className="active-slide">
            <img
              src={activeSlide.imageSrc}
              id="active-slide-img"
              alt="Active Slide"
            />
            <div id="active-slide-title">
              <h3>{activeSlide.title}</h3>
            </div>
          </div>
          <ul className="slide-list">
            <li>
              <a
                onMouseOver={() =>
                  handleMouseOver(
                    "https://imgs.stargazete.com/imgsdisk/2023/12/05/17-milyar-dolarlik-yatiri-259.jpg",
                    "1,7 milyar dolarlık yatırıma işaret etti: Türkiye ile ortaklığımızı güçlendirme konusunda çok istekliyiz"
                  )
                }
              >
                <img
                  src="https://imgs.stargazete.com/imgsdisk/2023/12/05/17-milyar-dolarlik-yatiri-259.jpg"
                  alt="slider1"
                />
                <h3 data-text="1,7 milyar dolarlık yatırıma işaret etti: Türkiye ile ortaklığımızı güçlendirme konusunda çok istekliyiz">
                  1,7 milyar dolarlık yatırım...
                </h3>
              </a>
            </li>
            <li>
              <a
                onMouseOver={() =>
                  handleMouseOver(
                    "https://imgs.stargazete.com/imgsdisk/2023/12/05/cumhurbaskani-erdogan-kat-540.jpg",
                    "Cumhurbaşkanı Erdoğan, Katar'da çağrısını yineledi: Sorumluluk almaya hazırız"
                  )
                }
              >
                <img
                  src="https://imgs.stargazete.com/imgsdisk/2023/12/05/cumhurbaskani-erdogan-kat-540.jpg"
                  alt="slider2"
                />
                <h3 data-text="İsrail'den Han Yunus ve Nuseyrat Mülteci Kampı'na saldırı: En az 50 kişi hayatını kaybetti">
                  Cumhurbaşkanı Erdoğan, Katar'da...
                </h3>
              </a>
            </li>
            <li>
              <a
                onMouseOver={() =>
                  handleMouseOver(
                    "https://imgs.stargazete.com/imgsdisk/2023/12/05/turkiyeden-israile-bir-uy-397.jpg",
                    "Türkiye'den İsrail'e bir uyarı daha: Müsaade etmeyiz"
                  )
                }
              >
                <img
                  src="https://imgs.stargazete.com/imgsdisk/2023/12/05/turkiyeden-israile-bir-uy-397.jpg"
                  alt="slider1"
                />
                <h3 data-text="Türkiye'den İsrail'e bir uyarı daha: Müsaade etmeyiz">
                  Türkiye'den İsrail'e bir...
                </h3>
              </a>
            </li>
            <li>
              <a
                onMouseOver={() =>
                  handleMouseOver(
                    "https://imgs.stargazete.com/imgsdisk/2023/12/05/israilin-kurnaz-nazi-plan-271.jpg",
                    "İsrail'in kurnaz 'Nazi' planı! Katliamı böyle meşrulaştırmaya çalışıyorlar"
                  )
                }
              >
                <img
                  src="https://imgs.stargazete.com/imgsdisk/2023/12/05/israilin-kurnaz-nazi-plan-271.jpg"
                  alt="slider4"
                />
                <h3 data-text="İsrail'in kurnaz 'Nazi'...">
                  İsrail'in kurnaz 'Nazi'...
                </h3>
              </a>
            </li>
            <li>
              <a
                onMouseOver={() =>
                  handleMouseOver(
                    "https://imgs.stargazete.com/imgsdisk/2023/12/05/israil-gazzede-filistinli-899.jpg",
                    "İsrail'den Han Yunus ve Nuseyrat Mülteci Kampı'na saldırı: En az 50 kişi hayatını kaybetti"
                  )
                }
              >
                <img
                  src="https://imgs.stargazete.com/imgsdisk/2023/12/05/israil-gazzede-filistinli-899.jpg"
                  alt="slider5"
                />
                <h3 data-text="İsrail'den Han Yunus...">
                  İsrail'den Han Yunus...
                </h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
