import { forwardRef } from "react";
import Container from "../Common/Container";

const Section = forwardRef(
  (
    {
      children,
      id,
      className = "",
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`py-28 ${className}`}
      >
        <Container>{children}</Container>
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;