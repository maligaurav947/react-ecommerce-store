import React from "react";

function EarlyAcces() {
  return (
    <>
      <section className="">
        <h3 className="pl-5 text-5xl">Nike App Early Access</h3>
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-5 h-screen">
          <div
            className="relative"
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
