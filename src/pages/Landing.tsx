import FifthSection from "../components/sections/FifthSection";
import FirstSection from "../components/sections/FirstSection";
import FourthSection from "../components/sections/FourthSection";
import SecondSection from "../components/sections/SecondSection";
import SixthSection from "../components/sections/SixthSection";
import ThirdSection from "../components/sections/ThirdSection";

export default function Landing() {
    return (
        <div className="w-full">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FifthSection />
            <SixthSection />
            <FourthSection />
        </div>
    );
}