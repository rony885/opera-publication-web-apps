import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const data = [
  { count: 10, label: "বইয়ের সংগ্রহ", suffix: "M+" },
  { count: 50, label: "প্রাপ্ত সম্মাননা", suffix: "+" },
  { count: 100, label: "সম্মানিত লেখক", suffix: "k+" },
  { count: 110, label: "দলের সদস্য", suffix: "+" },
  { count: 500, label: "পাঠক", suffix: "+" },
];

const Count = () => {
  function toBanglaNumber(num) {
    const bn = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num.toString().replace(/\d/g, (d) => bn[d]);
  }

  const [counts, setCounts] = useState(data.map(() => 0));
  const started = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.querySelector(".counter-layout1");
      if (
        !el ||
        started.current ||
        el.getBoundingClientRect().top > window.innerHeight
      )
        return;

      started.current = true;

      data.forEach((d, i) => {
        let v = 0;
        const inc = d.count / 200;

        const t = setInterval(() => {
          v += inc;
          if (v >= d.count) clearInterval(t);
          setCounts((p) => ((p[i] = Math.min(Math.floor(v), d.count)), [...p]));
        }, 20);
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Wrapper>
      <section className="counter-layout1 bg-theme">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="counter-style1">
              {data.map((item, i) => (
                <div
                  className="media-inner wow animate__fadeInUp"
                  data-wow-delay="0.35s"
                  key={i}
                >
                  <div className="media-counter text-center">
                    <div className="media-count">
                      {/* <h2
                      className="media-title counter-number fw-normal"
                      data-count="10"
                    >
                      ১০
                    </h2> */}
                      <h2 className="media-title counter-number fw-normal">
                        {toBanglaNumber(counts[i])}
                      </h2>

                      <span className="count-icon fw-normal">
                        {item.suffix}
                      </span>
                    </div>

                    <p className="media-text fw-normal">{item.label}</p>
                  </div>

                  <span className="counter-line">
                    <img
                      className="icon"
                      src="/assets/img/shapes/round-ring.svg"
                      alt="line shape"
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="counter-layout1 bg-theme">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="counter-style1">
              <div
                className="media-inner wow animate__fadeInUp"
                data-wow-delay="0.35s"
              >
                <div className="media-counter text-center">
                  <div className="media-count">
                    <h2
                      className="media-title counter-number fw-normal"
                      data-count="10"
                    >
                      ১০
                    </h2>
                    <span className="count-icon fw-normal">M+</span>
                  </div>
                  <p className="media-text fw-normal">বইয়ের সংগ্রহ</p>
                </div>
                <span className="counter-line">
                  <img
                    className="icon"
                    src="/assets/img/shapes/round-ring.svg"
                    alt="line shape"
                  />
                </span>
              </div>
              <div
                className="media-inner wow animate__fadeInUp"
                data-wow-delay="0.35s"
              >
                <div className="media-counter text-center">
                  <div className="media-count">
                    <h2
                      className="media-title counter-number fw-normal"
                      data-count="50"
                    >
                      ৫০
                    </h2>
                    <span className="count-icon fw-normal">+</span>
                  </div>
                  <p className="media-text fw-normal">প্রাপ্ত সম্মাননা</p>
                </div>
                <span className="counter-line">
                  <img
                    className="icon"
                    src="/assets/img/shapes/round-ring.svg"
                    alt="line shape"
                  />
                </span>
              </div>
              <div
                className="media-inner wow animate__fadeInUp"
                data-wow-delay="0.35s"
              >
                <div className="media-counter text-center">
                  <div className="media-count">
                    <h2
                      className="media-title counter-number fw-normal"
                      data-count="100"
                    >
                      ১০০
                    </h2>
                    <span className="count-icon fw-normal">k+</span>
                  </div>
                  <p className="media-text fw-normal">সম্মানিত লেখক</p>
                </div>
                <span className="counter-line">
                  <img
                    className="icon"
                    src="/assets/img/shapes/round-ring.svg"
                    alt="line shape"
                  />
                </span>
              </div>
              <div
                className="media-inner wow animate__fadeInUp"
                data-wow-delay="0.35s"
              >
                <div className="media-counter text-center">
                  <div className="media-count">
                    <h2
                      className="media-title counter-number fw-normal"
                      data-count="110"
                    >
                      ১১০
                    </h2>
                    <span className="count-icon fw-normal">+</span>
                  </div>
                  <p className="media-text fw-normal">দলের সদস্য</p>
                </div>
                <span className="counter-line">
                  <img
                    className="icon"
                    src="/assets/img/shapes/round-ring.svg"
                    alt="line shape"
                  />
                </span>
              </div>
              <div
                className="media-inner wow animate__fadeInUp"
                data-wow-delay="0.35s"
              >
                <div className="media-counter text-center">
                  <div className="media-count">
                    <h2
                      className="media-title counter-number fw-normal"
                      data-count="500"
                    >
                      ৫০০
                    </h2>
                    <span className="count-icon fw-normal">k+</span>
                  </div>

                  <p className="media-text fw-normal">পাঠক</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .media-count {
    text-align: center;
    align-items: center;
  }

  .counter-number {
    font-size: 48px !important;
    line-height: 1;
    font-weight: 400;
    margin: 0;
  }

  .count-icon {
    font-size: 30px;
  }
`;

export default Count;
