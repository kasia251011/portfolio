import EDU_ICON from "@/assets/icons/art-icon.svg";
import REWARD_ICON from "@/assets/icons/reward-icon.svg";
import DESIGN_ICON from "@/assets/icons/art-icon.svg";
import WORK_ICON from "@/assets/icons/work-icon.svg";
import ExpCard from "@/components/ExpCard";

const ExperienceSection = () => (
  <div className="bg-primary-light pb-20 pt-30">
    <div className="text-center container ">
      <h2 className="mb-7">
        <span className="text-primary">Twój pomysł</span> w dobrych rękach
      </h2>
      <p className="w-1/2 mx-auto ">
        Jakość moich usług jest oparta na pasji połączonej z doświadczeniem i
        wykształceniem{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        <ExpCard
          title="Wykształcenie"
          description="Ukończone studia informatyczne związane z Inżynierią Oprogramowania i UX/UI"
          icon={EDU_ICON}
        ></ExpCard>
        <ExpCard
          title="Wyróżnienia"
          description="Laureatka konkursów programistycznych, gdzie aspekt wizualny oraz UX był szeroko doceniany"
          icon={REWARD_ICON}
        ></ExpCard>
        <ExpCard
          title="Doświadczenie"
          description="Ponad 5 letnie doświadczenie w tworzeniu aplikacji i stron internetowych, dziesiątki realizowanych projektów"
          icon={WORK_ICON}
        ></ExpCard>
        <ExpCard
          title="Design"
          description="Z pasji artystka oraz graficzka, od zawsze związana z estetyką. "
          icon={DESIGN_ICON}
        ></ExpCard>
      </div>
    </div>
  </div>
);

export default ExperienceSection;
