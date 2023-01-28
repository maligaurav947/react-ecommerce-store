import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
function EarlyAcces() {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000, disable: "mobile" });
  });
  return (
    <>
      <section className="mb-10 mt-10 gap-5 p-5">
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-screen">
          <div
            className="relative"
            data-aos="fade-right"
            style={{
              backgroundImage:
                "url(https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/6a0593a1-de9a-43e5-ace5-b2e591835654/nike-just-do-it.jpg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute bottom-14 left-14">
              <p className="text-2xl mb-2">Air Jordan 1 Golf</p>
              <button>Download The Nike App</button>
            </div>
          </div>
          <div
            className="relative"
            data-aos="fade-left"
            style={{
              backgroundImage:
                "url(https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/de59b9e3-f252-469b-a7fb-c3e0043be98b/nike-just-do-it.jpg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute bottom-14 left-14">
              <p className="text-2xl mb-2 text-white">LeBron XX EP</p>
              <button>Download The Nike App</button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default EarlyAcces;
