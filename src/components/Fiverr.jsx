import React from "react";

const Fiverr = () => {
  return (
    <div className="p-6 bg-white rounded-lg" id="fiverr">
      <div className="font-sans k text-3xl font-black py-6">
        Level 2 Seller on fiverr
      </div>
      <div
        itemscope
        itemtype="http://schema.org/Person"
        class="fiverr-seller-widget"
        style={{ display: "inline-block;" }}
      >
        <a
          itemprop="url"
          href="https://www.fiverr.com/waleedsulehria5"
          rel="nofollow"
          target="_blank"
          style={{ display: "inline-block;" }}
        >
          <div
            class="fiverr-seller-content"
            id="fiverr-seller-widget-content-f28e1d01-3e1d-4e78-845b-556d22b97f47"
            itemprop="contentURL"
            style={{ display: "none" }}
          ></div>
          <div id="fiverr-widget-seller-data" style={{ display: "none" }}>
            <div itemprop="name">waleedsulehria5</div>
            <div itemscope itemtype="http://schema.org/Organization">
              <span itemprop="name">Fiverr</span>
            </div>
            <div itemprop="jobtitle">Seller</div>
            <div itemprop="description">
              I am Frontend developer, having skills in Vue ⭐⭐⭐⭐⭐, Pinia,
              TailwindCSS, ⭐⭐⭐⭐⭐ HTML5, CSS3, React , Next, Nuxt and Figma
              ⭐⭐⭐⭐⭐. I am profesional designer passionate to become
              Frontend Master. ⭐⭐⭐⭐⭐ , vue js Tailwind CSS, Vuetify , HTML
              5 , CSS 3 , Prototyping, Figma .{" "}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Fiverr;
