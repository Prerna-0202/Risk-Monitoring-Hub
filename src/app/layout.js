import { Inter } from "next/font/google";
import "./globals.scss";
import DataProvider from "@/store/DataProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Risk Monitor Hub",
  description:
    "Simple dashboard showing all the users currently in the monitoring queue who need to be reviewed for risky behaviour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
