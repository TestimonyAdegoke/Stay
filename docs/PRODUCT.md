# Stay — Product foundation

## Promise
Stay helps people keep commitments they have deliberately made to themselves and to people they trust.

## Commitment types
1. **Practice** — do something: prayer, Scripture, study, exercise, journaling.
2. **Limit** — keep something within a boundary: social media, games, entertainment, spending.
3. **Block** — do not access a user-selected category or application.

## Enforcement levels
- **Gentle** — reminders and reflection prompts.
- **Firm** — friction, cooldowns, repeated warnings, optional partner events.
- **Locked** — strongest OS-supported restriction; changes/overrides can require delay or partner involvement.

## Accountability
A partner never automatically gets all activity. A user shares commitments individually and chooses whether the partner sees progress, missed commitments, or enforcement events.

## Core event loop
Commitment → device/check-in signal → rule evaluation → intervention → optional accountability event → reflection/recovery → progress insight.

## Safety architecture
Stay must not silently become stalkerware. Monitoring and sharing are explicit, visible, revocable, and scoped. Highly sensitive raw screen content should not be collected by default. Device-control capabilities must disclose OS permissions and limitations clearly.

## Native roadmap
### Android
Investigate UsageStats, Accessibility (only where policy-compliant), VPN/DNS filtering, DevicePolicyManager for managed-device deployments, foreground services, and tamper/protection-state signals.

### iOS
Use supported Screen Time / FamilyControls / ManagedSettings capabilities where entitlement and App Store policy permit. Expect narrower enforcement than Android.

## Next build slices
Authentication → onboarding → commitment builder → partner invitations → real check-ins → notification/escalation engine → Android enforcement prototype → analytics and recovery flows.
