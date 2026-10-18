import type { JourneyStep, Story } from "./types";

export const journeySteps: { step: JourneyStep; num: string; label: string }[] = [
  { step: "problem", num: "01", label: "The problem" },
  { step: "idea", num: "02", label: "The idea" },
  { step: "original-application", num: "03", label: "The original application" },
  { step: "design-decision", num: "04", label: "The design decision" },
  { step: "turning-point", num: "05", label: "The turning point" },
  { step: "beyond-origins", num: "06", label: "Beyond its origins" },
  { step: "world-today", num: "07", label: "The world today" },
  { step: "lessons", num: "08", label: "What designers can learn" },
  { step: "explore-further", num: "09", label: "Explore further" },
];

/** Sections in canonical Journey order, each with its fixed step number. */
export function orderedSections(story: Story) {
  return journeySteps
    .map((meta) => ({ meta, section: story.sections.find((s) => s.step === meta.step) }))
    .filter((x): x is { meta: (typeof journeySteps)[number]; section: Story["sections"][number] } => !!x.section);
}
