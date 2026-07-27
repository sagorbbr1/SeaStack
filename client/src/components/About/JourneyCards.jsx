import { journey } from "./aboutData";
import JourneyCard from "./JourneyCard";

const JourneyCards = () => {
  return (
    <section>
      <h3 className="mb-6 text-2xl font-bold text-slate-900">
        My Journey
      </h3>
<div className="flex flex-col gap-5">
  {journey.map((item, index) => (
    <JourneyCard
      key={item.id}
      item={item}
      index={index}
    />
  ))}
</div>
    </section>
  );
};

export default JourneyCards;