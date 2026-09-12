import fs from 'node:fs';

const constants = fs.readFileSync('constants.ts', 'utf8');
const readme = fs.readFileSync('README.md', 'utf8');
const combined = [constants, readme].join('\n');
const failures = [];

const dayMatches = [...constants.matchAll(/day: (\d+),\n\s+week:/g)];
if (dayMatches.length !== 10) failures.push('expected 10 days, found ' + dayMatches.length);

const dayIds = dayMatches.map((match) => Number(match[1]));
if (new Set(dayIds).size !== 10 || Math.min(...dayIds) !== 1 || Math.max(...dayIds) !== 10) {
  failures.push('day numbers must be unique and cover 1 through 10');
}

for (const required of [
  'What Is Logic?',
  'Thinking in Statements',
  'Truth vs Belief',
  'Deductive & Inductive Reasoning',
  'The Power of a Premise',
  'What Is Bias?',
  'Confirmation Bias',
  'Availability Heuristic',
  'Ad Hominem & Straw Man',
  'False Dilemmas & Red Herrings',
  'Week 1 Checkpoint',
  'Week 2 Checkpoint',
  'FINAL_REFLECTION_PROMPT',
  'Third-Option Scan'
]) {
  if (!constants.includes(required)) failures.push('required Part 1 content missing: ' + required);
}

if (!constants.includes("frameworkName: 'Declarative Sentences'")) {
  failures.push('Day 2 Declarative Sentences framework is missing');
}

const declarativeCount = (constants.match(/frameworkName: 'Declarative Sentences'/g) ?? []).length;
if (declarativeCount !== 1) failures.push('Declarative Sentences must appear as a named framework once, found ' + declarativeCount);

for (const forbidden of [
  'GET YOUR THINK ON',
  'GEMINI_API_KEY',
  'process.env.API_KEY',
  'Full Series → Complete Transformation'
]) {
  if (combined.includes(forbidden)) failures.push('forbidden legacy, internal-only, or secret-boundary phrase found: ' + forbidden);
}

for (const day of Array.from({ length: 10 }, (_, index) => index + 1)) {
  const coreIds = ['d' + day + '-map', 'd' + day + '-p1', 'd' + day + '-p2', 'd' + day + '-p3'];
  for (const id of coreIds) {
    if (!constants.includes("id: '" + id + "'")) failures.push('missing core prompt ' + id);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('PASS Part 1 curriculum, de-duplication, public-firewall, and secret-boundary validation');
