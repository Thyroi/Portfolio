import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { WriteupSummary } from "@/types/content";

type PostCardProps = {
  post: WriteupSummary;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <Card className="h-full border-slate-900/10 bg-white/88 transition-transform duration-200 hover:-translate-y-1 hover:ring-slate-900/20">
        <CardHeader>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
            {post.date}
          </p>
          <CardTitle className="text-slate-950">{post.title}</CardTitle>
          <CardDescription className="leading-7">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-slate-300 text-slate-600">
              {tag}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="justify-between text-sm text-slate-500">
          <span>{post.tools.length} tools referenced</span>
          <span className="font-medium text-slate-900">Open post</span>
        </CardFooter>
      </Card>
    </Link>
  );
}