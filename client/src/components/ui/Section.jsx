import Container from "../Common/Container";

const Section = ({
  children,
  id,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`py-28 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;