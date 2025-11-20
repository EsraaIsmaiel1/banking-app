// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://6e0e1fe4cb4038bdd483b05e220f7eca@o4509928882765824.ingest.us.sentry.io/4509928884797440",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableTracing: true,
  

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
