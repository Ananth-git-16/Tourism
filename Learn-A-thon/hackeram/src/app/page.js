import Image from "next/image";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Space from "./Space.jsx";
import AlllProfile from "./AllProfile.jsx";
import OurTeam from "./OurTeam.jsx";
import Footer from "./Footer.jsx";
import NinjaHacks from "./NinjaHacks.jsx";
export const metadata = {
  title: "NINJA HACKS",
  description: "Welcome to the Ninja Hacks homepage!",
};
export default function Home() {
  return (
    <>
      <Header></Header>
      <Space></Space>
      <Content></Content>
      <NinjaHacks></NinjaHacks>
      <OurTeam></OurTeam>
      <AlllProfile></AlllProfile>
      <Footer></Footer>
    </>
    
  );
}
