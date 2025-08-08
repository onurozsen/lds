import FirstSection from "../components/sections/FirstSection";
import FourthSection from "../components/sections/FourthSection";
import SecondSection from "../components/sections/SecondSection";
import ThirdSection from "../components/sections/ThirdSection";

export default function Landing() {
    return (
        <div className="w-full">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
        </div>
    );
}