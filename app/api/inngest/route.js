import { serve } from "inngest/next";

// ✅ correct relative path
import {
  inngest,
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion,
} from "../../config/inngest";

// ✅ Required for Vercel
export const runtime = "nodejs";

// ✅ API handlers
export const { GET, POST } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
  ],
});