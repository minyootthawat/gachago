import { RevealController } from "@/features/reveal/components/RevealController";

type RevealPageProps = {
  params: Promise<{ userPackId: string }>;
};

export default async function RevealPage({ params }: RevealPageProps) {
  const { userPackId } = await params;

  return <RevealController userPackId={userPackId} />;
}
