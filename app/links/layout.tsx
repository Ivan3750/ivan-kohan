export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <div className="overflow-y-hidden w-full h-full">

  {children}
  </div>
  </>;
}
