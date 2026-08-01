---
title: About Me
date: 2026-08-01
excerpt: A little bit about me so you know who you were working with
---

Hello, I am Lester. I build production apps. But I wasn't until ten years ago. Let's back up a bit.

## Education

I took up Bachelor of Science in Agricultural Economics major in Agricultural Marketing and Prices at the University of the Philippines - Los Baños and graduated Cum laude in 2011. In 2016, I started taking Master in Development Economics at the University of the Philippines - Diliman and completed it in 2021. 

While studying in masters, I took up web development on the side. My colleague shared a book with me about learning PHP and MySQL in 24 hours. Yes, that kind of book. I started it as a pastime and a hobby to cure the boredom during weekends. I started building the sample app in there, an e-commerce app. I had fun so I decided, I'd build an actual app for my work. I'll talk about it later. Later on, I explored even more tech stacks like Laravel, Vuejs, React, Quasar Framework, Python, Dart, Flutter, and so on, every time I need to solve a problem. I bought courses in Udemy as well to further my knowledge. I joined several communities in Facebook and Reddit so I could interact with others. I'd find question and try to answer them. What better way to learn than helping others learn? In this way, I learned a lot in software development. The process never ends, I learn something new every day.

## Work Experience

I worked a total of 12 years in the government at the Department of Agriculture Central Office. 

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
