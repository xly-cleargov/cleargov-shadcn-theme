"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeShowcase } from "@/components/theme-showcase"
import { Badge } from "@/components/ui/badge"
import { CheckIcon, CopyIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="cleargov-container flex h-14 items-center">
          <div className="mr-4 flex">
            <div className="h-7 w-7 rounded-md cleargov-gradient-bg"></div>
            <span className="ml-2 font-semibold">ClearGov Theme</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Features
              </a>
              <a href="#usage" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Usage
              </a>
              <a href="#showcase" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Showcase
              </a>
            </nav>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="cleargov-section pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
          <div className="cleargov-container">
            <div className="flex flex-col items-center text-center">
              <Badge className="mb-4" variant="secondary">
                v1.0.0
              </Badge>
              <h1 className="cleargov-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                ClearGov shadcn/ui Theme
              </h1>
              <p className="cleargov-subheading text-lg md:text-xl max-w-[42rem] mb-8">
                A clean, professional theme with blue accents for government and enterprise applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="cleargov-button">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="cleargov-button">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="cleargov-section bg-muted/50">
          <div className="cleargov-container">
            <div className="text-center mb-12">
              <h2 className="cleargov-heading text-2xl md:text-3xl mb-4">Theme Features</h2>
              <p className="cleargov-subheading max-w-[42rem] mx-auto">
                Everything you need for professional government and enterprise applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Professional Blue Palette",
                  description:
                    "Clean, trustworthy blue color scheme perfect for government and enterprise applications",
                },
                {
                  title: "Custom Components",
                  description: "Pre-styled components with consistent design language across your application",
                },
                {
                  title: "Accessibility",
                  description: "WCAG 2.1 AA compliant color contrast and keyboard navigation",
                },
                {
                  title: "Dark Mode",
                  description: "Optimized dark mode with perfect contrast and readability",
                },
                {
                  title: "Custom Utility Classes",
                  description: "Special utility classes for common ClearGov patterns and layouts",
                },
                {
                  title: "Easy Integration",
                  description: "Simple to reference in v0 prompts for consistent styling",
                },
              ].map((feature, index) => (
                <Card key={index} className="cleargov-card">
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Section */}
        <section id="usage" className="cleargov-section">
          <div className="cleargov-container">
            <div className="text-center mb-12">
              <h2 className="cleargov-heading text-2xl md:text-3xl mb-4">How to Use in v0</h2>
              <p className="cleargov-subheading max-w-[42rem] mx-auto">
                Reference this theme in your v0 prompts to create consistent, professional applications.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="cleargov-card">
                <CardHeader>
                  <CardTitle>Reference in Your Prompt</CardTitle>
                  <CardDescription>Copy this text and include it in your v0 prompt</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-muted p-4 rounded-md">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`Please use the cleargov-shadcn-theme for this project. 
It should have a professional blue color scheme with 
clean, accessible components suitable for government 
and enterprise applications.`}</code>
                    </pre>
                    <Button size="sm" variant="ghost" className="absolute top-2 right-2" onClick={() => {}}>
                      <CopyIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Simple 3-Step Process</h3>
                  <ul className="space-y-4">
                    {[
                      "Include the reference text in your v0 prompt",
                      "Describe what you want to build",
                      "v0 will automatically apply the ClearGov theme to your project",
                    ].map((step, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full cleargov-gradient-bg flex items-center justify-center">
                          <CheckIcon className="h-3 w-3 text-white" />
                        </div>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Example Prompt</h3>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm">
                      "Please use the cleargov-shadcn-theme to create a dashboard for a city government portal with a
                      statistics overview, recent activity feed, and navigation sidebar."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section id="showcase" className="cleargov-section bg-muted/50">
          <div className="cleargov-container">
            <div className="text-center mb-12">
              <h2 className="cleargov-heading text-2xl md:text-3xl mb-4">Component Showcase</h2>
              <p className="cleargov-subheading max-w-[42rem] mx-auto">
                Preview how components look with the ClearGov theme.
              </p>
            </div>

            <ThemeShowcase />
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="cleargov-container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for v0 users. ClearGov Theme © {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Documentation
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
