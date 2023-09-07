import Reklam from "./Components/Reklam/reklam";
import Category from "./Components/Category/category";
import Last from "./Components/lastSearching/last";
import Main from "./Components/main";
import NavLayout from "./Layouts/NavLayout";
import SwiperSpot from "./Components/swiperProducts/swiper";

export default function Home() {
  return (
    <NavLayout>
      <Reklam />
      <Category />
      <Last />
      <Main />
      {/* <SwiperSpot /> */}
    </NavLayout>
  );
}
