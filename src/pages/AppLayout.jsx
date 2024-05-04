import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import LeftSideBar from "../ui/LeftSideBar";
import RightSideBox from "../ui/RightSideBox";
import Container from "../ui/Container";

function AppLayout() {
  return (
    <div className="font-serif h-screen">
      <Header />
      <div className="flex flex-row">
        <LeftSideBar />
        <Container>
          <Outlet />
        </Container>
        <RightSideBox />
      </div>
      <Footer />
    </div>
  );
}
export default AppLayout;
