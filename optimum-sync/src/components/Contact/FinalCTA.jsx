export default function FinalCTA({ onCtaClick }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-charcoal md:text-4xl">
        Have an Idea? Let's Build It.
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-text-secondary">
        Tell us what you're trying to build, improve, automate, or scale.
        We'll help you turn the idea into a practical digital solution.
      </p>
      <button
        onClick={onCtaClick}
        className="mt-6 rounded-full bg-charcoal px-8 py-3 font-semibold text-white transition hover:opacity-90"
      >
        Start a Conversation →
      </button>
      <p className="mt-3 text-sm text-text-muted">
        No commitment. Just a conversation about your project.
      </p>
    </div>
  );
}
