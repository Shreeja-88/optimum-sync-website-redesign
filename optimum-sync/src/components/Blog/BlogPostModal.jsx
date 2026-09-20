import {
  ScalableSystemIllustration,
  ClientRolloutIllustration,
  SyncIllustration,
} from "./BlogIllustrations";

const covers = {
  scalable: ScalableSystemIllustration,
  rollout: ClientRolloutIllustration,
  sync: SyncIllustration,
};

export default function BlogPostModal({ post, onClose }) {
  if (!post) return null;
  const Cover = covers[post.coverId];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="float-right text-2xl leading-none text-text-muted hover:text-charcoal"
          aria-label="Close"
        >
          ×
        </button>
        <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-pale-blue">
          {Cover && <Cover />}
        </div>
        <span className="text-xs uppercase tracking-wide text-text-muted">{post.date}</span>
        <h2 className="mt-1 text-2xl font-bold text-charcoal">{post.title}</h2>
        <p className="mt-4 leading-relaxed text-text-secondary">{post.content}</p>
      </div>
    </div>
  );
}
