"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { BellIcon, CheckIcon, CreditCardIcon, UserIcon, SettingsIcon } from "lucide-react"

export function ThemeShowcase() {
  const [progress, setProgress] = useState(45)

  return (
    <Tabs defaultValue="buttons" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="buttons">Buttons</TabsTrigger>
        <TabsTrigger value="cards">Cards</TabsTrigger>
        <TabsTrigger value="forms">Forms</TabsTrigger>
        <TabsTrigger value="misc">Misc</TabsTrigger>
      </TabsList>

      <TabsContent value="buttons" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>All button variants with the ClearGov theme</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <Button className="cleargov-button">Primary</Button>
              <Button variant="secondary" className="cleargov-button">
                Secondary
              </Button>
              <Button variant="outline" className="cleargov-button">
                Outline
              </Button>
              <Button variant="ghost" className="cleargov-button">
                Ghost
              </Button>
              <Button variant="destructive" className="cleargov-button">
                Destructive
              </Button>
              <Button variant="link" className="cleargov-button">
                Link
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="sm" className="cleargov-button">
                Small
              </Button>
              <Button className="cleargov-button">Default</Button>
              <Button size="lg" className="cleargov-button">
                Large
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="cleargov-button">
                <UserIcon className="mr-2 h-4 w-4" />
                With Icon
              </Button>
              <Button variant="outline" className="cleargov-button">
                <SettingsIcon className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="secondary" className="cleargov-button">
                <BellIcon className="mr-2 h-4 w-4" />
                Notifications
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="cards" className="space-y-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="cleargov-card">
            <CardHeader>
              <CardTitle>Account Summary</CardTitle>
              <CardDescription>Overview of your account status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Status</span>
                  <Badge>Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Plan</span>
                  <span>Professional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Next billing</span>
                  <span>July 1, 2023</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full cleargov-button">
                <CreditCardIcon className="mr-2 h-4 w-4" />
                Manage Billing
              </Button>
            </CardFooter>
          </Card>

          <Card className="cleargov-card">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/diverse-avatars.png" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Jane Doe</CardTitle>
                  <CardDescription>Administrator</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Email</span>
                  <span className="text-sm">jane.doe@example.gov</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Department</span>
                  <span className="text-sm">IT Services</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Role</span>
                  <Badge variant="outline">Admin</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" size="sm" className="cleargov-button">
                View Profile
              </Button>
              <Button size="sm" className="cleargov-button">
                Edit
              </Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="forms" className="space-y-4 mt-4">
        <Card className="cleargov-card">
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
            <CardDescription>Input fields and controls with the ClearGov theme</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications" className="cursor-pointer">
                  Enable notifications
                </Label>
                <Switch id="notifications" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="volume">Volume ({progress}%)</Label>
                  <span className="text-sm text-muted-foreground">{progress}%</span>
                </div>
                <Slider
                  id="volume"
                  min={0}
                  max={100}
                  step={1}
                  value={[progress]}
                  onValueChange={(value) => setProgress(value[0])}
                />
              </div>

              <div className="space-y-2">
                <Label>Progress</Label>
                <Progress value={progress} />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full cleargov-button">Submit</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="misc" className="space-y-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="cleargov-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,853</div>
              <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              <div className="mt-4 h-1 w-full bg-muted">
                <div className="h-1 w-[75%] cleargov-gradient-bg" />
              </div>
            </CardContent>
          </Card>

          <Card className="cleargov-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Active Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">482</div>
              <p className="text-xs text-muted-foreground">+5.2% from yesterday</p>
              <div className="mt-4 h-1 w-full bg-muted">
                <div className="h-1 w-[45%] cleargov-gradient-bg" />
              </div>
            </CardContent>
          </Card>

          <Card className="cleargov-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Completion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89.2%</div>
              <p className="text-xs text-muted-foreground">+2.1% from last week</p>
              <div className="mt-4 h-1 w-full bg-muted">
                <div className="h-1 w-[89%] cleargov-gradient-bg" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="cleargov-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  user: "Jane Smith",
                  action: "Updated department budget",
                  time: "2 hours ago",
                  status: "completed",
                },
                {
                  user: "Mark Johnson",
                  action: "Submitted new permit application",
                  time: "5 hours ago",
                  status: "pending",
                },
                {
                  user: "Sarah Williams",
                  action: "Approved vacation request",
                  time: "Yesterday",
                  status: "completed",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{item.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{item.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.user} • {item.time}
                      </p>
                    </div>
                  </div>
                  <Badge variant={item.status === "completed" ? "outline" : "secondary"}>
                    {item.status === "completed" && <CheckIcon className="mr-1 h-3 w-3" />}
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
