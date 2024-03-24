import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <title>PSS</title>
      <main>
        <AntdRegistry>
          <div className='p-5'>{children}</div>
        </AntdRegistry>
      </main>
    </html>
  );
}
