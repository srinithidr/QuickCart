import { serve } from "inngest/next";

// ✅ FIXED: use relative path (IMPORTANT)
import {
  inngest,
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion,
} from "../../config/inngest";

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