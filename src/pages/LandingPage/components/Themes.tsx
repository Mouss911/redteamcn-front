import { useState } from "react";
import { ColorTabs } from "../../../components/ColorTabs";
import { ThemePreviewCard, type ThemePreview } from "../../../components/ThemePreviewCard";

const colorThemes = [
  { id: "default", label: "Default", color: "#000000" },
  { id: "red", label: "Red", color: "#ef4444" },
  { id: "rose", label: "Rose", color: "#f43f5e" },
  { id: "orange", label: "Orange", color: "#f97316" },
  { id: "green", label: "Green", color: "#22c55e" },
  { id: "blue", label: "Blue", color: "#3b82f6" },
  { id: "yellow", label: "Yellow", color: "#eab308" },
  { id: "violet", label: "Violet", color: "#8b5cf6" },
];

export function ThemesPage() {
  const [activeTheme, setActiveTheme] = useState("orange");

  const themePreviews: ThemePreview[] = [
    {
      id: "dashboard-stats",
      title: "Dashboard Stats",
      preview: (
        <div className="grid grid-cols-2 gap-4">
          {/* Total Revenue Card */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Revenue</p>
            <p className="text-3xl font-bold">$15,231.89</p>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            <div className="h-20 flex items-end space-x-1">
              {[40, 60, 45, 70, 55, 80, 65, 90, 75, 85, 70, 95].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-orange-500 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          {/* Subscriptions Card */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Subscriptions</p>
            <p className="text-3xl font-bold">+2,350</p>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            <div className="h-20 flex items-end">
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <path
                  d="M 0,30 Q 25,10 50,20 T 100,15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-orange-500"
                />
                <path
                  d="M 0,30 Q 25,10 50,20 T 100,15 L 100,40 L 0,40 Z"
                  fill="currentColor"
                  className="text-orange-500 opacity-20"
                />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "subscription-form",
      title: "Subscription Form",
      preview: (
        <div className="space-y-4 max-w-sm">
          <div>
            <h3 className="text-lg font-semibold">Upgrade your Subscription</h3>
            <p className="text-sm text-muted-foreground">
              You are currently on the free plan. Upgrade to the pro plan to get access to all features.
            </p>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Max Leiter"
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="me@acme.com"
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2">
                <label className="text-sm font-medium">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">CVC</label>
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium">Plan</label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button className="px-3 py-2 border rounded-md text-sm hover:bg-muted">
                  <span className="text-orange-500">●</span> Starter Plan
                </button>
                <button className="px-3 py-2 border rounded-md text-sm hover:bg-muted">
                  Pro Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "create-account",
      title: "Create Account",
      preview: (
        <div className="space-y-4 max-w-sm">
          <div>
            <h3 className="text-lg font-semibold">Create an account</h3>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <button className="px-4 py-2 border rounded-md text-sm hover:bg-muted flex items-center justify-center">
              <span className="mr-2">⚫</span> GitHub
            </button>
            <button className="px-4 py-2 border rounded-md text-sm hover:bg-muted flex items-center justify-center">
              <span className="mr-2">G</span> Google
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="m@example.com"
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
              />
            </div>
            
            <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600">
              Create Account
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "calendar",
      title: "Calendar",
      preview: (
        <div className="space-y-3 max-w-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">June 2025</h3>
            <div className="flex space-x-1">
              <button className="p-1 hover:bg-muted rounded">←</button>
              <button className="p-1 hover:bg-muted rounded">→</button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div key={day} className="font-medium text-muted-foreground py-1">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 2;
              const isToday = day === 5 || day === 13;
              return (
                <div
                  key={i}
                  className={`py-1 rounded ${
                    day > 0 && day <= 30
                      ? isToday
                        ? "bg-orange-500 text-white font-semibold"
                        : "hover:bg-muted cursor-pointer"
                      : "text-muted-foreground"
                  }`}
                >
                  {day > 0 && day <= 30 ? day : ""}
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      id: "goal-tracker",
      title: "Goal Tracker",
      preview: (
        <div className="space-y-3 max-w-sm">
          <div>
            <h3 className="font-semibold">Move Goal</h3>
            <p className="text-sm text-muted-foreground">Set your daily activity goal.</p>
          </div>
          
          <div className="flex items-center justify-center py-6">
            <div className="relative">
              <svg className="w-32 h-32">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-muted"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray="351.86"
                  strokeDashoffset="87.96"
                  className="text-orange-500"
                  transform="rotate(-90 64 64)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">350</span>
                <span className="text-xs text-muted-foreground">CALORIES/DAY</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <button className="p-2 border rounded-full">−</button>
            <div className="flex space-x-1">
              {[40, 60, 50, 80, 70, 90, 85].map((height, i) => (
                <div
                  key={i}
                  className="w-6 bg-orange-500 rounded-t"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
            <button className="p-2 border rounded-full">+</button>
          </div>
          
          <button className="w-full px-4 py-2 border rounded-md text-sm hover:bg-muted">
            Set Goal
          </button>
        </div>
      ),
    },
    {
      id: "exercise-chart",
      title: "Exercise Minutes",
      preview: (
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold">Exercise Minutes</h3>
            <p className="text-sm text-muted-foreground">
              Your exercise minutes are ahead of where you normally are.
            </p>
          </div>
          
          <div className="h-32 flex items-end justify-between">
            <svg viewBox="0 0 200 80" className="w-full h-full">
              <path
                d="M 0,60 L 30,50 L 60,30 L 90,45 L 120,35 L 150,40 L 180,35 L 200,38"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-orange-500"
              />
              <circle cx="90" cy="45" r="4" fill="currentColor" className="text-orange-500" />
            </svg>
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      ),
    },
    {
      id: "payments-table",
      title: "Payments",
      preview: (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Payments</h3>
            <button className="text-sm text-orange-500 hover:underline">Add Payment</button>
          </div>
          
          <div className="border rounded-md">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left p-2 font-medium">Status</th>
                  <th className="text-left p-2 font-medium">Email</th>
                  <th className="text-right p-2 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { status: "Success", email: "m@example.com", amount: "$250.00" },
                  { status: "Processing", email: "john@example.com", amount: "$150.00" },
                  { status: "Success", email: "jane@example.com", amount: "$350.00" },
                  { status: "Failed", email: "bob@example.com", amount: "$450.00" },
                ].map((payment, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="p-2">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-xs ${
                          payment.status === "Success"
                            ? "bg-green-100 text-green-700"
                            : payment.status === "Processing"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="p-2 text-muted-foreground">{payment.email}</td>
                    <td className="p-2 text-right font-medium">{payment.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Themes</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Choose a theme for your components
          </p>
        </div>
        <button className="px-4 py-2 border rounded-md text-sm hover:bg-muted">
          Copy Code
        </button>
      </div>

      {/* Color Tabs */}
      <ColorTabs tabs={colorThemes} activeTab={activeTheme} onTabChange={setActiveTheme} />

      {/* Theme Previews Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {themePreviews.map((preview) => (
          <ThemePreviewCard key={preview.id} preview={preview} />
        ))}
      </div>
    </div>
  );
}
