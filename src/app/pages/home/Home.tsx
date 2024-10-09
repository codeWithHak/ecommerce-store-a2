import Footer from "@/app/components/Footer";
import Categories from "./Categories";
import Hero from "./Hero";
import NewArrivals from "./NewArrivals";
import Testimonials from "./Testimonials";
import TopSelling from "./TopSelling";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <TopSelling />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
}
