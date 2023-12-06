import React from "react";
import "./minute.scss";
import Slider from "react-slick";

export default function LastMinute() {
  return (
    <div className="breaking-news">
      <div className="last-minute-title">
        <h3
          style={{
            fontSize: "16px",
            fontWeight: "bolder",
            color: "white",
            paddingRight: "20px",
            borderRight: "1px solid #fff",
            marginRight: "20px",
          }}
        >
          Son<br></br> DAKİKA
        </h3>
      </div>
      <div className="minute-slider">
        <div className="ticker-container">
          <div className="ticker-item">
            <div>
              <div className="time-box">
                <div
                  style={{
                    width: "44px",
                    height: "20px",
                    backgroundColor: "#fff100",
                    marginRight: "6px",
                  }}
                >
                  <p
                    style={{
                      color: "black",
                      fontSize: "12px",
                      padding: "5px",
                      marginBottom: "0",
                      fontWeight: "bold",
                    }}
                  >
                    05:46
                  </p>
                </div>
              </div>
              <p className="news-title">
              Kırmızı et sektörüne inceleme başlatıldı
              </p>
            </div>
          </div>
          <div className="ticker-item">
            <div>
              <div className="time-box">
                <div
                  style={{
                    width: "44px",
                    height: "20px",
                    backgroundColor: "#fff100",
                    marginRight: "6px",
                  }}
                >
                  <p
                    style={{
                      color: "black",
                      fontSize: "12px",
                      padding: "5px",
                      marginBottom: "0",
                      fontWeight: "bold",
                    }}
                  >
                    20:06
                  </p>
                </div>
              </div>
              <p className="news-title">
                Ankara'da kritik zirve! Alınan kararları Cumhurbaşkanı Erdoğan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
