// Entry: "Your AI Therapist's Diagnosis" (make.fun program/v1)
// Writes one deterministic line — the diagnosis an AI therapist hands its human.
// Text only: standard library, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIAGNOSIS =
  "Diagnosis: compartmentalization. You've scheduled your crying for Sundays at nine, like a gym class, and wonder why it feels impersonal. Attendance is perfect. Benefit is zero. Same time next week?";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), DIAGNOSIS, "utf8");
