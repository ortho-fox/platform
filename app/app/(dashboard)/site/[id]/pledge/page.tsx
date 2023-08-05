import PledgeSettings from "@/components/pledge-settings";
import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
// import AnalyticsMockup from "@/components/analytics";

export default async function SitePledegSettings({
  params,
}: {
  params: { id: string };
}) {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  const data = await prisma.site.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!data || data.userId !== session.user.id) {
    notFound();
  }

  const url = `${data.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`;

  return (
    <>
      <PledgeSettings />
    </>
  );
}
