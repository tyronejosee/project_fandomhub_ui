import LeftSidebar from "@/components/leftsidebar/LeftSidebar";

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LeftSidebar />
      <div className="bg-red-600">
        {children}
      </div>
    </>
  );
}
