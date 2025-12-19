import Header from "../Header";
import TestimonialSlider from "./TestimonialSlider.jsx";
import Treatments from "./Treatments.jsx";
// import Treatments from "./Treatments.jsx";
import WhyChooseUs from "./WhyChooseUs.js";
import Working from "./Working";

export default function Home() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div>
        <Working></Working>
      </div>
      <div>
        <Treatments></Treatments>
      </div>
      <div>
        <WhyChooseUs></WhyChooseUs>
      </div>
      <div>
        <TestimonialSlider></TestimonialSlider>
      </div>
    </>
  );
}
