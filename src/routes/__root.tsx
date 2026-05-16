import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { BackgroundMusic } from "@/components/BackgroundMusic";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif-display text-shimmer">404</h1>
        <h2 className="mt-4 text-xl font-script text-accent">Lost in love?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page ran away — but my heart didn't. Come back home 💕
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Take me back ♥
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "anan" },
      { name: "description", content: "An animated birthday surprise website designed to delight a loved one with personalized messages and interactive elements." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "anan" },
      { property: "og:description", content: "An animated birthday surprise website designed to delight a loved one with personalized messages and interactive elements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "anan" },
      { name: "twitter:description", content: "An animated birthday surprise website designed to delight a loved one with personalized messages and interactive elements." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d22d52a5-7344-4222-a049-a145c3654bd0/id-preview-c2b4e8c4--8bd91d47-7548-4338-bb6f-99eee301e174.lovable.app-1778498815193.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d22d52a5-7344-4222-a049-a145c3654bd0/id-preview-c2b4e8c4--8bd91d47-7548-4338-bb6f-99eee301e174.lovable.app-1778498815193.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <BackgroundMusic />
    </>
  );
}
