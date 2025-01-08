const Section = ({ children, id }) => {
  return (
    <section className="flex items-center justify-center min-h-screen p-8" id={id}>
      <div className="w-full max-w-5xl">{children}</div>
    </section>
  );
};

export default Section;
