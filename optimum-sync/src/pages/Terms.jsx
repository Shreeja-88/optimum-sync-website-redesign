import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";

export default function Terms() {
  usePageTitle("Terms of service");
  return (
    <>
      <PageHeader title="Terms of service" crumbs={[{ label: "Terms of service" }]} />
      <Container className="py-16">
        <div className="max-w-3xl space-y-4 text-text-secondary">
          {/* Replace with the real terms before launch. */}
          <p>This is placeholder text. Add the rules for using the website and your services.</p>
        </div>
      </Container>
    </>
  );
}
