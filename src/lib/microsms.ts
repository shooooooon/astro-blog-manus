// src/lib/microcms.ts
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_ID, // サービスID
  apiKey: import.meta.env.MICROCMS_API_KEY, // APIキー
});
