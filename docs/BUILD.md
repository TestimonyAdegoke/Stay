# Build and release

## Local
1. Install Node LTS and Expo tooling.
2. Copy `.env.example` to `.env`.
3. Configure Supabase URL and anon key.
4. Run `npm install` and `npx expo start`.

## Native enforcement builds
Expo Go is insufficient for custom enforcement modules. Generate native projects / use development builds, add the Android and iOS native providers, then test on physical devices.

## Backend
Apply `supabase/schema.sql` to a Supabase project. Authentication should use Supabase Auth. Never put service-role credentials in the mobile app.

## Release gates
- Unit tests for rule evaluation.
- RLS tests with owner, partner and unrelated-user fixtures.
- Physical Android device tests across major OEM background-management behaviors.
- iOS entitlement approval and Screen Time API tests.
- Privacy review for every newly collected signal.
- Accessibility and notification-permission flows.
