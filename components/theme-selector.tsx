"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const themes = {
  purple: {
    name: "Purple Vibes",
    primary: "262.1 83.3% 57.8%",
    accent: "262.1 83.3% 97.8%",
    accentForeground: "262.1 83.3% 17.8%",
    ring: "262.1 83.3% 57.8%",
    description: "Modern purple with great contrast",
  },
  blue: {
    name: "Ocean Blue",
    primary: "221.2 83.2% 53.3%",
    accent: "221.2 83.2% 97.3%",
    accentForeground: "221.2 83.2% 17.3%",
    ring: "221.2 83.2% 53.3%",
    description: "Deep blue like the ocean",
  },
  green: {
    name: "Forest Green",
    primary: "142.1 76.2% 36.3%",
    accent: "142.1 76.2% 96.3%",
    accentForeground: "142.1 76.2% 16.3%",
    ring: "142.1 76.2% 36.3%",
    description: "Natural green tones",
  },
  orange: {
    name: "Sunset Orange",
    primary: "24.6 95% 53.1%",
    accent: "24.6 95% 97.1%",
    accentForeground: "24.6 95% 17.1%",
    ring: "24.6 95% 53.1%",
    description: "Warm orange sunset",
  },
  rose: {
    name: "Rose Gold",
    primary: "346.8 77.2% 49.8%",
    accent: "346.8 77.2% 96.8%",
    accentForeground: "346.8 77.2% 16.8%",
    ring: "346.8 77.2% 49.8%",
    description: "Elegant rose gold",
  },
  slate: {
    name: "Midnight",
    primary: "217.2 32.6% 17.5%",
    accent: "217.2 32.6% 95.5%",
    accentForeground: "217.2 32.6% 7.5%",
    ring: "217.2 32.6% 17.5%",
    description: "Dark and sophisticated",
  },
}

export function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<keyof typeof themes>("purple")
  const [copied, setCopied] = useState(false)

  const generateCSS = (theme: (typeof themes)[keyof typeof themes]) => {
    return `:root {
  --primary: ${theme.primary};
  --primary-foreground: 210 20% 98%;
  --accent: ${theme.accent};
  --accent-foreground: ${theme.accentForeground};
  --ring: ${theme.ring};
}

.dark {
  --primary: ${theme.primary};
  --primary-foreground: 210 20% 98%;
  --accent: ${theme.accentForeground.replace(/\d+%$/, "16.9%")};
  --accent-foreground: 210 20% 98%;
  --ring: ${theme.ring};
}`
  }

  const copyToClipboard = async () => {
    const css = generateCSS(themes[selectedTheme])
    await navigator.clipboard.writeText(css)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Theme Picker */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {Object.entries(themes).map(([key, theme]) => (
          <button
            key={key}
            onClick={() => setSelectedTheme(key as keyof typeof themes)}
            className={cn(
              "p-4 rounded-lg border-2 transition-all hover:scale-105",
              selectedTheme === key ? "border-primary bg-primary/5" : "border-border hover:border-primary/50",
            )}
          >
            <div
              className="w-8 h-8 rounded-full mx-auto mb-2 border-2 border-white shadow-sm"
              style={{ backgroundColor: `hsl(${theme.primary})` }}
            />
            <div className="text-sm font-medium">{theme.name}</div>
          </button>
        ))}
      </div>

      {/* Selected Theme Info */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: `hsl(${themes[selectedTheme].primary})` }}
              />
              <div>
                <CardTitle>{themes[selectedTheme].name}</CardTitle>
                <CardDescription>{themes[selectedTheme].description}</CardDescription>
              </div>
            </div>
            <Badge variant="secondary">Selected</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">CSS Variables (add to your globals.css):</h4>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{generateCSS(themes[selectedTheme])}</code>
                </pre>
                <Button size="sm" variant="outline" className="absolute top-2 right-2" onClick={copyToClipboard}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              💡 <strong>Pro tip:</strong> After copying, paste this into your <code>app/globals.css</code> file and all
              shadcn/ui components will automatically use your new theme!
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
