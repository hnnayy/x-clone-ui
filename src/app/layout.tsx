import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-full mx-auto flex justify-between">
          <div className="px-2 xsm:px-4 xxl:px-8 hidden md:block">
            <LeftBar />
          </div>
          <div className="flex-1 lg:max-w-2xl border-x-[1px] border-borderGray ">
            {children}
            
          </div>
          <div className="hidden lg:flex flex-1 lg:max-w-sm ml-8 sticky top-0 h-screen">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
