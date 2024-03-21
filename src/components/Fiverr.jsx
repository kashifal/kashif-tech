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
          href="https://www.fiverr.com/mohamed_nafeh"
          rel="nofollow"
          target="_blank"
          style={{ display: "inline-block;" }}
        >
          <div
            class="fiverr-seller-content"
            id="fiverr-seller-widget-content-70a8c8c7-6eec-42bb-923b-c29bf99f3373"
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
              I am Nafeh, a highly skilled Frontend Developer with expertise in
              React, Vue, and Tailwind CSS. With a passion for creating seamless
              and visually appealing user experiences, I have honed my skills to
              deliver cutting-edge web applications that leave a lasting
              impression. In my career, I've had the privilege of working on a
              diverse range of projects, from dynamic e-commerce platforms to
              interactive data visualization tools. My proficiency in React and
              Vue allows me to build responsive and performant web applications
              that engage users and keep them coming back for more.{" "}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Fiverr;
