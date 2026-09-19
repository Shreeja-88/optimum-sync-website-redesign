import usePageTitle from "../hooks/usePageTitle";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <section className="py-24 md:py-32">
      <Container className="text-center">
        <p className="text-7xl font-extrabold text-brand md:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-bold text-charcoal">We can't find that page</h1>
        <p className="mx-auto mt-3 max-w-md text-text-secondary">
          The link may be broken or the page may have moved. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/">Go to home</Button>
          <Button to="/services" variant="outline">View services</Button>
          <Button to="/contact" variant="secondary">Contact us</Button>
        </div>
      </Container>
    </section>
  );
}
