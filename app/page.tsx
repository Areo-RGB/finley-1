"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Target, Users, AlertTriangle, ArrowRight, Dumbbell, Zap } from "lucide-react"
import { WorkoutSession } from "@/components/workout-session"
import * as Collapsible from "@radix-ui/react-collapsible"
import Image from "next/image"

type TrainingProgram = "fifa" | "stretch" | null

export default function HomePage() {
  const [activeProgram, setActiveProgram] = useState<TrainingProgram>(null)
  const [startingPhase, setStartingPhase] = useState<1 | 2 | 3>(1)

  if (activeProgram === "fifa") {
    return <WorkoutSession onExit={() => setActiveProgram(null)} startingPhase={startingPhase} programType="fifa" />
  }

  if (activeProgram === "stretch") {
    return <WorkoutSession onExit={() => setActiveProgram(null)} programType="stretch" />
  }

  const handlePhaseClick = (phase: 1 | 2 | 3) => {
    setStartingPhase(phase)
    setActiveProgram("fifa")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-3" />
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="container mx-auto px-4 pt-6">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-background">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-6 sm:p-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
                  Finley
                </h2>
              </div>
              <div className="relative aspect-[16/9] md:aspect-auto md:h-full">
                <Image
                  src="/finley.webp"
                  alt="Player in action"
                  fill
                  priority
                  className="object-cover md:object-right rounded-b-2xl md:rounded-none md:rounded-r-2xl"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="programs" className="container mx-auto px-4 py-8">
        {/* Training Programs Overview */}
        <div className="mb-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* FIFA 11+ Program */}
            <Card className="bg-gradient-to-br from-card to-primary/10 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl text-primary">FIFA 11+</CardTitle>
                    <CardDescription className="text-base">Injury Prevention Training Program</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 hidden md:block">
                  The FIFA 11+ is a complete warm-up program to reduce injuries among soccer players aged 14 years and
                  older.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="h-6 w-6 text-primary mx-auto mb-1" />
                    <p className="font-semibold">26 Min</p>
                    <p className="text-xs text-muted-foreground">Duration</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-6 w-6 text-primary mx-auto mb-1" />
                    <p className="font-semibold">3 Phases</p>
                    <p className="text-xs text-muted-foreground">Structured</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-6 w-6 text-primary mx-auto mb-1" />
                    <p className="font-semibold">All Levels</p>
                    <p className="text-xs text-muted-foreground">Difficulty</p>
                  </div>
                </div>

                <Button onClick={() => setActiveProgram("fifa")} size="lg" className="w-full text-lg pulse-glow">
                  <Play className="mr-2 h-5 w-5" />
                  Start FIFA 11+ Training
                </Button>
              </CardContent>
            </Card>

            {/* Stretch Routine Program */}
            <Card className="bg-gradient-to-br from-card to-emerald-400/10 border-emerald-400/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-8 w-8 text-emerald-400" />
                  <div>
                    <CardTitle className="text-2xl text-emerald-400">Flexibility & Mobility</CardTitle>
                    <CardDescription className="text-base">Complete Stretch Routine</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 hidden md:block">
                  A comprehensive stretching routine with 22 different stretches to improve flexibility and mobility.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="h-6 w-6 text-emerald-400 mx-auto mb-1" />
                    <p className="font-semibold">16 Min</p>
                    <p className="text-xs text-muted-foreground">Duration</p>
                  </div>
                  <div className="text-center">
                    <Dumbbell className="h-6 w-6 text-emerald-400 mx-auto mb-1" />
                    <p className="font-semibold">22 Stretches</p>
                    <p className="text-xs text-muted-foreground">Exercises</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-6 w-6 text-emerald-400 mx-auto mb-1" />
                    <p className="font-semibold">Beginner</p>
                    <p className="text-xs text-muted-foreground">Friendly</p>
                  </div>
                </div>

                <Button
                  onClick={() => setActiveProgram("stretch")}
                  size="lg"
                  className="w-full text-lg bg-emerald-600 hover:bg-emerald-500 text-white pulse-glow"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Stretch Routine
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FIFA 11+ Quick Access */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">FIFA 11+ Quick Access</h3>
          <p className="text-muted-foreground mb-6">Jump directly to any phase of the FIFA 11+ program</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              className="border-primary/20 cursor-pointer transition-all duration-200 hover:border-primary/40 hover:shadow-lg hover:scale-[1.02]"
              onClick={() => handlePhaseClick(1)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-primary">Teil 1: Running</CardTitle>
                    <CardDescription>Dynamic warm-up and mobility</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Collapsible.Root defaultOpen={false}>
                      <div className="flex items-center gap-2">
                        <Collapsible.Trigger asChild>
                          <button
                            className="text-xs rounded-md border px-2 py-1 text-primary border-primary/30 hover:bg-primary/10"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Details
                          </button>
                        </Collapsible.Trigger>
                        <ArrowRight className="h-5 w-5 text-primary opacity-60" />
                      </div>
                      <Collapsible.Content>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Duration:</span>
                              <span className="font-semibold">8 minutes</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Exercises:</span>
                              <span className="font-semibold">6 drills</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Focus:</span>
                              <span className="font-semibold">Mobility</span>
                            </div>
                          </div>
                        </CardContent>
                      </Collapsible.Content>
                    </Collapsible.Root>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card
              className="border-primary/20 cursor-pointer transition-all duration-200 hover:border-primary/40 hover:shadow-lg hover:scale-[1.02]"
              onClick={() => handlePhaseClick(2)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-primary">Teil 2: Strength</CardTitle>
                    <CardDescription>Core stability and balance</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Collapsible.Root defaultOpen={false}>
                      <div className="flex items-center gap-2">
                        <Collapsible.Trigger asChild>
                          <button
                            className="text-xs rounded-md border px-2 py-1 text-primary border-primary/30 hover:bg-primary/10"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Details
                          </button>
                        </Collapsible.Trigger>
                        <ArrowRight className="h-5 w-5 text-primary opacity-60" />
                      </div>
                      <Collapsible.Content>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Duration:</span>
                              <span className="font-semibold">10 minutes</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Exercises:</span>
                              <span className="font-semibold">6 exercises</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Levels:</span>
                              <span className="font-semibold">3 difficulty</span>
                            </div>
                          </div>
                        </CardContent>
                      </Collapsible.Content>
                    </Collapsible.Root>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card
              className="border-primary/20 cursor-pointer transition-all duration-200 hover:border-primary/40 hover:shadow-lg hover:scale-[1.02]"
              onClick={() => handlePhaseClick(3)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-primary">Teil 3: Running</CardTitle>
                    <CardDescription>High-intensity drills</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Collapsible.Root defaultOpen={false}>
                      <div className="flex items-center gap-2">
                        <Collapsible.Trigger asChild>
                          <button
                            className="text-xs rounded-md border px-2 py-1 text-primary border-primary/30 hover:bg-primary/10"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Details
                          </button>
                        </Collapsible.Trigger>
                        <ArrowRight className="h-5 w-5 text-primary opacity-60" />
                      </div>
                      <Collapsible.Content>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Duration:</span>
                              <span className="font-semibold">8 minutes</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Exercises:</span>
                              <span className="font-semibold">3 drills</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Focus:</span>
                              <span className="font-semibold">Speed & Agility</span>
                            </div>
                          </div>
                        </CardContent>
                      </Collapsible.Content>
                    </Collapsible.Root>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Safety Notice */}
        <Card className="border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Important Safety Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>Always warm up</strong> before starting any training program
              </li>
              <li>• Maintain proper form over speed or repetitions</li>
              <li>• Stop immediately if you feel pain or discomfort</li>
              <li>• Stay hydrated throughout your workout</li>
              <li>• Listen to your body and rest when needed</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
