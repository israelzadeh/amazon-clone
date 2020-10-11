import React from "react";
import { Carousel } from "react-bootstrap";

function AmazonCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB406828640_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/AmazonFresh/XCM_Manual_ORIGIN_1265023_1353124_UK_uk_uk_ufg_launch_m4_m5_pn_transition_gw_email_updated_gb_en_3349341_3000x1200_2X_en_GB._CB405295316_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/ZjRlNTlkODIt/ZjRlNTlkODIt-ODkzMWZmZjAt-w3000._CB431866806_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default AmazonCarousel;
