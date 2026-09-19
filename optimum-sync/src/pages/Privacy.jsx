import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";

export default function Privacy() {
  usePageTitle("Privacy policy");
  return (
    <>
      <PageHeader title="Privacy policy" crumbs={[{ label: "Privacy policy" }]} />
      <Container className="py-16">
        <div className="max-w-3xl space-y-4 text-text-secondary">
          {/* Replace with the real policy text before launch. */}
          <p>This is placeholder text. Add what data you collect, why, how long you keep it, and how people can ask you to delete it.</p>
        </div>
      </Container>
    </>
  );
}
