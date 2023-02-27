import React from "react";
import ThreeSixty from "react-360-view";

function ProductView() {
  return (
    <div>
      <div style={{ width: "40%", margin: "30px", position: "relative" }}>
        <ThreeSixty
          amount={36}
          imagePath="https://scaleflex.cloudimg.io/v7/demo/vivo-mobile"
          fileName="product-{index}.jpg"
          autoplay
          loop
        />
      </div>
    </div>
  );
}

export default ProductView;
