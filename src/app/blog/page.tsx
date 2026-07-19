import { Card } from "@/components/ui/card";

const posts = [
  "How AI agents change enterprise service delivery",
  "Designing secure internal tools with Next.js and Prisma",
  "A practical roadmap for analytics modernization"
];

export default function BlogPage() {
  return (
    <main className="section-pad">
      <div className="container">
        <h1 className="text-4xl font-semibold">Insights</h1>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.map((post) => <Card key={post} className="p-6"><h2 className="font-semibold">{post}</h2><p className="mt-3 text-sm text-muted-foreground">Prototype article placeholder ready for a CMS integration.</p></Card>)}
        </div>
      </div>
    </main>
  );
}
