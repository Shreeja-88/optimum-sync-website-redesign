const blogPosts = [
  {
    id: 1,
    title: "How We Approach Scalable System Design",
    excerpt:
      "A look at the principles we follow when architecting systems built to grow with our clients.",
    content:
      "When we design a system, we start by asking how it will need to change, not just how it will work on day one. That means favoring modular architecture, clear boundaries between services, and monitoring that surfaces problems before they become outages. Scalability isn't just about handling more traffic — it's about the system staying maintainable as the team and the codebase grow.",
    date: "Sep 2026",
    coverId: "scalable",
  },
  {
    id: 2,
    title: "5 Lessons from Our Latest Client Rollout",
    excerpt:
      "What went well, what we learned, and how it shaped the way we run projects today.",
    content:
      "Our latest rollout taught us the value of over-communicating timelines, testing with real data earlier, and building rollback plans before launch day, not during an incident. We also learned that a short daily sync with the client caught misunderstandings early that would have been expensive to fix later. These lessons are now part of how we kick off every new project.",
    date: "Aug 2026",
    coverId: "rollout",
  },
  {
    id: 3,
    title: "Why Sync Matters More Than Speed",
    excerpt:
      "Fast systems that fall out of sync cause more damage than slow ones that stay consistent.",
    content:
      "It's tempting to optimize purely for speed, but a fast system that shows stale or inconsistent data erodes trust faster than a slower one that's always correct. We prioritize consistency guarantees first, then optimize performance within those constraints — which is also where the name Optimum Sync comes from.",
    date: "Jul 2026",
    coverId: "sync",
  },
];

export default blogPosts;
