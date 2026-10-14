# The Critical Thinker's Journey™ Part 1: Building Clarity and Confidence

## Candidate product baseline

Part 1 is the CTJ foundation product: a 10-day curriculum covering logic, statements, truth and belief, deductive and inductive reasoning, premises, bias, confirmation bias, the availability heuristic, ad hominem and straw man reasoning, false dilemmas, and red herrings.

The modernized candidate preserves the curriculum while separating a focused four-response core session from optional deeper work.

## Run

Prerequisite: Node.js 22 or later.

```bash
npm install
npm run dev
```

Validation:

```bash
npm test
```

## Current architecture

- React, TypeScript, Vite
- 10 days, 2 checkpoints, 1 final reflection
- local browser persistence
- optional browser dictation
- deterministic local Thinking Partner prompts
- PDF, JSON, and TXT export
- responsive and accessibility controls
- no external AI API key
- no account or cloud backend in this candidate product-core baseline

## Source reconciliation

The candidate retains the substantive legacy Part 1 curriculum from the 2025 HTML source. Material modernization decisions include:

- core versus optional deeper prompts to reduce daily overload
- Day 10 uses a distinct Third-Option Scan rather than reusing the Day 2 Declarative Sentences framework
- public copy removes legacy internal-only GYTO language
- runtime claims now match actual persistence/export behavior

## Governance status

This branch is a candidate product baseline under Task ID `SC-CTJ-FAMILY-TECHNICAL-COMPLETION-20260912-15`.

Repository existence and commit wording do not independently designate canonical authority or authorize public release. DCS Level 0 approval, family reconciliation, integration work, accessibility review, and release validation remain separate gates.
