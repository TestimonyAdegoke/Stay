# Device enforcement architecture

Stay's UI is cross-platform; enforcement is platform-native behind `DeviceEnforcementProvider`.

## Android implementation

### Signals
- Usage access: app foreground time and package-level usage totals.
- Local VPN/DNS layer: domain/category filtering without uploading browsing content.
- Protection health: permission loss, VPN stopped, battery/background restrictions, and app removal signals where the OS exposes them.

### Intervention
- Warning overlay/notification before a limit.
- At a limit, supported blocking experience routes the user back into Stay.
- Firm/Strong overrides can require a cooldown, reason, or partner approval according to the commitment.

### Managed devices
For organization-owned or dedicated devices, Android DevicePolicyManager/device-owner mode can provide stronger controls than a normal consumer app. Do not represent these controls as available to ordinary Play Store installs.

## iOS implementation
Use Apple's supported FamilyControls / DeviceActivity / ManagedSettings flow when the required entitlement is approved. The user selects applications/categories through Apple's privacy-preserving picker; Stay schedules monitoring and applies shields. iOS will remain more constrained than Android.

## Accountability events
Raw screen content is not part of the default enforcement contract. Shareable events are structured: commitment, event type, time, protection state and user-authored override reason. Any future visual-proof feature must be separately consented, platform-permitted, visibly active, and designed to avoid secrets/private conversations.

## Tamper model
A protection gap is an event, not proof of misconduct. Stay may report that protection became unavailable; it must not claim what the user did during that period.
