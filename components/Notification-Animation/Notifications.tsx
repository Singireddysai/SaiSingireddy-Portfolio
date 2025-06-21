"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Database Connected",
    description: "PostgreSQL instance linked",
    time: "15m ago",
    icon: "🗄️",
    color: "#4A90E2",
  },
  {
    name: "API Endpoint Deployed",
    description: "User auth route live",
    time: "12m ago",
    icon: "🚀",
    color: "#34D399",
  },
  {
    name: "New Signup",
    description: "First beta user onboarded",
    time: "10m ago",
    icon: "👥",
    color: "#FBBF24",
  },
  {
    name: "Email Sent",
    description: "Welcome sequence triggered",
    time: "8m ago",
    icon: "📨",
    color: "#6366F1",
  },
  {
    name: "Feature Deployed",
    description: "Dashboard analytics module live",
    time: "6m ago",
    icon: "📊",
    color: "#10B981",
  },
  {
    name: "Bug Resolved",
    description: "Fix for login redirect loop",
    time: "4m ago",
    icon: "🐞",
    color: "#EF4444",
  },
  {
    name: "Payment Integrated",
    description: "Stripe webhook configured",
    time: "2m ago",
    icon: "💳",
    color: "#8B5CF6",
  },
  {
    name: "Deployment Success",
    description: "Frontend pushed to Vercel",
    time: "1m ago",
    icon: "✅",
    color: "#22C55E",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative z-10 mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // dark styles
        "transform-gpu bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
