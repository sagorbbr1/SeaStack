import Container from "./Container";

const Section = ({
  children,
  id,
}) => {
  return (
    <section
      id={id}
      className="py-28"
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;