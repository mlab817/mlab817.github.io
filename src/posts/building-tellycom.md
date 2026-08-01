---
title: What I learned building Tellycom
date: 2026-07-15
excerpt: A Flutter marketplace app connecting hosts and clients — bookings, payments, live calls. Here's what I'd do differently.
---

Building Tellycom was the first time I had to hold an entire product in my head at once. Not just a feature or a module — the whole thing: auth, bookings, payments, live conference calls, notifications, app store submissions, and the business logic that ties it all together.

Here's what stuck with me.

## Flutter is fast until it isn't

The framework is genuinely impressive for cross-platform UI. One codebase, iOS and Android, looking native on both. But the moment you touch anything platform-specific — deep links, push notifications, background tasks, payment SDKs — you're in plugin territory, and plugin quality is all over the place.

My rule now: prototype the platform-specific parts first. Don't build the pretty UI and then discover the payment SDK doesn't support your use case.

## State management choices compound

I started with `setState`. Migrated to `Provider`. Eventually landed on `Riverpod`. Each migration cost time I didn't budget for. If I were starting today I'd pick `Riverpod` from day one — the learning curve upfront is real, but it pays off in maintainability.

## Real-time is a different problem class

Live calls introduced a whole category of problems I wasn't ready for: connection drops, latency, mute state synchronization, background/foreground transitions. I ended up using Agora, which handles the hard parts, but integrating it correctly still took two weeks I hadn't planned.

## Shipping to the App Store is its own project

Review times, provisioning profiles, entitlements, screenshots for every device size, privacy manifests. Budget at least a week for your first submission. Budget more if your app uses any sensitive permissions (microphone, camera, contacts) — Apple will ask questions.

## What I'd do differently

Solo-building a full product is doable, but you end up making decisions fast without a second opinion. The decisions I regret most weren't technical — they were product decisions I made in isolation. Find someone to pressure-test your assumptions, even informally.
