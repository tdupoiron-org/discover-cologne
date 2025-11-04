import { useState } from 'react'
import { onboardingSteps } from '@/data/onboarding'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft, X } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface OnboardingProps {
  open: boolean
  onComplete: () => void
  onSkip: () => void
}

export function Onboarding({ open, onComplete, onSkip }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const step = onboardingSteps[currentStep]
  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === onboardingSteps.length - 1

  const handleNext = () => {
    if (isLastStep) {
      onComplete()
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkip = () => {
    onSkip()
  }

  if (!step) return null

  const Icon = step.icon

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onSkip()}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        {/* Header Image (if exists) */}
        {step.image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        )}

        <div className="p-6">
          {/* Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-primary/10 rounded-full p-4">
              <Icon weight="fill" className="w-12 h-12 text-primary" />
            </div>
          </div>

          <DialogHeader className="space-y-3 mb-6">
            <DialogTitle className="text-2xl text-center">
              {step.title}
            </DialogTitle>
            <DialogDescription className="text-base text-center leading-relaxed">
              {step.description}
            </DialogDescription>
          </DialogHeader>

          {/* Progress Indicators */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {onboardingSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={cn(
                  'h-2 rounded-full transition-all',
                  index === currentStep
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted hover:bg-muted-foreground/30'
                )}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          <DialogFooter className="flex-row justify-between gap-3 sm:justify-between">
            {/* Skip Button */}
            {!isLastStep && (
              <Button
                variant="ghost"
                onClick={handleSkip}
                className="gap-1.5"
              >
                <X weight="bold" className="w-4 h-4" />
                Skip
              </Button>
            )}

            <div className="flex gap-2 ml-auto">
              {/* Previous Button */}
              {!isFirstStep && (
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  className="gap-1.5"
                >
                  <ArrowLeft weight="bold" className="w-4 h-4" />
                  Back
                </Button>
              )}

              {/* Next/Get Started Button */}
              <Button
                onClick={handleNext}
                className="gap-1.5"
              >
                {isLastStep ? 'Get Started' : 'Next'}
                <ArrowRight weight="bold" className="w-4 h-4" />
              </Button>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
