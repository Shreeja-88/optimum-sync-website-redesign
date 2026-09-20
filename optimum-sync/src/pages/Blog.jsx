import { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import BlogCard from "../components/Blog/BlogCard";
import BlogPostModal from "../components/Blog/BlogPostModal";
import blogPosts from "../data/blogPosts";

// P5 builds this page.
export default function Blog() {
  usePageTitle("Blog", "Articles and updates from the Optimum Sync team.");
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
      <PageHeader title="Blog" subtitle="Articles and updates from our team." crumbs={[{ label: "Blog" }]} />
      <Section title="Latest posts">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} onReadMore={setSelectedPost} />
          ))}
        </div>
      </Section>
      <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </>
  );
}
