// app/api/inngest/route.js
import { serve } from "inngest/next";

// ✅ IMPORTANT: correct import path
import {
  inngest,
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion,
} from "@/app/config/inngest";

// ✅ Required for Vercel
export const runtime = "nodejs";

// ✅ Register functions
export const { GET, POST } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
  ],
});