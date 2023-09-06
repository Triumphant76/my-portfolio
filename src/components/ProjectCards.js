export default function ProjectCards(props) {
  return (
    <section className="p-4 w-full text-sm text-left md:text-base md:w-1/2 hover:cursor-pointer hover:opacity-80">
      <div className="cards p-6 shadow-2xl h-[34rem] md:h-full w-full md:flex rounded-3xl bg-darkBlue">
        <div>
          <img src={props.image} alt="project preview" className="pb-6" />
          <p className="font-bold pb-2 text-thickBrownishYellow">
            {props.title}
          </p>

          <p className="pb-4">{props.description}</p>
        </div>
      </div>
    </section>
  );
}
