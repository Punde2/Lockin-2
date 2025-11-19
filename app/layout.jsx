export const metadata = {
  title: "Dashboard",
  description: "Personal dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
