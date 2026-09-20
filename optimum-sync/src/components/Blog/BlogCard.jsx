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

export default function BlogCard({ post, onReadMore }) {
  const { title, excerpt, date, coverId } = post;
  const Cover = covers[coverId];

  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden bg-pale-blue">
        {Cover && <Cover />}
      </div>
      <div className="flex flex-col gap-2 p-5">
        <span className="text-xs uppercase tracking-wide text-text-muted">{date}</span>
        <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
        <p className="flex-1 text-sm text-text-secondary">{excerpt}</p>
        <button
          onClick={() => onReadMore(post)}
          className="mt-1 w-fit text-sm font-semibold text-charcoal underline underline-offset-4 hover:opacity-70"
        >
          Read more →
        </button>
      </div>
    </article>
  );
}
